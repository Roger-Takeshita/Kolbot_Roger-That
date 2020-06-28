/*
*  @filename      RogerThat.js
*  @author        Roger Takeshita
*  @desc          Pick Items, Drop Items, Follower, Any Leader, Hooks Menu
*/

function RogerThat() {
    let stop,
        leader,
        isLeaderHere,
        leaderUnit,
        result,
        player,
        coords,
        runFlag = false,
        messageFlag = false,
        tradeMessage = "",
        pvpFlag = false,
        chatFlag = false,
        attack = true,
        openContainers = true,
        checkLeaderFlag = false,
        checkPartyFlag = false,
        leaderLeftPartyFlag = false,
        unUsedSkill= me.getStat(5),
        actions = [],
        leaderAct,
        target,
        foundMatch = false;
    const classes = ["amazon", "sorceress", "necromancer", "paladin", "barbarian", "druid", "assassin"];
    const filename = "logs/leader.txt";

    //! PARTY ========================================================================
        //+ Get leader's party unit ===============================================
            this.getLeader = function (name) {
                if (me.ingame) {
                    let player = getParty();

                    if (player) {
                        do {
                            if (player.name === name) {
                                return player;
                            }
                        } while (player.getNext());
                    }
                }

                return false;
            };

        //+ Get leader's unit =====================================================
            this.getLeaderUnit = function (name) {
                let player = getUnit(0, name);

                if (player) {
                    do {
                        if (!player.dead) {
                            return player;
                        }
                    } while (player.getNext());
                }

                return false;
            };

        //+ Get leader's act from party unit ======================================
            this.checkLeaderAct = function (unit) {
                if (unit.area <= 39) {
                    return 1;
                }
                if (unit.area >= 40 && unit.area <= 74) {
                    return 2;
                }
                if (unit.area >= 75 && unit.area <= 102) {
                    return 3;
                }
                if (unit.area >= 103 && unit.area <= 108) {
                    return 4;
                }
                    return 5;
            };

        //+ Change areas to where leader is =======================================
            this.checkExit = function (unit, area) {
                let exits = getArea().exits;

                if (unit.inTown) {
                    return false;
                }

                for (let i = 0; i < exits.length; i++) {
                    if (exits[i].target === area) {
                        return 1;
                    }
                }

                if (unit.inTown) {
                    target = getUnit(2, "waypoint");

                    if (target && getDistance(me, target) < 20) {
                        return 3;
                    }
                }

                target = getUnit(2, "portal");

                if (target) {
                    do {
                        if (target.objtype === area) {
                            Pather.usePortal(null, null, target);
                            return 2;
                        }
                    } while (target.getNext());
                }

                //- Arcane<->Cellar portal -------------------------------------
                if ((me.area === 74 && area === 54) || (me.area === 54 && area === 74)) {
                    Pather.usePortal(null);
                    return 4;
                }

                //- Tal-Rasha's tomb->Duriel's lair ----------------------------
                if (me.area >= 66 && me.area <= 72 && area === 73) {
                    Pather.useUnit(2, 100, area);
                    return 4;
                }

                //- Throne->Chamber --------------------------------------------
                if (me.area === 131 && area === 132) {
                    target = getUnit(2, 563);
                    if (target) {
                        Pather.usePortal(null, null, target);
                        return 4;
                    }
                }

                return false;
            };

        //+ Got to leader act / area ==============================================
            this.useTP = function (name) {
                if (!Pather.usePortal(null, name, null, 2)) {
                    target = getUnit(1, NPC.Cain);
                    if (target) {
                        this.talkTo(NPC.Cain);
                    }

                    delay(250);

                    if (!Pather.usePortal(null, name, null, 2)) {
                        return false;
                    }
                }

                return true;
            };

            this.goToLeader = function (leader, justWp) {
                leaderAct = this.checkLeaderAct(leader);

                if (me.inTown && leaderAct !== me.act) {
                    Town.goToTown(leaderAct);
                    Town.move("portalspot");
                    delay(250);
                    this.useTP(leader.name);
                } else if (me.inTown && leaderAct === me.act) {
                    Town.move("portalspot");
                    delay(250);
                    this.useTP(leader.name);

                    if (!justWp) {
                        while (!this.getLeaderUnit(leader.name) && !me.dead && !me.inTown) {
                            Attack.clear(10);
                            delay(150);
                        }
                    }
                } else if (!me.inTown && leaderAct !== me.act) {
                    if (!this.goToTownTomeBook()) {
                        return false;
                    }

                    Town.goToTown(this.checkLeaderAct(leader));
                    Town.move("portalspot");
                    delay(250);
                    this.useTP(leader.name);
                }

                return true;
            };

        //+ Get WP ================================================================
            this.getWp = function () {
                if (me.inTown) {
                    return false;
                }

                unit = getUnit(2, "waypoint");

                print(JSON.stringify(unit, undefined, 3))
                if (unit) {
                    WPLoop:
                    for (let i = 0; i < 3; i++) {
                        if (getDistance(me, unit) > 3) {
                            Pather.moveToUnit(unit);
                        }

                        unit.interact();

                        for (let j = 0; j < 100; j++) {
                            if (j % 20 === 0) {
                                me.cancel();
                                delay(300);
                                unit.interact();
                            }

                            if (getUIFlag(0x14)) {
                                break WPLoop;
                            }

                            delay(10);
                        }
                    }
                }

                if (getUIFlag(0x14)) {
                    me.overhead("ÿc2Got wp.ÿc0");
                    me.cancel();
                    return true;
                } else {
                    me.overhead("ÿc1Failed to get wp.ÿc0");
                    return false;
                }
            };

    //! SCRIPT BROADCAST EVENT =======================================================
        function ScriptMsgEvent(msg) {
            let maxTime,
                npc,
                number,
                lastNumber = 0;

            if (me.ingame) {
                switch (msg) {
                    case "mapHack ON":
                        chatFlag = false;
                        runFlag = false;
                        messageFlag = false;

                        break;
                    case "Run Bitch":
                        runFlag = !runFlag;

                        if(runFlag) {
                            print("ÿc2Go Go Go!ÿc0");
                            me.overhead("ÿc2Go Go Go!ÿc0");

                            while(runFlag) {
                                if (me.act !== 1) {
                                    Town.goToTown(1);
                                }

                                number = rand(1, 5);

                                while (number == lastNumber){
                                    number = rand(1,5);
                                }

                                lastNumber = number;

                                switch (number) {
                                    case 0:
                                        Town.move(NPC.Cain);
                                        npc = getUnit(1, NPC.Cain);

                                        break;
                                    case 1:
                                        Town.move(NPC.Gheed);
                                        npc = getUnit(1, NPC.Gheed);

                                        break;
                                    case 2:
                                        Town.move(NPC.Akara);
                                        npc = getUnit(1, NPC.Akara);

                                        break;
                                    case 3:
                                        Town.move(NPC.Kashya);
                                        npc = getUnit(1, NPC.Kashya);

                                        break;
                                    case 4:
                                        Town.move(NPC.Charsi);
                                        npc = getUnit(1, NPC.Charsi);

                                        break;
                                    case 5:
                                        Town.move(NPC.Warriv);
                                        npc = getUnit(1, NPC.Warriv);

                                        break;
                                }

                                npc.openMenu();
                                maxTime = 1;

                                while (maxTime <= 300) {
                                    if (!runFlag) {
                                        break;
                                    }

                                    delay(1000);
                                    maxTime++;
                                }

                                me.cancel();

                                if (!runFlag) {
                                    break;
                                }
                            }
                        } else {
                            print("ÿc1End of the run!ÿc0");
                            me.overhead("ÿc1End of the run!ÿc0");
                            Town.move("stash");
                            // scriptBroadcast("broadcastToToolsThread");
                        }

                        msg = "";

                        break;
                    case "Message Log":
                        let goFlag = false;
                            messageFlag = !messageFlag;

                        if (messageFlag) {
                            print("ÿc4Message Log:ÿc0 ÿc2ONÿc0");
                            me.overhead("ÿc4Message Log:ÿc0 ÿc2ONÿc0");

                            while (messageFlag) {
                                if (me.act !== 1) {
                                    Town.goToTown(1);
                                    Town.move("portalspot");
                                }

                                me.cancel();
                                sendKey(77);
                                maxTime = 1;

                                while (maxTime <= 180) {
                                    if (!messageFlag){
                                        break;
                                    }

                                    delay(1000);
                                    maxTime++;
                                }

                                me.cancel();

                                if (!messageFlag) {
                                    break;
                                }

                                if (goFlag) {
                                    Pather.moveTo(me.x + 3, me.y + 3);
                                } else {
                                    Pather.moveTo(me.x - 3, me.y - 3);
                                }

                                goFlag = !goFlag;
                            }
                        } else if (!messageFlag) {
                            print("ÿc4Message Log:ÿc0 ÿc1OFFÿc0");
                            me.overhead("ÿc4Message Log:ÿc0 ÿc1OFFÿc0");
                            Town.move("stash");
                        }

                        msg = "";

                        break;
                    case "Chat OnOff":
                        if (!chatFlag) {
                            chatFlag = true;
                            pvpFlag = false;
                            print("ÿc4Chat:ÿc0ÿc2ONÿc0                             ÿc4PVP:ÿc0ÿc1OFFÿc0                            ÿc4MH:ÿc0ÿc1OFFÿc0");
                            me.overhead("ÿc4Chat:ÿc0ÿc2ONÿc0                             ÿc4PVP:ÿc0ÿc1OFFÿc0                            ÿc4MH:ÿc0ÿc1OFFÿc0");
                            resfix = me.screensize ? 0 : -120;

                            if (hooks.length) {
                                while (hooks.length) {
                                    var kill = hooks.shift();
                                    kill.remove();
                                }

                                while (decor.length) {
                                    var kill = decor.shift();
                                    kill.remove();
                                }

                                list = "";
                            }

                        } else {
                            chatFlag = false;
                            print("ÿc4Chat:ÿc0ÿc1OFFÿc0                             ÿc4PVP:ÿc0ÿc1OFFÿc0                            ÿc4MH:ÿc0ÿc1OFFÿc0");
                            me.overhead("ÿc4Chat:ÿc0ÿc1OFFÿc0                             ÿc4PVP:ÿc0ÿc1OFFÿc0                            ÿc4MH:ÿc0ÿc1OFFÿc0");
                            hide = true;
                        }

                        break;
                    case "PVP Time": {
                        pvpFlag = !pvpFlag;

                        if (pvpFlag) {
                            print("ÿc4Chat:ÿc0 ÿc1OFFÿc0                             ÿc4PVP:ÿc0ÿc2ONÿc0                            ÿc4MH:ÿc0ÿc1OFFÿc0");
                            me.overhead("ÿc4Chat:ÿc0ÿc1OFFÿc0                             ÿc4PVP:ÿc0ÿc2ONÿc0                            ÿc4MH:ÿc0ÿc1OFFÿc0");
                            chatFlag = false;
                            runFlag = false;
                            messageFlag = false;
                            resfix = me.screensize ? 0 : -120;

                            if (hooks.length) {
                                while (hooks.length) {
                                    var kill = hooks.shift();
                                    kill.remove();
                                }

                                while (decor.length) {
                                    var kill = decor.shift();
                                    kill.remove();
                                }

                                list = "";
                            }

                        } else {
                            chatFlag = false;
                            print("ÿc4Chat:ÿc0 ÿc1OFFÿc0                             ÿc4PVP:ÿc0ÿc1OFFÿc0                            ÿc4MH:ÿc0 ÿc1OFFÿc0");
                            me.overhead("ÿc4Chat:ÿc0ÿc1OFFÿc0                             ÿc4PVP:ÿc0ÿc1OFFÿc0                            ÿc4MH:ÿc0ÿc1OFFÿc0");
                            hide = true;
                        }

                        break;
                    }
                }
            }
        }

        addEventListener('scriptmsg', ScriptMsgEvent);

    //! GAME EVENT ===================================================================
        function gameEvent (mode, param1, param2, name1, name2) {
            switch (mode) {
                // case 0x00: // "%Name1(%Name2) dropped due to time out."
                // case 0x01: // "%Name1(%Name2) dropped due to errors."
                // case 0x03: // "%Name1(%Name2) left our world. Diablo's minions weaken."
                case 0x02: // "%Name1(%Name2) joined our world. Diablo's minions grow stronger."
                    if (!Misc.inMyParty(Config.Leader)) {
                        leaderLeftPartyFlag = false;
                        checkLeaderFlag = false;

                    }

                    if (messageFlag) {
                        AutoRogerThat.notify({
                            code: "Trade",
                            message: "Trade",
                            data: {
                                profile: me.profile,
                                game: me.gamename,
                                account: name2
                            }
                        });

                        messageFlag = false;
                        Town.move("stash");

                        if (tradeMessage !== "") {
                            me.cancel();
                            delay(1200);
                            say("Hi");
                            delay(1200);
                            say(tradeMessage);
                        }
                    }

                    break;
            }
        }

        addEventListener("gameevent", gameEvent);

    //! EVENTS =======================================================================
        //+ Talk to a NPC =========================================================
            this.talk = function (name) {
                let npc,
                    names;

                if (!me.inTown) {
                    return false;
                }

                if (typeof name === "string") {
                    name = name.toLowerCase();

                    if (name === "cain") {
                        name = "deckard cain";
                    }
                } else {
                    return false;
                }

                switch (me.act) {
                    case 1:
                        names = [NPC.Gheed, NPC.Charsi, NPC.Akara, NPC.Kashya, NPC.Cain, NPC.Warriv];

                        break;
                    case 2:
                        names = [NPC.Fara, NPC.Lysander, NPC.Greiz, NPC.Elzix, NPC.Jerhyn, NPC.Meshif, NPC.Drognan, NPC.Atma, NPC.Cain];

                        break;
                    case 3:
                        names = [NPC.Alkor, NPC.Asheara, NPC.Ormus, NPC.Hratli, NPC.Cain];

                        break;
                    case 4:
                        names = [NPC.Halbu, NPC.Tyrael, NPC.Jamella, NPC.Cain];

                        break;
                    case 5:
                        names = [NPC.Larzuk, NPC.Malah, NPC.Qual_Kehk, NPC.Anya, NPC.Nihlathak, NPC.Cain];

                        break;
                }

                if (names.indexOf(name) === -1) {
                    me.overhead("Invalid NPC.");
                    return false;
                }

                if (!Town.move(name === NPC.Jerhyn ? "palace" : name)) {
                    Town.move("portalspot");
                    me.overhead("Failed to move to town spot.");
                    return false;
                }

                if (name === NPC.Cain) {
                    this.talkTo(NPC.Cain);
                    return true;
                }

                npc = getUnit(1);

                if (npc) {
                    do {
                        if (npc.name.replace(/ /g, "").toLowerCase().indexOf(name) > -1) {
                            npc.openMenu();
                            me.cancel();
                            Town.move("portalspot");
                            return true;
                        }
                    } while (npc.getNext());
                }

                me.overhead(name + " ÿc1not found!ÿc0");
                Town.move("portalspot");

                return false;
            };

        //+ Change act after completing last act quest ============================
            this.changeAct = function (act) {
                let npc,
                    preArea = me.area,
                    target;

                switch (act) {
                    case 1:
                        if (me.area >= 40) {
                            Town.goToTown(act);
                        }

                        break;
                    case 2:
                        if (me.area >= 40) {
                            Town.goToTown(act);
                            break;
                        } else if (me.area !== 1) {
                            Town.goToTown(act);
                            break;
                        }

                        Town.move(NPC.Warriv);
                        npc = getUnit(1, 155);

                        if (npc) {
                            npc.openMenu();
                            Misc.useMenu(0x0D36);
                        }

                        break;
                    case 3:
                        if (me.area >= 75) {
                            Town.goToTown(act);
                            break;
                        } else if (me.area !== 40) {
                            Town.goToTown(act);
                            break;
                        }

                        Town.move("palace");
                        npc = getUnit(1, 201);

                        if (npc) {
                            npc.openMenu();
                            me.cancel();
                        }

                        Town.move(NPC.Meshif);
                        npc = getUnit(1, 210);

                        if (npc) {
                            npc.openMenu();
                            Misc.useMenu(0x0D38);
                        }

                        break;
                    case 4:
                        if (me.area >= 103) {
                            Town.goToTown(act);
                            break;
                        } else if (me.area !== 210) {
                            Town.goToTown(act);
                            break;
                        }

                        if (me.inTown) {
                            Town.move(NPC.Cain);
                            npc = getUnit(1, 245);

                            if (npc) {
                                npc.openMenu();
                                me.cancel();
                            }

                            Town.move("portalspot");
                            Pather.usePortal(102, null);
                        }

                        delay(1500);
                        target = getUnit(2, 342);

                        if (target) {
                            Pather.moveTo(target.x - 3, target.y - 1);
                        }

                        Pather.usePortal(null);

                        break;
                    case 5:
                        if (me.area >= 109) {
                            break;
                        } else if (me.area !== 103) {
                            Town.goToTown(act);
                            break;
                        }

                        Town.move(NPC.Tyrael);
                        npc = getUnit(1, NPC.Tyrael);

                        if (npc) {
                            npc.openMenu();
                            me.cancel();

                            try {
                                Pather.useUnit(2, 566, 109);
                            } catch (a5e) {
                            }
                        }

                        break;
                }

                delay(2000);

                while (!me.area) {
                    delay(500);
                }

                if (me.area === preArea) {
                    me.cancel();
                    Town.move("portalspot");
                    return false;
                }

                Town.move("portalspot");
                return true;
            };

        //+ Pick Potions ==========================================================
            this.pickPotions = function (range) {
                var status, item,
                    pickList = [];

                if (me.dead) {
                    return false;
                }

                Town.clearBelt();

                while (!me.idle) {
                    delay(40);
                }

                item = getUnit(4);

                if (item) {
                    do {
                        if ((item.mode === 3 || item.mode === 5) && item.itemType >= 76 && item.itemType <= 78 && getDistance(me, item) <= range) {
                            pickList.push(copyUnit(item));
                        }
                    } while (item.getNext());
                }

                pickList.sort(Pickit.sortItems);

                while (pickList.length > 0) {
                    item = pickList.shift();

                    if (item && copyUnit(item).x) {
                        status = Pickit.checkItem(item).result;

                        if (status && Pickit.canPick(item)) {
                            Pickit.pickItem(item, status);
                        }
                    }
                }

                return true;
            };

        //+ Open Containers =======================================================
            this.openContainers = function (range) {
                let unit = getUnit(2),
                    unitList = [],
                    containers = ["chest", "loose rock", "hidden stash", "loose boulder", "corpseonstick", "casket", "armorstand", "weaponrack", "barrel", "holeanim",
                                "roguecorpse", "ratnest", "corpse", "goo pile", "largeurn", "urn", "chest3", "jug", "skeleton", "guardcorpse", "sarcophagus",
                                "cocoon", "basket", "stash", "hollow log", "hungskeleton", "pillar", "skullpile", "skull pile", "jar3", "jar2", "jar1", "bonechest", "woodchestl",
                                "woodchestr", "barrel wilderness", "burialchestr", "burialchestl", "explodingchest", "chestl", "chestr", "icecavejar1", "icecavejar2",
                                "icecavejar3", "icecavejar4", "deadperson", "deadperson2", "evilurn", "tomb1l", "tomb3l", "tomb2", "tomb3", "object2", "groundtomb", "groundtombl"
                                ];

                if (unit) {
                    do {
                        if (containers.indexOf(unit.name.toLowerCase()) > -1 && unit.mode === 0 && getDistance(me, unit) <= range) {
                            unitList.push(copyUnit(unit));
                        }
                    } while (unit.getNext());
                }

                while (unitList.length > 0) {
                    unitList.sort(Sort.units);
                    unit = unitList.shift();

                    if (unit) {
                        Misc.openChest(unit);
                        Pickit.pickItems();
                    }
                }

                return true;
            };

        //+ Open Get Portal =======================================================
            this.getPortal = function (targetArea, owner) {
                let portal = getUnit(2, "portal");

                if (portal) {
                    do {
                        if (typeof targetArea !== "number" || portal.objtype === targetArea) {
                            switch (owner) {
                                case undefined: // Pather.usePortal(area) - red portal
                                    if (!portal.getParent()) {
                                        return copyUnit(portal);
                                    }

                                    break;
                                case null: // Pather.usePortal(area, null) - any blue portal leading to area
                                    if (portal.getParent() === me.name || Misc.inMyParty(portal.getParent())) {
                                        return copyUnit(portal);
                                    }

                                    break;
                                default: // Pather.usePortal(null, owner) - any blue portal belonging to owner OR Pather.usePortal(area, owner) - blue portal matching area and owner
                                    if (portal.getParent() === owner && (owner === me.name || Misc.inMyParty(owner))) {
                                        return copyUnit(portal);
                                    }

                                    break;
                            }
                        }
                    } while (portal.getNext());
                }

                return false;
            };

        //+ Check Quest ===========================================================
            this.checkQuest = function () {
                let item, itemClassId, quest, count;

                switch (me.area) {
                    case 4:     // Stone field - stones
                        itemClassId = 525;

                        if (!me.getItem(itemClassId)) {
                            break;
                        }

                        if (!getDistance(me, getUnit(2, 17))) {
                            me.overhead("I'm too far from the stones");
                            break;
                        }

                        if (me.getItem(itemClassId) && getDistance(me, getUnit(2, 17))) {
                            const stones = [getUnit(2, 17), getUnit(2, 18), getUnit(2, 19), getUnit(2, 20), getUnit(2, 21)];
                            while (!me.getQuest(4, 4)) {
                                stones.forEach(function (stone) {
                                    if (!stone.mode) {
                                        Attack.securePosition(stone.x, stone.y, 10, me.ping * 2);
                                        Misc.click(0, 0, stone);
                                    }
                                });
                            }
                        }

                        break;
                    case 5:     // Dark wood - scroll tree
                        itemClassId = 524;
                        count = 0;

                        target = getUnit(2, 30);

                        if (!getDistance(me, target)) {
                            me.overhead("I'm too far from the tree");
                            break;
                        } else {
                            Misc.openChest(target);
                            delay(300);
                        }

                        while (true) {
                            item = getUnit(4, itemClassId);

                            if (!item) {
                                me.overhead("Someone already took the scroll!")
                                this.goToTownTomeBook();
                                break;
                            }

                            Pickit.pickItem(item);
                            delay(500);

                            if (me.getItem(itemClassId)) {
                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                this.talkTo(NPC.Akara);
                                me.cancel();
                                Town.move("portalspot");
                            }

                            count++;

                            if (count === 5) {
                                say("!I'm full, help me pls!");
                                break;
                            }
                        }

                        break;
                    case 38:    // Tristam - rescue Cain
                        quest = me.getQuest(4, 0);

                        if (!quest) {
                            target = getUnit(2, 26);

                            if (!getDistance(me, target)) {
                                me.overhead("I'm too far from Cain");
                                break;
                            } else {
                                Misc.openChest(target);
                            }
                        }

                        break;
                    case 28:    // Barraks - smith
                        itemClassId = 89;
                        count = 0;

                        if (me.getQuest(3, 0)) {
                            me.overhead("I've already done this quest!");
                            break;
                        }

                        target = getUnit(2, 108);

                        if (!getDistance(me, target)) {
                            me.overhead("I'm too far from the tool");
                            break;
                        } else {
                            Misc.openChest(target);
                            delay(300);
                        }

                        while (true) {
                            item = getUnit(4, itemClassId);

                            if (!item) {
                                me.overhead("Someone already took the tool!");

                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                delay(500);
                                this.talkTo(NPC.Charsi);
                                Town.move("portalspot");
                                break;
                            }

                            Pickit.pickItem(item);
                            delay(500);

                            if (me.getItem(itemClassId)) {
                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                this.talkTo(NPC.Charsi);
                                Town.move("portalspot");
                                break;
                            }

                            count++;

                            if (count === 5) {
                                say("!I'm full, help me pls!");
                                break;
                            }
                        }

                        break;
                    case 49:    // Swers lvl 3 - book of skill
                        itemClassId = 552;
                        count = 0;

                        if (!getDistance(me, getUnit(4, itemClassId))) {
                            me.overhead("I'm too far from the book");
                            break;
                        }

                        while (true) {
                            item = getUnit(4, itemClassId);

                            if (!item) {
                                me.overhead("Where is my book?");
                                break;
                            }

                            Pickit.pickItem(item);
                            delay(500);

                            if (me.getItem(itemClassId)) {
                                clickItem(1, me.getItem(itemClassId));

                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                this.talkTo(NPC.Atma);
                                break;
                            }

                            count++;

                            if (count === 5) {
                                say("!I'm full, help me pls!");
                                break;
                            }
                        }

                        break;
                    case 60:    // Halls of the dead lvl 3 - cube
                        itemClassId = 549;
                        count = 0;

                        if (me.getItem(itemClassId)) {
                            me.overhead("I already got the cube!");
                            this.goToTownTomeBook();
                            break;
                        }

                        target = getUnit(2, 354);

                        if (!getDistance(me, target)) {
                            me.overhead("I'm too far from the cube");
                            break;
                        } else  {
                            Misc.openChest(target);
                            delay(300);
                        }

                        while (true) {
                            item = getUnit(4, itemClassId);

                            if (!item) {
                                me.overhead("Where is my cube?");
                                break;
                            }

                            Pickit.pickItem(item);
                            delay(500);

                            if (me.getItem(itemClassId)) {
                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                delay(250);

                                if (this.cubeStaff()) {
                                    this.talkTo(NPC.Drognan);
                                    Town.move("portalspot");
                                }

                                break;
                            }

                            count++;

                            if (count === 5) {
                                say("!I'm full, help me pls!");
                                break;
                            }
                        }

                        break;
                    case 61:    // Claw viper temple lvl 2 - amulet
                        itemClassId = 521;
                        count = 0;

                        if (me.getQuest(11, 0)) {
                            me.overhead("I already done the quest!");
                            this.goToTownTomeBook();
                            break;
                        }

                        if (me.getItem(itemClassId)) {
                            me.overhead("I already got the amulet!");
                            this.goToTownTomeBook();
                            break;
                        }

                        target = getUnit(2, 149);

                        if (!getDistance(me, target)) {
                            me.overhead("I'm too far from the amulet");
                            break;
                        } else {
                            Misc.openChest(target);
                            delay(300);
                        }

                        while (true) {
                            target = getUnit(4, itemClassId);

                            if (!target) {
                                me.overhead("Where is my amulet?");
                                break;
                            }

                            Pickit.pickItem(target);
                            delay(500);

                            if (me.getItem(itemClassId)) {
                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                delay(250);

                                if (this.cubeStaff()) {
                                    this.talkTo(NPC.Drognan);
                                    Town.move("portalspot");
                                }

                                break;
                            }

                            count++;

                            if (count === 10) {
                                say("!I'm full, help me pls!");
                                break;
                            }
                        }

                        break;
                    case 64:    // Maggot lair lvl 3 - staff
                        itemClassId = 92;
                        count = 0;

                        if (me.getQuest(10, 0)) {
                            me.overhead("I've already done this quest!");
                            this.goToTownTomeBook();
                            break;
                        }

                        if (me.getItem(itemClassId)) {
                            me.overhead("I've already got the amulet!");
                            this.goToTownTomeBook();
                            break;
                        }

                        target = getUnit(2, 356);

                        if (!getDistance(me, target)) {
                            me.overhead("I'm too far from the amulet");
                            break;
                        } else {
                            Misc.openChest(target);
                            delay(300);
                        }

                        while (true) {
                            item = getUnit(4, itemClassId);

                            if (!item) {
                                me.overhead("Where is my staff?");
                                break;
                            }

                            Pickit.pickItem(item);
                            delay(500);

                            if (me.getItem(itemClassId)) {
                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                delay(250);

                                if (this.cubeStaff()) {
                                    this.talkTo(NPC.Drognan);
                                    Town.move("portalspot");
                                }

                                break;
                            }

                            count++;

                            if (count === 5) {
                                say("!I'm full, help me pls!");
                                break;
                            }
                        }

                        break;
                    case 66:    // Tal rasha's tomb - place staff
                    case 67:
                    case 68:
                    case 69:
                    case 70:
                    case 71:
                    case 72:
                        delay(rand(0, 6) * 1000);
                        this.placeStaff();

                        break;
                    case 73:    // Tal rasha's chamber - talk to Tyrael
                        this.talkToTyrael();
                        Pather.usePortal(null);

                        break;
                    case 78:    // Flayer jungle - gidbinn
                        itemClassId = 87;
                        count = 0;



                        if (me.getQuest(19, 0)) {
                            me.overhead("I already done the quest!");
                            break;
                        }

                        if (me.getItem(itemClassId)) {
                            me.overhead("I already got the blade!");
                            this.goToTownTomeBook();
                            Town.doChores();
                            me.cancel();
                            Town.move("portalspot");
                            break;
                        }

                        target = getUnit(2, 86);

                        if (!getDistance(me, target)) {
                            me.overhead("I'm too far from the fire");
                            break;
                        } else {
                            Misc.openChest(target);
                            delay(300);
                        }

                        while (true) {
                            item = getUnit(4, itemClassId);

                            if (!item) {
                                me.overhead("Someone already took the blade!");
                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                delay(250);
                                Town.doChores();
                                me.cancel();
                                Town.move("portalspot");
                                break;
                            }

                            Pickit.pickItem(item);
                            delay(500);

                            if (me.getItem(itemClassId)) {
                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                delay(250);
                                Town.doChores();
                                me.cancel();
                                Town.move("portalspot");
                                break;
                            }

                            count++;

                            if (count === 5) {
                                say("!I'm full, help me pls!");
                                break;
                            }
                        }

                        break;
                    case 94:    // Kurast Bazaar - Ruined temple - Lam Esen's Tome
                        itemClassId = 548;

                        if (me.getQuest(17, 0)) {
                            me.overhead("I've already done this quest!");
                            this.goToTownTomeBook();
                            break;
                        }

                        if (me.getItem(4)) {
                            me.overhead("I already got the book!");
                            break;
                        }

                        target = getUnit(2, 193);

                        if (!getDistance(me, target)) {
                            me.overhead("I'm too far from the book");
                            break;
                        } else {
                            Misc.openChest(target);
                            delay(300);
                        }

                        while (true) {
                            item = getUnit(4, itemClassId);

                            if (!item) {
                                me.overhead("Someone already took the book!");
                                this.goToTownTomeBook();
                                break;
                            }

                            Pickit.pickItem(item);
                            delay(500);

                            if (me.getItem(itemClassId)) {
                                if (!this.goToTownTomeBook()) {
                                    break;
                                }

                                delay(250);
                                this.talkTo(NPC.Alkor);
                                Town.move("portalspot");
                                break;
                            }

                            count++;

                            if (count === 5) {
                                say("!I'm full, help me pls!");
                                break;
                            }
                        }

                        break;
                    case 102:   // Durance of hate lvl 3 - red portal
                        Pather.moveTo(17590, 8068);
                        let tick = getTickCount(),
                            time = 0;

                        while (getCollision(me.area, 17601, 8070, 17590, 8068) !== 0 && (time = getTickCount() - tick) < 2000) {
                            Pather.moveTo(17590, 8068);  // Activate it
                            delay(3);
                        }

                        if (time < 2000 && Pather.moveTo(17601, 8070)) {
                            Pather.usePortal(null);
                        }

                        break;
                    case 114:   // Frozen river - rescue Anya
                        target = getUnit(2, 558);   // Anya

                        if (!getDistance(me, target)) {
                            me.overhead("I'm too far from Anya");
                            break;
                        }

                        this.talkToAnya();

                        if (!this.goToTownTomeBook()) {
                            break;
                        }

                        this.talkTo(NPC.Malah);
                        itemClassId = 644;  // Potion

                        if (me.getItem(itemClassId)) {
                            Town.move("portalspot");

                            if (!Pather.usePortal(null, leader.name, null, 2)) {
                                break;
                            }

                            this.talkToAnya();

                            if (!this.goToTownTomeBook()) {
                                break;
                            }
                        } else {
                            delay(15000);
                        }

                        this.talkTo(NPC.Malah);

                        if (me.getItem(646)) {
                            clickItem(1, me.getItem(646));
                        }

                        Town.move("portalspot");

                        break;
                    default:
                        itemClassId = 546;  // Jade figurine
                        item = getUnit(4, itemClassId);

                        if (item) {
                            if (me.getQuest(20, 0)) {
                                me.overhead("I've already done this quest!");
                                this.goToTownTomeBook();
                                break;
                            }

                            while (true) {
                                item = getUnit(4, itemClassId);

                                if (!item) {
                                    if (!this.goToTownTomeBook()) {
                                        break;
                                    }

                                    me.overhead("Someone already took the jade figurine");
                                    delay(15000);
                                    Town.move(NPC.Alkor);
                                    target = getUnit(1, NPC.Alkor);
                                    target.openMenu();
                                    me.cancel();
                                    clickItem(1, me.getItem(545));
                                    Town.move("portalspot");
                                    break;
                                }

                                Pickit.pickItem(item);
                                delay(500);

                                if (me.getItem(itemClassId)) {
                                    if (!this.goToTownTomeBook()) {
                                        break;
                                    }

                                    delay(250);
                                    Town.move(NPC.Cain);
                                    target = getUnit(1, NPC.Cain);
                                    target.openMenu();
                                    Town.move(NPC.Meshif);
                                    target = getUnit(1, NPC.Meshif);
                                    target.openMenu();
                                    Town.move(NPC.Cain);
                                    target = getUnit(1, NPC.Cain);
                                    target.openMenu();
                                    Town.move(NPC.Alkor);
                                    target = getUnit(1, NPC.Alkor);
                                    target.openMenu();
                                    me.cancel();
                                    clickItem(1, me.getItem(545));
                                    Town.move("portalspot");
                                    break;
                                }

                                count++;

                                if (count === 5) {
                                    say("!I'm full, help me pls!");
                                    break;
                                }
                            }
                        } else {
                            me.overhead("Picking items.");
                            Pickit.pickItems();

                            if (!me.inTown && openContainers) {
                                this.openContainers(20);
                            }

                            me.overhead("Done picking.");
                        }

                        break;
                }
            };

        //+ Go To Town Tome Book ==================================================
            this.goToTownTomeBook = function () {
                if (!me.inTown) {
                    delay(150);

                    if (!Pather.getPortal(null, leader.name)) {
                        if (!me.findItem("tbk", 0, 3)) {
                            me.overhead("ÿc1Sorry, I don't have tp!ÿc0");
                            return false;
                        }
                        Town.goToTown();
                    } else {
                        Pather.usePortal(null, leader.name, null, 2);

                    }
                }

                delay(250);

                if (me.inTown) {
                    return true;
                }

                return false;
            };

        //+ Cube Staff ============================================================
            this.cubeStaff = function () {
                let staff = me.getItem("vip"),
                    amulet = me.getItem("msf");

                if (me.getItem(91)) return true;

                if (!staff || !amulet || !me.getItem(549)) {
                    return false;
                }

                Storage.Cube.MoveTo(amulet);
                Storage.Cube.MoveTo(staff);
                Cubing.openCube();
                print("making staff");
                transmute();
                delay(750 + me.ping);

                staff = me.getItem(91);

                if (!staff) {
                    return false;
                }

                Storage.Inventory.MoveTo(staff);
                me.cancel();

                return true;
            };

        //+ Place Staff ===========================================================
            this.placeStaff = function () {
                let item = me.getItem(91);
                let orifice = getUnit(2, 152);

                if (item && !me.getQuest(10, 0)) {
                    Misc.openChest(orifice);
                    item.toCursor();
                    submitItem();
                    delay(1000);
                    item = me.findItem(-1, 0, 3);

                    if (item && item.toCursor()) {
                        Storage.Inventory.MoveTo(item);
                    }
                }
                Pather.teleport = !Pather.teleport;
            };

        //+ Talk To Tyrael ========================================================
            this.talkToTyrael = function () {
                let NPC = getUnit(1, "Tyrael");

                if (!NPC) {
                    me.overhead("Tyrael not found!")
                }

                for (let i = 0; i < 3; i++) {
                    if (getDistance(me, NPC) > 3) {
                        Pather.moveToUnit(NPC);
                    }
                    NPC.interact();
                    delay(2000);
                    me.cancel();
                    Pather.teleport = !Pather.teleport;
                }
            };

        //+ Talk To Anya ==========================================================
            this.talkToAnya = function () {
                target = getUnit(2, 558);

                if (!target) {
                    return false;
                }

                Pather.moveToUnit(target);
                target.interact();
                delay(250);
                me.cancel();
                Pather.moveToUnit(target);
                target.interact();
                delay(250);
                me.cancel();

                return true;
            };

        //+ Talk To ... ===========================================================
            this.talkTo = function (NPC) {
                Town.move(NPC);
                target = getUnit(1, NPC);
                target.openMenu();
                me.cancel();
            };

    //! CHAT EVENT ===================================================================
        this.chatEvent = function (nick, msg) {
            foundMatch = false;;

            if (!pvpFlag) {
                msg = msg.toLowerCase();
                //- Who is the leader? --------------------------------------------
                    try {
                        if (nick === me.name && msg === "i am the boss") {
                            Config.Leader = "";
                            FileTools.writeText(filename, nick);
                            checkLeaderFlag = false;
                            checkPartyFlag = false;
                            return true;
                        } else if (nick !== me.name && msg === "i am the boss" && nick === FileTools.readText(filename)) {
                            Config.Leader = nick;
                            leader = this.getLeader(nick);
                            checkLeaderFlag = false;
                            checkPartyFlag = false;
                            return true;
                        }
                    } catch (error) {
                        me.overhead("Unable to open the leader.txt. Please try again.");
                    }

                //- Commands from leader in the party -----------------------------
                    if (Config.Leader != "" && nick === Config.Leader && Misc.inMyParty(Config.Leader)) {
                        switch (msg) {
                            case "1":
                                actions.push("1");
                                foundMatch = true;

                                break;
                            case "2":
                                actions.push("2");
                                foundMatch = true;

                                break;
                            case "3":
                                actions.push("3");
                                foundMatch = true;

                                break;
                            case "a":
                            case me.name + " a":
                                if (attack) {
                                    attack = false;
                                    me.overhead("Attack ÿc1OFFÿc0.");
                                } else {
                                    attack = true;
                                    me.overhead("Attack ÿc2ONÿc0.");
                                }

                                foundMatch = true;

                                break;
                            case "bo":
                                actions.push("bo");
                                foundMatch = true;

                                break;
                            case "c":
                                actions.push("c");
                                foundMatch = true;

                                break;
                            case "cow":
                                actions.push("cow");
                                foundMatch = true;

                                break;
                            case "a1":
                                actions.push("a1");
                                foundMatch = true;

                                break;
                            case "a2":
                                actions.push("a2");
                                foundMatch = true;

                                break;
                            case "a3":
                                actions.push("a3");
                                foundMatch = true;

                                break;
                            case "a4":
                                actions.push("a4");
                                foundMatch = true;

                                break;
                            case "a5":
                                actions.push("a5");
                                foundMatch = true;

                                break;
                            case "move":
                                actions.push("move");
                                foundMatch = true;

                                break;
                            case "p":
                                actions.push("p");
                                foundMatch = true;

                                break;
                            case "s":
                                if (stop) {
                                    stop = false;
                                    me.overhead("Resuming.");
                                } else {
                                    stop = true;
                                    me.overhead("Stopping.");
                                }

                                foundMatch = true;

                                break;
                            case "wp":
                                actions.push("wp");
                                foundMatch = true;

                                break;
                            case "1wp":
                                actions.push("1wp");
                                foundMatch = true;

                                break;
                            case "tele":
                            case me.name + " tele":
                                Pather.teleport = !Pather.teleport;

                                if (Pather.teleport) {
                                    me.overhead("Teleport ÿc2ONÿc0.");
                                } else {
                                    me.overhead("Teleport ÿc1OFFÿc0.");
                                }

                                foundMatch = true;

                                break;
                            case "#bye":
                                actions.push("#bye");
                                foundMatch = true;

                                break;
                            case "#cancel":
                                actions = [];
                                foundMatch = true;

                                break;
                            case "#come":
                                actions.push("#come");
                                foundMatch = true;

                                break;
                            case "#quit":
                                actions.push("#quit");
                                foundMatch = true;

                                break;
                            case "#stash":
                                actions.push("#stash");
                                foundMatch = true;

                                break;
                            default:
                                if (msg.split(" ")[0] === 'talk' && this.goToTownTomeBook()) {
                                    this.talk(msg.split(" ")[1]);
                                }

                                break
                        }

                        if (foundMatch) {
                            return true;
                        }
                    }

                //- Drop multiple items and other commands ------------------------
                    if (nick !== me.name) {
                        //- Drop multiple items ----------------------------------
                            if (chatFlag &&  msg.split(" ")[0] === "drop") {
                                let msgArray = msg.split(' ');
                                let wrongInputFlag = false;
                                let itemsArray = [];
                                let qtyArray = [];
                                let dropReturn;

                                if (msgArray[0] === 'drop') {
                                    for (let i = 1; i < msgArray.length; i++) {
                                        if (isNaN(parseInt(msgArray[i], 10))) {
                                            qtyArray.push(-1);
                                            itemsArray.push(msgArray[i]);

                                        } else {
                                            if (isNaN(parseInt(msgArray[i + 1], 10))) {
                                                qtyArray.push(parseInt(msgArray[i], 10));
                                                itemsArray.push(msgArray[i + 1]);
                                                i++;
                                            } else {
                                                console.log('Wrong input');
                                                wrongInputFlag = true;
                                                break;
                                            }
                                        }
                                    }

                                    if (!wrongInputFlag) {
                                        dropReturn = AutoRogerThat.dropMultipleItems(itemsArray, qtyArray);
                                        Pather.moveTo(me.x + rand(-6, 6), me.y + rand(-6, 6));

                                        if (dropReturn) {
                                            me.overhead("Done boss!");
                                        } else {
                                            me.overhead("Sorry! I'm poor!");
                                        }
                                    }
                                }

                                return true;
                            } else {
                        //- Other commands ---------------------------------------
                                switch (msg) {
                                    case "pp":
                                        let player = getParty();

                                        while (player.getNext()) {
                                            clickParty(player, 2);
                                            delay(100);
                                        }

                                        foundMatch = true;

                                        break;
                                    case "#stash":
                                        if (getUIFlag(0x19)){
                                            me.cancel();
                                            me.overhead("Stash Done!");
                                            Pather.moveTo(me.x + rand(-8,8),me.y + rand(-8,8));
                                        } else {
                                            me.cancel();
                                            me.overhead("Going to Stash!");
                                            Town.openStash();
                                        }

                                        foundMatch = true;

                                        break;
                                }

                                if (foundMatch) {
                                    return true;
                                }
                            }
                    }

                //- Set custom trade message --------------------------------------
                    if(nick === me.name && msg.split(" ")[0].toLowerCase() === "#set") {
                        tradeMessage = msg.replace("#set ", "");
                        print("Set Msg: ÿc2" + tradeMessage + "ÿc0");
                        me.overhead("Set Msg: ÿc2" + tradeMessage + "ÿc0");
                    }
            }

            return true;
        };

        addEventListener("chatmsg", this.chatEvent);

    //! SHOW HOOKS ===================================================================
        let hooks = [],
            decor = [],
            activeAction,
            resolution = me.screensize,
            resfix,
            hide = false,
            list = true,
            toggleInfoFlag,
            unit,
            info = new UnitInfo();

        //+ Toggle info class =====================================================
            function UnitInfo() {
                this.x = resolution !== 0 ? 670 : 510;
                this.y = 30;
                this.hooks = [];
                this.cleared = true;

                this.createInfo = function (unit) {
                    if (typeof unit === "undefined") {
                        this.remove();

                        return;
                    }

                    switch (unit.type) {
                        case 0:
                            this.playerInfo(unit);

                            break;
                        case 1:
                            this.monsterInfo(unit);

                            break;
                        case 4:
                            this.itemInfo(unit);

                            break;
                    }
                };

                this.playerInfo = function (unit) {
                    let i,
                        items,
                        string,
                        frameXsize = 20,
                        frameYsize = 20,
                        quality = ["ÿc0", "ÿc0", "ÿc0", "ÿc0", "ÿc3", "ÿc2", "ÿc9", "ÿc4", "ÿc8"];

                    if (!this.currentGid) {
                        this.currentGid = unit.gid;
                    }

                    if (this.currentGid === unit.gid && !this.cleared) {
                        return;
                    }

                    if (this.currentGid !== unit.gid) {
                        this.remove();
                        this.currentGid = unit.gid;
                    }

                    this.hooks.push(new Text("ÿc0" + unit.name + " (" + unit.charlvl + " " + classes[unit.classid] + ")", this.x, this.y, 4, 13, 2));

                    items = unit.getItems();

                    if (items) {
                        this.hooks.push(new Text("Equipped items:", this.x, this.y + 15, 4, 13, 2));
                        frameYsize += 15;

                        for (i = 0; i < items.length; i += 1) {
                            if (items[i].getFlag(0x4000000)) {
                                string = items[i].fname.split("\n")[1] + "ÿc0 " + items[i].fname.split("\n")[0];
                            } else {
                                string = quality[items[i].quality] + (items[i].quality > 4 && items[i].getFlag(0x10) ? items[i].fname.split("\n").reverse()[0].replace("ÿc4", "") : items[i].name);
                            }

                            this.hooks.push(new Text(string, this.x, this.y + (i + 2) * 15, 0, 13, 2));

                            if (string.length > frameXsize) {
                                frameXsize = string.length;
                            }

                            frameYsize += 15;
                        }
                    }

                    frameXsize = 30;	// always same size, delete if needed

                    frameYsize += 145;

                    this.hooks.push(new Text("Fire Resist: ÿc1" + (unit.getStat(39) - 30) + " / " + (unit.getStat(40) + 75), this.x, this.y + (i + 2) * 15 + 10, 4, 13, 2));
                    this.hooks.push(new Text("Cold Resist: ÿc3" + (unit.getStat(43) - 30) + " / " + (unit.getStat(44) + 75), this.x, this.y + (i + 2) * 15 + 25, 4, 13, 2));
                    this.hooks.push(new Text("Light Resist: ÿc9" + (unit.getStat(41) - 30) + " / " + (unit.getStat(42) + 75), this.x, this.y + (i + 2) * 15 + 40, 4, 13, 2));
                    this.hooks.push(new Text("Poison Resist: ÿc2" + (unit.getStat(45) - 30) + " / " + (unit.getStat(46) + 75), this.x, this.y + (i + 2) * 15 + 55, 4, 13, 2));
                    this.hooks.push(new Text("Physical resist: ÿc0" + unit.getStat(36), this.x, this.y + (i + 2) * 15 + 70, 4, 13, 2));

                    //Sorb
                    this.hooks.push(new Text("Fire Absorb: ÿc1" + unit.getStat(142), this.x, this.y + (i + 2) * 15 + 85, 4, 13, 2));
                    this.hooks.push(new Text("Cold Absorb: ÿc3" + unit.getStat(148), this.x, this.y + (i + 2) * 15 + 100, 4, 13, 2));
                    this.hooks.push(new Text("Light Absorb: ÿc9" + unit.getStat(144), this.x, this.y + (i + 2) * 15 + 115, 4, 13, 2));

                    this.hooks.push(new Text("Faster Cast Rate: ÿc0" + unit.getStat(105), this.x, this.y + (i + 2) * 15 + 130, 4, 13, 2));

                    this.cleared = false;

                    this.hooks.push(new Box(this.x + 2, this.y - 15, Math.round(frameXsize * 7.5) - 4, frameYsize, 0x0, 1, 2));
                    this.hooks.push(new Frame(this.x, this.y - 15, Math.round(frameXsize * 7.5), frameYsize, 2));

                    this.hooks[this.hooks.length - 2].zorder = 0;
                };

                this.monsterInfo = function (unit) {
                    var frameYsize = 125;

                    if (!this.currentGid) {
                        this.currentGid = unit.gid;
                    }

                    if (this.currentGid === unit.gid && !this.cleared) {
                        return;
                    }

                    if (this.currentGid !== unit.gid) {
                        this.remove();
                        this.currentGid = unit.gid;
                    }

                    this.hooks.push(new Text("Classid: ÿc0" + unit.classid, this.x, this.y, 4, 13, 2));
                    this.hooks.push(new Text("HP percent: ÿc0" + Math.round(unit.hp * 100 / 128), this.x, this.y + 15, 4, 13, 2));
                    this.hooks.push(new Text("Fire resist: ÿc1" + unit.getStat(39), this.x, this.y + 30, 4, 13, 2));
                    this.hooks.push(new Text("Cold resist: ÿc3" + unit.getStat(43), this.x, this.y + 45, 4, 13, 2));
                    this.hooks.push(new Text("Lightning resist: ÿc9" + unit.getStat(41), this.x, this.y + 60, 4, 13, 2));
                    this.hooks.push(new Text("Poison resist: ÿc2" + unit.getStat(45), this.x, this.y + 75, 4, 13, 2));
                    this.hooks.push(new Text("Physical resist: ÿc0" + unit.getStat(36), this.x, this.y + 90, 4, 13, 2));
                    this.hooks.push(new Text("Magic resist: ÿc0" + unit.getStat(37), this.x, this.y + 105, 4, 13, 2));

                    this.cleared = false;

                    this.hooks.push(new Box(this.x + 2, this.y - 15, 136 + 85, frameYsize, 0x0, 1, 2));
                    this.hooks.push(new Frame(this.x, this.y - 15, 140 + 85, frameYsize, 2));

                    this.hooks[this.hooks.length - 2].zorder = 0;
                };

                this.itemInfo = function (unit) {
                    var i = 0,
                        frameYsize = 50;

                    if (!this.currentGid) {
                        this.currentGid = unit.gid;
                    }

                    if (this.currentGid === unit.gid && !this.cleared) {
                        return;
                    }

                    if (this.currentGid !== unit.gid) {
                        this.remove();
                        this.currentGid = unit.gid;
                    }

                    this.hooks.push(new Text("Classid: ÿc0" + unit.classid, this.x, this.y, 4, 13, 2));
                    this.hooks.push(new Text("Code: ÿc0" + unit.code, this.x, this.y + 15, 4, 13, 2));
                    this.hooks.push(new Text("Item level: ÿc0" + unit.ilvl, this.x, this.y + 30, 4, 13, 2));

                    this.cleared = false;
                    this.socketedItems = unit.getItems();

                    if (this.socketedItems[0]) {
                        this.hooks.push(new Text("Socketed with:", this.x, this.y + 45, 4, 13, 2));
                        frameYsize += 15;

                        for (i = 0; i < this.socketedItems.length; i += 1) {
                            this.hooks.push(new Text(this.socketedItems[i].fname.split("\n").reverse().join(" "), this.x, this.y + (i + 4) * 15, 0, 13, 2));

                            frameYsize += 15;
                        }
                    }

                    // Get prefix and suffix from identified magic items
                    if (unit.quality === 4 && unit.getFlag(0x10)) {
                        this.hooks.push(new Text("Prefix: ÿc0" + unit.prefixnum, this.x, this.y + frameYsize - 5, 4, 13, 2));
                        this.hooks.push(new Text("Suffix: ÿc0" + unit.suffixnum, this.x, this.y + frameYsize + 10, 4, 13, 2));

                        frameYsize += 30;
                    }

                    // Get prefixes and suffixes from rare items
                    if (unit.quality === 6) {
                        let prefixes = unit.prefixes,
                            suffixes = unit.suffixes,
                            n = 0;

                        while (n < prefixes.length) {
                            this.hooks.push(new Text("Prefix: ÿc0" + prefixes[n], this.x, this.y + frameYsize - 5, 4, 13, 2));
                            frameYsize += 15;
                            n += 1
                        }


                        n = 0;

                        while (n < suffixes.length) {
                            this.hooks.push(new Text("Suffix: ÿc0" + suffixes[n], this.x, this.y + frameYsize - 5, 4, 13, 2));
                            frameYsize += 15;
                            n += 1
                        }
                    }

                    this.hooks.push(new Box(this.x + 2, this.y - 15, 116 + 105, frameYsize, 0x0, 1, 2));
                    this.hooks.push(new Frame(this.x, this.y - 15, 120 + 105, frameYsize, 2));

                    this.hooks[this.hooks.length - 2].zorder = 0;
                };

                this.remove = function () {
                    while (this.hooks.length > 0) {
                        this.hooks.shift().remove();
                    }

                    this.cleared = true;
                };
            }

        //+ Hooks =================================================================
            function hookHandler (click, x, y) {
                // Get the hook closest to the clicked location
                function sortHooks(h1, h2) {
                    return Math.abs(h1.y - y) - Math.abs(h2.y - y);
                }
                // Left click
                if (click === 0) {
                    // Sort hooks
                    hooks.sort(sortHooks);
                    // Don't start new action until the current one finishes
                    if (activeAction && activeAction !== hooks[0].text) {
                        return true;
                    }
                    // Toggle current action on/off
                    activeAction = activeAction ? false : hooks[0].text;
                    hooks[0].color = hooks[0].color === 4 ? 1 : 4;
                    // Block click
                    return true;
                }

                return false;
            }

            function showHooks () {
                let commands = [];
                    resfix = me.screensize ? 0 : -120;

                if (hooks.length) {
                    if (resolution !== me.screensize || hide) {
                        resolution = me.screensize;

                        while (hooks.length) {
                            var kill = hooks.shift();
                            kill.remove();
                        }

                        while (decor.length) {
                            var kill = decor.shift();
                            kill.remove();
                        }

                        list = !list;
                    } else {
                        return false;
                    }
                }

                if (list) {
                    commands = ["Info"];
                } else {
                    commands = ["Info"];
                }

                for (let i = commands.length ; i ; i--) {
                    addHook (commands[i-1]);
                }

                hide = false;
                return true;
            }

            function addHook (text) {
                if (text === "Info") {
                    hooks.push (new Text (text, 5, 480 - hooks.length * 16 + resfix + 116, 4, 1, 0, false, hookHandler));
                    decor.push (new Box (1, 466 - hooks.length * 16 + resfix + 116, 50, 16));
                } else {
                    hooks.push (new Text (text, 9, 480 - hooks.length * 16 + resfix + 23, 4, 1, 0, false, hookHandler));
                }
            }

    //! LOOP =========================================================================
        while(true){
            //- Toggle info -------------------------------------------------------
                if (toggleInfoFlag) {
                    unit = getUnit(101);
                    info.createInfo(unit);
                    delay(20);
                }

            //- Updated attack when lvl -------------------------------------------
                if (me.ingame && me.getStat(5) !== unUsedSkill) {
                    if (me.getStat(5) < unUsedSkill) {
                        AutoRogerThat.updateAttack();
                        me.overhead("Attack skills have been updated!");
                    }
                    unUsedSkill = me.getStat(5);
                }

            //- Check leader ------------------------------------------------------
                if (!checkLeaderFlag) {
                    try {
                        isLeaderHere = FileTools.readText(filename);
                    } catch (error) {
                        isLeaderHere = "";
                    }
                    delay(200);

                    if (isLeaderHere !== "") {
                        leader = this.getLeader(isLeaderHere);

                        if (leader && leader.name === me.name) {
                            me.overhead("I'm the boss");
                        } else {
                            Config.Leader = isLeaderHere;

                            if (!leaderLeftPartyFlag) {
                                print("The leader is ÿc4" + isLeaderHere + "ÿc0");
                                me.overhead("The leader is ÿc4" + isLeaderHere + "ÿc0");
                            } else {
                                print("ÿc1" + Config.Leader + "ÿc0 has left the party");
                                me.overhead("ÿc1" + Config.Leader + "ÿc0 has left the party");
                            }
                        }
                    } else {
                        Config.Leader = "";
                        leader = false;
                    }

                    checkLeaderFlag = true;
                }

                if (checkLeaderFlag && Config.Leader !== "" && Misc.inMyParty(Config.Leader) && !checkPartyFlag) {
                    leaderUnit = this.getLeaderUnit(leader.name);
                    print("Partied leader ÿc2" + leader.name + "ÿc0");
                    me.overhead("Partied leader ÿc2" + leader.name + "ÿc0");
                    checkPartyFlag = true;
                    leaderLeftPartyFlag = false;
                } else if (checkLeaderFlag &&  Config.Leader !== "" && !Misc.inMyParty(Config.Leader) && checkPartyFlag) {
                    if (!me.inTown) {
                        this.goToTownTomeBook();
                    }

                    leaderLeftPartyFlag = true;
                    checkLeaderFlag = false;
                    checkPartyFlag = false;
                }

            //- Leader commands when leader is in the party -----------------------
                if (Misc.inMyParty(Config.Leader)) {
                    if (me.mode === 17) {
                        while (!me.inTown) {
                            me.revive();
                            delay(1000);
                        }

                        Town.move("portalspot");
                    }

                    while (stop) {
                        delay(500);
                    }

                    if (!me.inTown) {
                        if (!leaderUnit || !copyUnit(leaderUnit).x) {
                            leaderUnit = this.getLeaderUnit(Config.Leader);

                            if (leaderUnit) {
                                me.overhead("Leader unit found.");
                            }
                        }

                        if (!leaderUnit) {
                            player = getUnit(0);

                            if (player) {
                                do {
                                    if (player.name !== me.name) {
                                        Pather.moveToUnit(player);
                                        break;
                                    }
                                } while (player.getNext());
                            }
                        }

                        if (leaderUnit && getDistance(me.x, me.y, leaderUnit.x, leaderUnit.y) <= 100) {
                            if (getDistance(me.x, me.y, leaderUnit.x, leaderUnit.y) > 2) {
                                Pather.moveToUnit(leaderUnit);
                            }
                        }

                        if (attack) {
                            Attack.clear(20, false, false, false, false);
                            this.pickPotions(20);
                        }

                        if (me.classid === 3 && Config.AttackSkill[2] > 0) {
                            Skill.setSkill(Config.AttackSkill[2], 0);
                        }

                        if (leader.area !== me.area && !me.inTown) {
                            while (leader.area === 0) {
                                delay(100);
                            }

                            result = this.checkExit(leader, leader.area);

                            switch (result) {
                                case 1:
                                    delay(500);
                                    Pather.moveToExit(leader.area, true);

                                    break;
                                case 2:
                                    me.overhead("Taking portal.");

                                    break;
                                case 3:
                                    me.overhead("Taking waypoint.");
                                    delay(500);
                                    Pather.useWaypoint(leader.area, true);

                                    break;
                                case 4:
                                    me.overhead("Special transit.");

                                    break;
                            }

                            while (me.area === 0) {
                                delay(100);
                            }

                            leaderUnit = this.getLeaderUnit(Config.Leader);
                        }
                    }

                    if (actions.length > 0) {
                        switch (actions[0]) {
                            case "1":
                                this.goToLeader(leader);
                                actions.shift();

                                break;
                            case "2":
                                if (!me.inTown) {
                                    this.goToTownTomeBook();
                                }

                                actions.shift();

                                break;
                            case "3":
                                if (!me.inTown && !this.goToTownTomeBook()) {
                                    actions.shift();
                                    break;
                                }

                                Town.doChores();
                                Town.move("portalspot");
                                actions.shift();

                                break;
                            case "a4":
                                if (me.area === 102) {
                                    Pather.moveTo(17590, 8068);
                                    let tick = getTickCount(), time = 0;

                                    while (getCollision(me.area, 17601, 8070, 17590, 8068) !== 0 && (time = getTickCount() - tick) < 2000) {
                                        Pather.moveTo(17590, 8068);  // Activate it
                                        delay(3);
                                    }

                                    if (time < 2000 && Pather.moveTo(17601, 8070)) {
                                        Pather.usePortal(null);
                                    }

                                    actions.shift();

                                    break;
                                }
                            case "a1":
                            case "a2":
                            case "a3":
                            case "a5":
                                if (this.goToTownTomeBook()) {
                                    const act = actions[0];
                                    this.changeAct(parseInt(act[1], 10));
                                }

                                actions.shift();

                                break;
                            case "bo":
                                if (!me.inTown) {
                                    Precast.doPrecast(true);
                                }

                                actions.shift();

                                break;
                            case "c":
                                let corpse = getUnit(0, me.name, 17);

                                if (corpse) {
                                    for (let i = 0; i < 3; i++) {
                                        do {
                                            if (getDistance(me, corpse) <= 15) {
                                                Pather.moveToUnit(corpse);
                                                corpse.interact();
                                                delay(500);
                                            }
                                        } while (corpse.getNext());
                                    }
                                }

                                actions.shift();

                                break;
                            case "cow":
                                if (!this.goToTownTomeBook()) {
                                    actions.shift();
                                    break
                                }

                                if (me.area !== 1) {
                                    Town.goToTown(1);
                                }

                                Pather.usePortal(39);
                                actions.shift();

                                break;
                            case "move":
                                coords = CollMap.getRandCoordinate(me.x, -10, 10, me.y, -10, 10);
                                Pather.moveTo(coords.x, coords.y);
                                actions.shift();

                                break;
                            case "p":
                                if (!me.inTown) {
                                    this.checkQuest();
                                }

                                actions.shift();

                                break;
                            case "wp":
                                this.getWp();
                                actions.shift();

                                break;
                            case "1wp":
                                this.goToLeader(leader, true);
                                delay(250);
                                this.getWp();
                                delay(1000);
                                this.goToTownTomeBook();
                                actions.shift();

                                break;
                            case "#bye":
                                if (this.goToTownTomeBook()) {
                                    Town.goToTown(1);
                                }

                                me.overhead("Cya!");
                                delay(rand(3,15)*1000);
                                D2Bot.stop(me.profile, true);

                                break;
                            case "#come":
                                if (Config.Leader !== "") {
                                    if (Misc.inMyParty(Config.Leader)) {
                                        let leaderAct = this.checkLeaderAct(leader);

                                        if (me.inTown && leaderAct !== me.act) {
                                            me.overhead = ("Yes, leader ÿc2" + Config.Leader + "ÿc0");
                                            Town.goToTown(leaderAct);
                                        } else if (!me.inTown) {
                                            if (!this.goToTownTomeBook()) {
                                                break;
                                            }
                                        }

                                        Town.move("portalspot");
                                    } else {
                                        Town.goToTown(1);
                                        Town.move("stash");
                                    }
                                }

                                actions.shift();

                                break;
                            case "#quit":
                                this.goToTownTomeBook();
                                delay(rand(6, 10) * 1000);
                                quit();

                                break;
                            case "#stash":
                                if (me.inTown) {
                                    if (getUIFlag(0x19)) {
                                        me.cancel();
                                        me.overhead("Stash Done!");
                                        Pather.moveTo(me.x + rand(-8, 8), me.y + rand(-8, 8));
                                    } else {
                                        me.cancel();
                                        me.overhead("Going to Stash!");
                                        Town.openStash();
                                    }
                                }

                                actions.shift();

                                break;
                        }
                    }
                }

            //- Hooks menu --------------------------------------------------------
                if (!chatFlag && !pvpFlag) {
                    switch (activeAction) {
                        case "Info":
                            if (!toggleInfoFlag) {
                                me.overhead("     Info ÿc2ON");
                                info.x = me.screensize !== 0 ? 670 : 510;
                                toggleInfoFlag = true;
                            } else {
                                me.overhead("     Info ÿc1OFF");
                                toggleInfoFlag = false;
                            }

                            activeAction = false;
                            break;
                        default:
                            showHooks();

                            for (let i = 0; i < hooks.length; i++) {
                                if (hooks[i].color === 1) {
                                hooks[i].color = 4;
                                }
                            }

                            break;
                    }
                }

            delay(200);
        }
}