var AutoRogerThat = {
    //! INIT ==========================================================================
        //+ Init pickit list and belt size -----------------------------------------
            init: function (notify) {
                let filename;

                for (let i = 0; i < Config.PickitFiles.length; i++) {
                    filename = "pickit/" + Config.PickitFiles[i];
                    NTIP.OpenFile(filename, notify);
                }
        
                this.beltSize = Storage.BeltSize();
            },

    //! GET ONE LEADER ================================================================
        //+ RogerThat.js use a txt file to store the last leader "i am the boss"----
            getOneLeader: function () {
                let player = getParty();

                if (player) {
                    while (player.getNext()) {
                        for (let i = 0 ; i < Config.RogerThatLeaderList.length ; i++) {
                            if (player.name == Config.RogerThatLeaderList[i] && me.name !== Config.RogerThatLeaderList[i]) {
                                if (Misc.inMyParty(player.name)) {
                                    Config.Leader = player.name;
                                    return true;
                                }
                            }
                        }
                    }
                }

                return false;
            },

    //! DROP ITEMS ====================================================================
        //+ Drop whole inventory --------------------------------------------------
            dropStuff: function () {
                let cube = getUnit(4, 549),
                    items,
                    itemFlag = true,
                    droppedSomethingFlag = false;

                if (!Town.openStash()) {
                    return false;
                }

                Config.CainID.MinGold = 2000;
                Config.CainID.MinUnids = 0;
                Town.identify();

                items = this.getMuleItems();
                items = items.concat(this.getTrashMuleItems());

                if (!items || items.length === 0) {
                    itemFlag = false;
                } else {
                    itemFlag = true;
                }

                if (itemFlag) {
                    for (let i = 0 ; i < items.length ; i++) {
                        // print("Type : " + items[i].type + " - iLVL : " + items[i].ilvl + " - Class ID: " + items[i].classid + " - " + items[i].name);
                        items[i].drop();
                        droppedSomethingFlag = true;
                    }
                }
                
                if (cube) {
                    Cubing.openCube();
                    items = this.getCubeMuleItems();
                    items = items.concat(this.getTrashCubeMuleItems());

                    if (!items || items.length === 0) {
                        itemFlag = false;
                    } else {
                        itemFlag = true;
                    }

                    if (itemFlag) {
                        for (let i = 0 ; i < items.length ; i++) {
                            items[i].drop();
                            droppedSomethingFlag = true;
                        }
                    }
                }

                delay(200);
                me.cancel();
                delay(200);
                me.cancel();

                if (!droppedSomethingFlag) {
                    return false;
                }

                return true;
            },

        //+ Drop trash items ------------------------------------------------------
            dropTrash: function () {
                let cube = getUnit(4, 549),
                    itemFlag = true,
                    droppedSomethingFlag = false,
                    items = this.getTrashMuleItems();
                
                if (!Town.openStash()) {
                    return false;
                }

                if (!items || items.length === 0) {
                    itemFlag = false;
                } else {
                    itemFlag = true;
                }

                if (itemFlag) {
                    for (let i = 0 ; i < items.length ; i++) {
                        items[i].drop();
                        droppedSomethingFlag = true;
                    }
                }

                if (cube) {
                    Cubing.openCube();
                    items = this.getTrashCubeMuleItems();
                
                    if (!items || items.length === 0) {
                        itemFlag = false;
                    } else {
                        itemFlag = true;
                    }

                    if (itemFlag) {
                        for (let i = 0 ; i < items.length ; i++) {
                            items[i].drop();
                            droppedSomethingFlag = true;
                        }
                    }
                }

                delay(200);
                me.cancel();
                delay(200);
                me.cancel();

                if (droppedSomethingFlag) {
                    return true;
                }

                return false;
            },

        //+ Drop specific item and quantity ---------------------------------------
            dropMultipleItems: function (quant, item1, item2, item3, item4, item5) {
                let itemFlag,
                    cube = getUnit(4, 549),
                    itemsArray = [item1, item2, item3, item4, item5],
                    quantArray = [quant, quant, quant, quant, quant],
                    continueFlag = false,
                    droppedSomethingFlag = false,
                    itemsDropArray = [],
                    itemClassArray = [],
                    items = this.getMuleItems();
                
                function drop (itemsArray) {
                    itemsArray.forEach((item) => itemsDropArray.push(item));
                };

                if (!Town.openStash()) {
                    return false;
                }

                if (!items || items.length === 0) {
                    itemFlag = false;
                } else {
                    itemFlag = true;
                }

                if (this.check) {
                    this.check = false;
                }

                //- Check what is the classid of the items that you want to drop
                for (let i = 0 ; i < itemsArray.length ; i++) {
                    if (itemsArray[i] != undefined) {
                        switch (itemsArray[i].toLowerCase()) {
                            case "h":            //Hate Key
                                itemsDropArray.push(648);

                                break;
                            case "t":            //Terror Key
                                itemsDropArray.push(647);

                                break;
                            case "d":            //Destruction Key
                                itemsDropArray.push(649);

                                break;
                            case "key":
                            case "keys":         //Keys
                                itemClassArray = [648, 647, 649];
                                drop(itemClassArray);

                                break;
                            case "horn":         //Horn
                                itemsDropArray.push(650);
                            
                                break;
                            case "eye":          //Eye
                                itemsDropArray.push(651);

                                break;
                            case "brain":        //Brain
                                itemsDropArray.push(652);

                                break;
                            case "organ":
                            case "organs":       //Organs
                                itemClassArray = [650, 651, 652];
                                drop(itemClassArray);

                                break;
                            case "blue":
                            case "b":            //Blue Essence
                                itemsDropArray.push(654);

                                break;
                            case "yellow":
                            case "y":            //Yellow Essence
                                itemsDropArray.push(655);

                                break;
                            case "red":
                            case "r":            //Red Essence
                                itemsDropArray.push(656);

                                break;
                            case "green":
                            case "g":            //Green Essence
                                itemsDropArray.push(657);

                                break;
                            case "essen":
                            case "essence":
                            case "essences":     //Essences
                                itemClassArray = [654, 655, 656, 657];
                                drop(itemClassArray);

                                break;
                            case "helm":
                            case "helms":        //Helms
                                itemClassArray = [308, 309, 310, 349, 356, 395, 399, 400, 404, 405, 406, 407, 418, 419, 426, 468, 474, 476, 493, 495, 306, 307, 403, 312, 358, 401, 402, 472, 475, 311, 357, 496, 497, 352, 353, 354, 355, 422, 423, 424, 425, 417, 428, 465, 427];
                                drop(itemClassArray);

                                break;
                            case "glove":
                            case "gloves":       //Gloves
                                itemClassArray = [334, 335, 336, 380, 381, 451, 337, 338, 383, 384, 453, 454, 382, 452, 450];
                                drop(itemClassArray);

                                break;
                            case "shield":
                            case "shields":      //Shields
                                itemClassArray = [329, 330, 331, 332, 333, 350, 351, 375, 377, 379, 396, 397, 410, 411, 412, 480, 481, 482, 486, 487, 500, 501, 502, 328, 374, 376, 378, 444, 445, 446, 447, 467, 466, 448, 449];
                                drop(itemClassArray);

                                break;
                            case "armor":
                            case "armors":       //Armors
                                itemClassArray = [313, 314, 315, 326, 359, 360, 361, 362, 365, 367, 369, 371, 442, 314, 315, 316, 334, 317, 318, 319, 321, 322, 325, 363, 364, 433, 434, 320, 322, 323, 324, 325, 327, 342, 348, 370, 372, 373, 438, 440, 441, 443, 366, 368];
                                drop(itemClassArray);

                            case "belt":
                            case "belts":        //Belts
                                itemClassArray = [345, 346, 347, 348, 391, 392, 393, 394, 461, 463, 344, 390, 460, 462, 462, 464,];
                                drop(itemClassArray);

                                break;
                            case "boot":
                            case "boots":        //Boots
                                itemClassArray = [339, 340, 341, 342, 385, 386, 387, 388, 389, 455, 456, 457, 458, 343, 459];
                                drop(itemClassArray);

                                break;
                            case "token":
                            case "tokens":       //Tokens
                                drop([653]);

                                break;
                            case "rune":
                            case "runes":        //All Runes
                                for (let j = 610 ; j <= 642 ; j++) {
                                    itemsDropArray.push(j);
                                }

                                break;
                            case "lr":
                            case "lrs":          //Low Runes
                                for (let j = 610 ; j <= 634 ; j++) {
                                    itemsDropArray.push(j);
                                }

                                break;
                            case "hr":
                            case "hrs":          //Hight Runes
                                for (let j = 635 ; j <= 642 ; j++) {
                                    itemsDropArray.push(j);
                                }

                                break;
                            case "sc":
                            case "scs":          //Small Charms
                                itemsClassArray = [603, 604];
                                drop(itemClassArray);

                                break;
                            case "gc":
                            case "gcs":          //Grand Charms
                                itemsDropArray.push(605);

                                break;
                            case "ring":
                            case "rings":        //Rings
                                itemsDropArray.push(522);

                                break;
                            case "amulet":
                            case "amulets":      //Amulets
                                itemsDropArray.push(520);

                                break;
                            case "jewel":
                            case "jewels":       //Jewels
                                itemsDropArray.push(643);

                                break;
                            case "item":
                            case "items":        //Drop all items
                                if (dropStuff()){
                                    return true;
                                } else {
                                    return false;
                                }
                            default:             //Drop Runes
                                itemsDropArray.push(itemsArray[i].charAt(0).toUpperCase() + itemsArray[i].slice(1) + " Rune");
                                break;
                        }
                    }
                }

                //- Drop items
                if (itemFlag) {
                    //? Drop items from stash and inventory
                    for (let i = 0 ; i < items.length ; i++) {
                        for (let j = 0 ; j < itemsDropArray.length ; j++) {
                            if (items[i].classid == itemsDropArray[j] || items[i].name == itemsDropArray[j]) {
                                if (quant > 0) {
                                    if (quantArray[j] > 0) {
                                        items[i].drop();
                                        quantArray[j] -= 1;
                                    }
                                } else {
                                    items[i].drop();
                                }

                                droppedSomethingFlag = true;
                            }
                        }
                    }

                    //? Drop items from cube  - only open cube if necessary
                    if (quant > 0) {
                        for (let i = 0 ; i < itemsDropArray.length ; i++) {
                            if (quantArray[i] != 0) {
                                continueFlag = true;
                                break;
                            }
                        }
                    } else {
                        continueFlag = true;
                    }

                    if (continueFlag) {
                        if (cube) {
                            Cubing.openCube();
                            items = this.getCubeMuleItems();
            
                            if (!items || items.length === 0) {
                                itemFlag = false;
                            } else {
                                itemFlag = true;
                            }
                            
                            if (itemFlag) {
                                for (let i = 0 ; i < items.length ; i++) {
                                    for (let j = 0 ; j < itemsDropArray.length ; j++) {
                                        if (items[i].classid == itemsDropArray[j] || items[i].name == itemsDropArray[j]) {
                                            if (quant > 0) {
                                                if (quantArray[j] > 0) {
                                                items[i].drop();
                                                quantArray[j] -= 1;
                                                }
                                            } else {
                                                items[i].drop();
                                            }

                                            droppedSomethingFlag = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                delay(200);
                me.cancel();
                delay(200);
                me.cancel();

                if (!droppedSomethingFlag) {
                    return false;
                }

                if (quant > 0) {
                    for (let i = 0 ; i < itemsDropArray.length ; i++) {
                        if (quantArray[i] != 0) {
                            return false;
                        }
                    }
                }

                return true;
            },

        //+ Get a list of items to mule -------------------------------------------
            getMuleItems: function () {
                let item = me.getItem(-1, 0),
                    items = []

                if (item) {
                    do {
                        if (Town.ignoredItemTypes.indexOf(item.itemType) === -1 &&
                            (this.checkItem(item).result > 0 || item.location === 7) &&
                            item.classid !== 549 &&                         // Don't drop Horadric Cube
                            (item.classid !== 603 || item.quality !== 7) && // Don't drop Annihilus
                            (item.classid !== 604 || item.quality !== 7) && // Don't drop Hellfire Torch
                            (item.location === 7 || (item.location === 3 && !Storage.Inventory.IsLocked(item, Config.Inventory))) &&    // Don't drop items in locked slots
                            ((!TorchSystem.getFarmers() && !TorchSystem.isFarmer()) || [647, 648, 649].indexOf(item.classid) === -1)) { // Don't drop Keys if part of TorchSystem
                            if ((!this.cubingIngredient(item) && !this.runewordIngredient(item) && !this.utilityIngredient(item))) {        // Don't drop Excluded items or Runeword/Cubing/CraftingSystem ingredients
                                items.push(copyUnit(item));
                            }
                        }
                    } while (item.getNext());
                }

                return items;
            },

        //+ Get a list of items to be dropped (trash) -----------------------------
            getTrashMuleItems: function () {
                let item = me.getItem(-1, 0),
                    items = [],
                    status;

                if (item) {
                    do {
                        status = this.checkItem(item);
                        if (Town.ignoredItemTypes.indexOf(item.itemType) === -1 &&
                            ((status.result != 1 && status.result != 2  && status.result != 3 && status.result != 4 && status.result != 5) && (item.location === 7 || item.location === 3)) &&
                            item.classid !== 549 &&                         // Don't drop Horadric Cube
                            (item.classid !== 603 || item.quality !== 7) && // Don't drop Annihilus
                            (item.classid !== 604 || item.quality !== 7) && // Don't drop Hellfire Torch
                            (item.location === 7 || (item.location === 3 && !Storage.Inventory.IsLocked(item, Config.Inventory))) &&    // Don't drop items in locked slots
                            ((!TorchSystem.getFarmers() && !TorchSystem.isFarmer()) || [647, 648, 649].indexOf(item.classid) === -1)) { // Don't drop Keys if part of TorchSystem
                            if ((!this.cubingIngredient(item) && !this.runewordIngredient(item) && !this.utilityIngredient(item))) {    // Don't drop Excluded items or Runeword/Cubing/CraftingSystem ingredients
                                items.push(copyUnit(item));
                            }
                        }
                    } while (item.getNext());
                }

                return items;
            },

        //+ Get a list of items from the cube -------------------------------------
            getCubeMuleItems: function () {
                let item, items;

                item = me.findItems(-1, 0, 6);
                items = [];

                for (let i = 0 ; i < item.length ; i++) {
                    if (Town.ignoredItemTypes.indexOf(item[i].itemType) === -1 &&
                        (this.checkItem(item[i]).result > 0 && item[i].location === 6) &&
                        item[i].classid !== 549 &&                            // Don't drop Horadric Cube
                        (item[i].classid !== 603 || item[i].quality !== 7) && // Don't drop Annihilus
                        (item[i].classid !== 604 || item[i].quality !== 7) && // Don't drop Hellfire Torch
                        (item[i].location === 6 && !Storage.Inventory.IsLocked(item[i], Config.Inventory)) &&                                // Don't drop item in locked slots
                        ((!TorchSystem.getFarmers() && !TorchSystem.isFarmer()) || [647, 648, 649].indexOf(item[i].classid) === -1)) {       // Don't drop Keys if part of TorchSystem
                            if ((!this.cubingIngredient(item[i]) && !this.runewordIngredient(item[i]) && !this.utilityIngredient(item[i]))) { // Don't drop Excluded item or Runeword/Cubing/CraftingSystem ingredients
                                items.push(copyUnit(item[i]));
                            }
                    }
                }
                return items;
            },

        //+ Get a list of items from the cube to be dropped (trash) ---------------
            getTrashCubeMuleItems: function () {
                var item = me.findItems(-1, 0, 6),
                    items = [], 
                    status;

                for (let i = 0 ; i < item.length ; i++) {
                    status = this.checkItem(item[i]);
                    if (Town.ignoredItemTypes.indexOf(item[i].itemType) === -1 &&
                        ((status.result != 1 && status.result != 2  && status.result != 3 && status.result != 4 && status.result != 5) && item[i].location === 6) &&
                        item[i].classid !== 549 &&                            // Don't drop Horadric Cube
                        (item[i].classid !== 603 || item[i].quality !== 7) && // Don't drop Annihilus
                        (item[i].classid !== 604 || item[i].quality !== 7) && // Don't drop Hellfire Torch
                        (item[i].location === 6 && !Storage.Inventory.IsLocked(item[i], Config.Inventory)) &&                                // Don't drop item in locked slots
                        ((!TorchSystem.getFarmers() && !TorchSystem.isFarmer()) || [647, 648, 649].indexOf(item[i].classid) === -1)) {       // Don't drop Keys if part of TorchSystem
                            if ((!this.cubingIngredient(item[i]) && !this.runewordIngredient(item[i]) && !this.utilityIngredient(item[i]))) { // Don't drop Excluded item or Runeword/Cubing/CraftingSystem ingredients
                                items.push(copyUnit(item[i]));
                            }
                        }
                }

                return items;
            },

        //+ Cube Ingredients ------------------------------------------------------
            utilityIngredient: function (item) {
                return CraftingSystem.validGids.indexOf(item.gid) > -1;
            },

        //+ Check if an item is a cubing ingredient -------------------------------
            cubingIngredient: function (item) {
                for (let i = 0 ; i < Cubing.validIngredients.length ; i++) {
                    if (item.gid === Cubing.validIngredients[i].gid) {
                        return true;
                    }
                }

                return false;
            },

        //+ Check if an item is a runeword ingredient - rune, empty base or bad rolled base
            runewordIngredient: function (item) {
                let base;

                if (Runewords.validGids.indexOf(item.gid) > -1) {
                    return true;
                }

                if (!this.baseGids) {
                    this.baseGids = [];

                    for (let i = 0 ; i < Config.Runewords.length ; i++) {
                        base = Runewords.getBase(Config.Runewords[i][0], Config.Runewords[i][1], (Config.Runewords[i][2]||0)) || Runewords.getBase(Config.Runewords[i][0], Config.Runewords[i][1], (Config.Runewords[i][2]||0), true);

                        if (base) {
                            this.baseGids.push(base.gid);
                        }
                    }
                }

                if (this.baseGids.indexOf(item.gid) > -1) {
                    return true;
                }

                return false;
            },
        
        //+ Drop Anni/Torch -------------------------------------------------------
            dropCharm: function (dropAnni) {
                let item;

                if (!Town.openStash()) {
                    return false;
                }


                if (dropAnni) {
                    item = me.findItem(603, 0, -1, 7);

                    if (item && !Storage.Inventory.IsLocked(item, Config.Inventory)) {
                        D2Bot.printToConsole("AutoMule: Transferring Anni.", 7);
                        item.drop();
                        delay(1000);
                        me.cancel();
                        return true;
                    }

                    return false;
                }

                item = me.findItem(604, 0, -1, 7);

                if (item) {
                    D2Bot.printToConsole("AutoMule: Transferring Torch.", 7);
                    item.drop();
                    delay(1000);
                    me.cancel();
                    return true;
                }

                me.cancel();
                return true;
            },

    //! PICK ITEMS ====================================================================
        gidList: [],
        beltSize: 1,
        ignoreLog: [4, 5, 6, 22, 41, 76, 77, 78, 79, 80, 81], // Ignored item types for item logging
      
        //+ Check items with pickit list ------------------------------------------
            checkItem: function (unit) {
                let rval = NTIP.CheckItem(unit, false, true);

                if ((unit.classid === 617 || unit.classid === 618) && Town.repairIngredientCheck(unit)) {
                    return {
                        result: 6,
                        line: null
                    };
                }

                if (CraftingSystem.checkItem(unit)) {
                    return {
                        result: 5,
                        line: null
                    };
                }

                if (Cubing.checkItem(unit)) {
                    return {
                        result: 2,
                        line: null
                    };
                }

                if (Runewords.checkItem(unit)) {
                    return {
                        result: 3,
                        line: null
                    };
                }

                //- If total gold is less than 10k pick up anything worth 10 gold per square to sell in town.
                if (rval.result === 0 && Town.ignoredItemTypes.indexOf(unit.itemType) === -1 && me.gold < Config.LowGold && unit.itemType !== 39) {
                    if (unit.classid === 523) {
                        return {
                            result: 4,
                            line: null
                        };
                    }

                    if (unit.getItemCost(1) / (unit.sizex * unit.sizey) >= 10) {
                        return {
                            result: 4,
                            line: null
                        };
                    }
                }

                return rval;
            },

        //+ Pick multiple items ---------------------------------------------------
            pickItems: function () {
                let status,
                    item,
                    canFit,
                    pickList = [];

                if (me.dead) {
                    return false;
                }

                while (!me.idle) {
                    delay(40);
                }

                item = getUnit(4);

                if (item) {
                    do {
                        if ((item.mode === 3 || item.mode === 5) && getDistance(me, item) <= Config.PickRange) {
                            pickList.push(copyUnit(item));
                        }
                    } while (item.getNext());
                }

                if (pickList.length == 0) {
                    return false;
                }

                while (pickList.length > 0) {
                    if (me.dead) {
                        return false;
                    }

                    pickList.sort(this.sortItems);
                    
                    //- Check if the item unit is still valid and if it's on ground or being dropped
                    if (copyUnit(pickList[0]).x !== undefined && (pickList[0].mode === 3 || pickList[0].mode === 5) &&
                        (Pather.useTeleport() || me.inTown || !checkCollision(me, pickList[0], 0x1))) { // Don't pick items behind walls/obstacles when walking
                        //? Check if the item should be picked
                        status = this.checkItem(pickList[0]);

                        if (status.result && this.canPick(pickList[0]) && Item.autoEquipCheck(pickList[0])) {
                            //> Override canFit for scrolls, potions and gold
                            canFit = Storage.Inventory.CanFit(pickList[0]) || [4, 22, 76, 77, 78].indexOf(pickList[0].itemType) > -1;

                            //> Try to make room with FieldID
                            if (!canFit && Config.FieldID && Town.fieldID()) {
                                canFit = Storage.Inventory.CanFit(pickList[0]) || [4, 22, 76, 77, 78].indexOf(pickList[0].itemType) > -1;
                            }

                            if (!canFit) {
                                Town.stash(true);
                                // me.overhead(Config.PickitTries + " - " + pickList[0].name);
                                // delay(1000);
                                if (Config.PickitTries > 3) {
                                    return "full";
                                }

                                Config.PickitTries = Config.PickitTries + 1;
                                this.pickItems();
                            }

                            if (canFit) {
                                this.pickItem(pickList[0]);
                                Config.PickitTries = 0;
                            }
                        }
                    }

                    pickList.shift();
                }

                me.cancel();

                if (Config.PickitTries > 0){
                    return "full";
                }

                return true;
            },

        //+ Pick item -------------------------------------------------------------
            pickItem: function (unit, status, keptLine) {
                function ItemStats(unit) {
                    this.ilvl = unit.ilvl;
                    this.type = unit.itemType;
                    this.classid = unit.classid;
                    this.name = unit.name;
                    this.gold = unit.getStat(14);
                    this.useTk = Config.UseTelekinesis && me.classid === 1 && me.getSkill(43, 1) && (this.type === 4 || this.type === 22 || (this.type > 75 && this.type < 82)) && getDistance(me, unit) > 5 && getDistance(me, unit) < 20 && !checkCollision(me, unit, 0x4);
                    this.picked = false;
                }

                let item,
                    tick,
                    gid,
                    stats,
                    cancelFlags = [0x01, 0x08, 0x14, 0x0c, 0x19, 0x1a],
                    itemCount = me.itemcount;

                if (unit.gid) {
                    gid = unit.gid;
                    item = getUnit(4, -1, -1, gid);
                }

                if (!item) {
                    return false;
                }

                for (let i = 0 ; i < cancelFlags.length ; i++) {
                    if (getUIFlag(cancelFlags[i])) {
                        delay(500);
                        me.cancel(0);
                        break;
                    }
                }

                stats = new ItemStats(item);

                MainLoop:
                    for (let i = 0 ; i < 3 ; i++) {
                        if (!getUnit(4, -1, -1, gid)) {
                            break MainLoop;
                        }
                        if (me.dead) {
                            return false;
                        }
                        while (!me.idle) {
                            delay(40);
                        }
                        if (item.mode !== 3 && item.mode !== 5) {
                            break MainLoop;
                        }
                        if (stats.useTk) {
                            Skill.cast(43, 0, item);
                        } else {
                            if (getDistance(me, item) > (Config.FastPick === 2 && i < 1 ? 6 : 4) || checkCollision(me, item, 0x1)) {
                                if (Pather.useTeleport()) {
                                    Pather.moveToUnit(item);
                                } else if (!Pather.moveTo(item.x, item.y, 0)) {
                                    continue MainLoop;
                                }
                            }

                            if (Config.FastPick < 2) {
                                Misc.click(0, 0, item);
                            } else {
                                sendPacket(1, 0x16, 4, 0x4, 4, item.gid, 4, 0);
                            }
                        }

                        tick = getTickCount();

                        while (getTickCount() - tick < 1000) {
                            item = copyUnit(item);
                            if (stats.classid === 523) {
                                if (!item.getStat(14) || item.getStat(14) < stats.gold) {
                                    print("ÿc7Picked up " + (item.getStat(14) ? (item.getStat(14) - stats.gold) : stats.gold) + " " + stats.name);
                                    return true;
                                }
                            }
                            if (item.mode !== 3 && item.mode !== 5) {
                                switch (stats.classid) {
                                case 543: // Key
                                    print("ÿc7Picked up " + stats.color + stats.name + " ÿc7(" + Town.checkKeys() + "/12)");
                                    return true;
                                case 529: // Scroll of Town Portal
                                case 530: // Scroll of Identify
                                    print("ÿc7Picked up " + stats.color + stats.name + " ÿc7(" + Town.checkScrolls(stats.classid === 529 ? "tbk" : "ibk") + "/20)");
                                    return true;
                                }
                                break MainLoop;
                            }
                            delay(20);
                        }
                        stats.useTk = false;
                    }

                stats.picked = me.itemcount > itemCount || !!me.getItem(-1, -1, gid);

                if (stats.picked) {
                    DataFile.updateStats("lastArea");

                    switch (status) {
                        case 1:
                            print("ÿc7Picked up " + stats.color + stats.name + " ÿc0(ilvl " + stats.ilvl + (keptLine ? ") (" + keptLine + ")" : ")"));
                            if (this.ignoreLog.indexOf(stats.type) === -1) {
                                // Misc.itemLogger("Kept", item);
                                // Misc.logItem("Kept", item, keptLine);
                            }

                            break;
                        case 2:
                            print("ÿc7Picked up " + stats.color + stats.name + " ÿc0(ilvl " + stats.ilvl + ")" + " (Cubing)");
                            // Misc.itemLogger("Kept", item, "Cubing " + me.findItems(item.classid).length);
                            Cubing.update();

                            break;
                        case 3:
                            print("ÿc7Picked up " + stats.color + stats.name + " ÿc0(ilvl " + stats.ilvl + ")" + " (Runewords)");
                            // Misc.itemLogger("Kept", item, "Runewords");
                            Runewords.update(stats.classid, gid);

                            break;
                        case 5: // Crafting System
                            print("ÿc7Picked up " + stats.color + stats.name + " ÿc0(ilvl " + stats.ilvl + ")" + " (Crafting System)");
                            CraftingSystem.update(item);

                            break;
                        default:
                            print("ÿc7Picked up " + stats.name + " ÿc0(ilvl " + stats.ilvl + (keptLine ? ") (" + keptLine + ")" : ")"));
                            //print("ÿc7Picked up " + stats.color + stats.name + " ÿc0(ilvl " + stats.ilvl + (keptLine ? ") (" + keptLine + ")" : ")"));

                            break;
                    }
                }

                return true;
            },

        //+ Can pick it? ----------------------------------------------------------
            canPick: function (unit) {
                let tome,
                    charm,
                    potion,
                    needPots,
                    buffers,
                    pottype,
                    myKey,
                    key;

                switch (unit.classid) {
                    case 92: // Staff of Kings
                    case 173: // Khalim's Flail
                    case 521: // Viper Amulet
                    case 546: // Jade Figurine
                    case 549: // Cube
                    case 551: // Mephisto's Soulstone
                    case 552: // Book of Skill
                    case 553: // Khalim's Eye
                    case 554: // Khalim's Heart
                    case 555: // Khalim's Brain

                    if (me.getItem(unit.classid)) {
                        return false;
                    }

                    break;
                }

                switch (unit.itemType) {
                    case 4: // Gold
                        if (me.getStat(14) === me.getStat(12) * 10000) { // Check current gold vs max capacity (cLvl*10000)
                            return false; // Skip gold if full
                        }

                        break;
                    case 22: // Scroll
                        tome = me.getItem(unit.classid - 11, 0); // 518 - Tome of Town Portal or 519 - Tome of Identify, mode 0 - inventory/stash

                        if (tome) {
                            do {
                                if (tome.location === 3 && tome.getStat(70) === 20) { // In inventory, contains 20 scrolls
                                    return false; // Skip a scroll if its tome is full
                                }
                            } while (tome.getNext());
                        } else {
                            return false; // Don't pick scrolls if there's no tome
                        }

                        break;
                    case 41: // Key
                        if (me.classid === 6) { // Assassins don't ever need keys
                            return false;
                        }

                        myKey = me.getItem(543, 0);
                        key = getUnit(4, -1, -1, unit.gid); // Passed argument isn't an actual unit, we need to get it

                        if (myKey && key) {
                            do {
                                if (myKey.location === 3 && myKey.getStat(70) + key.getStat(70) > 12) {
                                    return false;
                                }
                            } while (myKey.getNext());
                        }

                        break;
                    case 82: // Small Charm
                    case 83: // Large Charm
                    case 84: // Grand Charm
                        if (unit.quality === 7) { // Unique
                            charm = me.getItem(unit.classid, 0);

                            if (charm) {
                                do {
                                    if (charm.quality === 7) {
                                        return false; // Skip Gheed's Fortune, Hellfire Torch or Annihilus if we already have one
                                    }
                                } while (charm.getNext());
                            }
                        }

                        break;
                    case 76: // Healing Potion
                    case 77: // Mana Potion
                    case 78: // Rejuvenation Potion
                        needPots = 0;
                        for (let i = 0 ; i < 4 ; i++) {
                            if (typeof unit.code === "string" && unit.code.indexOf(Config.BeltColumn[i]) > -1) {
                                needPots += this.beltSize;
                            }
                        }

                        potion = me.getItem(-1, 2);

                        if (potion) {
                            do {
                                if (potion.itemType === unit.itemType) {
                                    needPots -= 1;
                                }
                            } while (potion.getNext());
                        }

                        if (needPots < 1 && this.checkBelt()) {
                            buffers = ["HPBuffer", "MPBuffer", "RejuvBuffer"];

                            for (let i = 0 ; i < buffers.length ; i++) {
                                if (Config[buffers[i]]) {
                                    switch (buffers[i]) {
                                        case "HPBuffer":
                                            pottype = 76;

                                            break;
                                        case "MPBuffer":
                                            pottype = 77;

                                            break;
                                        case "RejuvBuffer":
                                            pottype = 78;

                                            break;
                                    }

                                    if (unit.itemType === pottype) {
                                        if (!Storage.Inventory.CanFit(unit)) {
                                            return false;
                                        }

                                        needPots = Config[buffers[i]];
                                        potion = me.getItem(-1, 0);

                                        if (potion) {
                                            do {
                                                if (potion.itemType === pottype && potion.location === 3) {
                                                    needPots -= 1;
                                                }
                                            } while (potion.getNext());
                                        }
                                    }
                                }
                            }
                        }

                        if (needPots < 1) {
                            potion = me.getItem();

                            if (potion) {
                                do {
                                    if (potion.itemType === unit.itemType && ((potion.mode === 0 && potion.location === 3) || potion.mode === 2)) {
                                        if (potion.classid < unit.classid) {
                                            potion.interact();
                                            needPots++;
                                            break;
                                        }
                                    }
                                } while (potion.getNext());
                            }
                        }

                        if (needPots < 1) {
                            return false;
                        }

                        break;
                    case undefined: // Yes, it does happen
                        print("undefined item (!?)");
                        return false;
                }

                return true;
            },

        //+ Check belt ------------------------------------------------------------
            checkBelt: function () {
                var check = 0,
                    item = me.getItem(-1, 2);

                if (item) {
                    do {
                    if (item.x < 4) {
                        check++;
                    }
                    } while (item.getNext());
                }

                return check === 4;
            },

        //+ Sort items by distance for general item pickup ------------------------
            sortItems: function (unitA, unitB) {
                return getDistance(me, unitA) - getDistance(me, unitB);
            },

        //+ Sort items by distance for general item pickup - fast pick ------------
            sortFastPickItems: function (unitA, unitB) {
                if (unitA.itemType === 74 || unitA.quality === 7) {
                    return -1;
                }

                if (unitB.itemType === 74 || unitB.quality === 7) {
                    return 1;
                }

                return getDistance(me, unitA) - getDistance(me, unitB);
            },

        //+ Fast pickit -----------------------------------------------------------
            fastPick: function () {
                let item,
                    gid,
                    status,
                    itemList = [];

                while (this.gidList.length > 0) {
                    gid = this.gidList.shift();
                    item = getUnit(4, -1, -1, gid);

                    if (item && (item.mode === 3 || item.mode === 5) && Town.ignoredItemTypes.indexOf(item.itemType) === -1 && getDistance(me, item) <= Config.PickRange) {
                        itemList.push(copyUnit(item));
                    }
                }

                while (itemList.length > 0) {
                    itemList.sort(this.sortFastPickItems);
                    item = copyUnit(itemList.shift());

                    //? Check if the item unit is still valid
                    if (item.x !== undefined) {
                        status = this.checkItem(item);

                        if (status.result && this.canPick(item) && (Storage.Inventory.CanFit(item) || [4, 22, 76, 77, 78].indexOf(item.itemType) > -1)) {
                            this.pickItem(item, status.result, status.line);
                        }
                    }
                }

                return true;
            },

    //! UPDATE STUFF ==================================================================
        //+ Print inventory --------------------------------------------------------
            printInventory: function () {
                print(Config.Inventory[0]);
                print(Config.Inventory[1]);
                print(Config.Inventory[2]);
                print(Config.Inventory[3]);
            },

        //+ Update inventory -------------------------------------------------------
            updateInventory: function () {
                for (let i = 0 ; i < Config.RogerThatLeaderList.length ; i++) {
                    if (me.name == Config.RogerThatLeaderList[i]) {
                        print("Inventory ÿc4Leaderÿc0");
                        Config.Inventory[0] = Config.InventoryLeader[0];
                        Config.Inventory[1] = Config.InventoryLeader[1];
                        Config.Inventory[2] = Config.InventoryLeader[2];
                        Config.Inventory[3] = Config.InventoryLeader[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0 ; i < Config.RogerThatFollower1List.length ; i++) {
                    if (me.name == Config.RogerThatFollower1List[i]) {
                    print("Inventory ÿc4Followerÿc0 ÿc31ÿc0");
                    Config.Inventory[0] = Config.InventoryFollower1[0];
                    Config.Inventory[1] = Config.InventoryFollower1[1];
                    Config.Inventory[2] = Config.InventoryFollower1[2];
                    Config.Inventory[3] = Config.InventoryFollower1[3];
                    this.printInventory();
                    return true;
                    }
                }

                for (let i = 0 ; i < Config.RogerThatFollower2List.length ; i++) {
                    if (me.name == Config.RogerThatFollower2List[i]) {
                    print("Inventory ÿc4Followerÿc0 ÿc32ÿc0");
                    Config.Inventory[0] = Config.InventoryFollower2[0];
                    Config.Inventory[1] = Config.InventoryFollower2[1];
                    Config.Inventory[2] = Config.InventoryFollower2[2];
                    Config.Inventory[3] = Config.InventoryFollower2[3];
                    this.printInventory();
                    return true;
                    }
                }

                for (let i = 0 ; i < Config.RogerThatFollower3List.length ; i++) {
                    if (me.name == Config.RogerThatFollower3List[i]) {
                        print("Inventory ÿc4Followerÿc0 ÿc33ÿc0");
                        Config.Inventory[0] = Config.InventoryFollower3[0];
                        Config.Inventory[1] = Config.InventoryFollower3[1];
                        Config.Inventory[2] = Config.InventoryFollower3[2];
                        Config.Inventory[3] = Config.InventoryFollower3[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0 ; i < Config.RogerThatFollower4List.length ; i++) {
                    if (me.name == Config.RogerThatFollower4List[i]) {
                    print("Inventory ÿc4Followerÿc0 ÿc34ÿc0");
                    Config.Inventory[0] = Config.InventoryFollower4[0];
                    Config.Inventory[1] = Config.InventoryFollower4[1];
                    Config.Inventory[2] = Config.InventoryFollower4[2];
                    Config.Inventory[3] = Config.InventoryFollower4[3];
                    this.printInventory();
                    return true;
                    }
                }

                for (let i = 0 ; i < Config.RogerThatFollower5List.length ; i++) {
                    if (me.name == Config.RogerThatFollower5List[i]) {
                        print("Inventory ÿc4Followerÿc0 ÿc35ÿc0");
                        Config.Inventory[0] = Config.InventoryFollower5[0];
                        Config.Inventory[1] = Config.InventoryFollower5[1];
                        Config.Inventory[2] = Config.InventoryFollower5[2];
                        Config.Inventory[3] = Config.InventoryFollower5[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0 ; i < Config.RogerThatFollower6List.length; i++) {
                    if (me.name == Config.RogerThatFollower6List[i]) {
                        print("Inventory ÿc4Followerÿc0 ÿc36ÿc0");
                        Config.Inventory[0] = Config.InventoryFollower6[0];
                        Config.Inventory[1] = Config.InventoryFollower6[1];
                        Config.Inventory[2] = Config.InventoryFollower6[2];
                        Config.Inventory[3] = Config.InventoryFollower6[3];
                        return true;
                    }
                }

                for (let i = 0 ; i < Config.RogerThatFollower7List.length ; i++) {
                    if (me.name == Config.RogerThatFollower7List[i]) {
                        print("Inventory ÿc4Followerÿc0 ÿc37ÿc0");
                        Config.Inventory[0] = Config.InventoryFollower7[0];
                        Config.Inventory[1] = Config.InventoryFollower7[1];
                        Config.Inventory[2] = Config.InventoryFollower7[2];
                        Config.Inventory[3] = Config.InventoryFollower7[3];
                        this.printInventory();
                        return true;
                    }
                }

                print("Inventory ÿc1Genericÿc0");
                Config.Inventory[0] = Config.InventoryGeneric[0];
                Config.Inventory[1] = Config.InventoryGeneric[1];
                Config.Inventory[2] = Config.InventoryGeneric[2];
                Config.Inventory[3] = Config.InventoryGeneric[3];
                this.printInventory();
                return true;
            },

        //+ Update attack ----------------------------------------------------------
            updateAttack: function () {
                //- This function is almost like an auto build, as you lvl the attack configuration is updated, the function always checks if you have the skill point, otherwise he uses a lower skill
                let classes = ["amazon", "sorceress", "necromancer", "paladin", "barbarian", "druid", "assassin"],
                    charClass = classes[me.classid],
                    skillID,
                    skillID2;

                switch (charClass) {
                    case "amazon":
                        Config.SkipImmune   = [];
                        Config.AttackSkill  = Config.AttackZonSkill;
                        Config.LowManaSkill = Config.LowManaZonSkill;
                        Config.LightningFuryDelay = 10;   // Lightning fury interval in seconds. LF is treated as timed skill.
                        Config.SummonValkyrie     = true; // Summon Valkyrie
                        print("Auto ÿc4" + charClass + " attackÿc0");

                        break;
                    case "sorceress":
                        let typeOfSorc;

                        if (me.getSkill(36, 0) >= 1) {
                            typeOfSorc = "fire";
                            Config.SkipImmune   = ["fire"];
                        } else if (me.getSkill(39, 0) >= 1) {
                            typeOfSorc = "cold";
                            Config.SkipImmune   = ["cold"];
                        } else if (me.getSkill(38, 0) >= 1) {
                            typeOfSorc = "light";
                            Config.SkipImmune   = ["lightning"];
                        } else {
                            typeOfSorc = "";
                        }

                        if (me.charlvl <= 25) {
                            switch (me.charlvl) {
                                case 1:
                                    if (me.getSkill(36, 1, false) >= 1) { //fire bolt
                                        skillID = 36;
                                    } else {
                                        skillID = 0;
                                    }

                                    skillID2 = 0;
                                    Config.AttackSkill  = [skillID, skillID, skillID, skillID, skillID, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                    if (typeOfSorc === "light") {
                                        skillID = 38;     // charged bolt
                                    } else if (typeOfSorc === "fire") {
                                        skillID = 36;     //fire bolt
                                    } else if (typeOfSorc === "cold") {
                                        skillID = 45;     // ice blast
                                    if (me.getSkill(skillID, 0) < 1) {
                                        skillID = 39;  // ice bolt
                                    }
                                    } else {
                                        skillID = 0;
                                    }

                                    skillID2 = 0;
                                    Config.AttackSkill  = [skillID, skillID, skillID, skillID, skillID, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                    if (typeOfSorc === "light") {
                                        skillID = 49;     // lightning

                                        if (me.getSkill(skillID, 0) < 1) {
                                            skillID = 38;  // charged bolt
                                        }
                                    } else if (typeOfSorc === "fire") {
                                        skillID = 47;     // fire ball

                                        if (me.getSkill(skillID, 0) < 1) {
                                            skillID = 36;  //fire bolt
                                        }
                                    } else if (typeOfSorc === "cold") {
                                        skillID = 45;     // ice blast

                                        if (me.getSkill(skillID, 0) < 1) {
                                            skillID = 39;  // ice bolt
                                        }
                                    } else {
                                        skillID = 0;
                                    }

                                    skillID2 = 0;
                                    Config.AttackSkill  = [skillID, skillID, skillID, skillID, skillID, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                                case 13:
                                case 14:
                                case 15:
                                case 16:
                                case 17:
                                case 18:
                                case 19:
                                case 20:
                                case 21:
                                case 22:
                                case 23:
                                case 24:
                                case 25:
                                    if (typeOfSorc === "light") {
                                        skillID = 49;     // lightning
                                        skillID2 = 18;    // ligthning chain

                                        if (me.getSkill(skillID, 0) < 1) {
                                            skillID = 38; // charged bolt
                                        }
                                    } else if (typeOfSorc === "fire") {
                                        skillID = 56;     // meteor
                                        skillID2 = 47;    // fire ball

                                        if (me.getSkill(skillID, 0) < 1) {
                                            skillID = skillID2;
                                        }
                                    } else if (typeOfSorc === "cold") {
                                        skillID = 59;     // blizzard
                                        skillID2 = 45;    // ice blast

                                        if (me.getSkill(skillID, 0) < 1) {
                                            skillID = skillID2;
                                        }
                                    } else {
                                        skillID = skillID2 = 0;
                                    }

                                    Config.AttackSkill  = [skillID2, skillID, skillID2, skillID2, skillID2, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                            }
                        } else {
                            if (me.getSkill(38, 0) >= 1) {            //charged bolt
                                Config.AttackSkill  = Config.AttackSorcLightSkill;
                                Config.LowManaSkill = Config.LowManaSorcLightSkill;
                                Config.BeltColumn = ["hp", "mp", "mp", "rv"];
                            } else if (me.getSkill(36, 0) >= 1) {     //fire bolt
                                Config.AttackSkill  = Config.AttackSorcFireSkill;
                                Config.LowManaSkill = Config.LowManaSorcFireSkill;
                            } else if (me.getSkill(39, 0) >= 1) {     //ice bolt
                                Config.AttackSkill  = Config.AttackSorcColdSkill;
                                Config.LowManaSkill = Config.LowManaSorcColdSkill;
                            }
                        }

                        Config.CastStatic = 60;    // Cast static until the target is at designated life percent. 100 = disabled.
                        Config.StaticList = ["bloodraven", "griswold", "andariel", "summoner", "duriel", "mephisto", "diablo", "izual", "baal"];

                        if (typeOfSorc == "light") {
                            print("Auto ÿc4" + charClass + "ÿc0 ÿc9" + typeOfSorc + " attackÿc0");
                        } else if (typeOfSorc == "fire") {
                            print("Auto ÿc4" + charClass + "ÿc0 ÿc1" + typeOfSorc + " attackÿc0");
                        } else if (typeOfSorc == "cold") {
                            print("Auto ÿc4" + charClass + "ÿc0 ÿc3" + typeOfSorc + " attackÿc0");
                        }

                        break;
                    case "necromancer":
                        Config.SkipImmune      = ["magic"];
                        Config.AttackSkill     = Config.AttackNecSkill;
                        Config.LowManaSkill    = Config.LowManaNecSkill;
                        Config.Curse[0]        = 66;        // Boss curse. Use skill number or set to 0 to disable.
                        Config.Curse[1]        = 66;        // Other monsters curse. Use skill number or set to 0 to disable.
                        Config.ExplodeCorpses  = 74;        // Explode corpses. Use skill number or 0 to disable. 74 = Corpse Explosion, 83 = Poison Explosion
                        Config.Golem           = "clay";    // Golem. 0 or "None" = don't summon, 1 or "Clay" = Clay Golem, 2 or "Blood" = Blood Golem, 3 or "Fire" = Fire Golem
                        Config.Skeletons       = "max";     // Number of skeletons to raise. Set to "max" to auto detect, set to 0 to disable.
                        Config.SkeletonMages   = "max";     // Number of skeleton mages to raise. Set to "max" to auto detect, set to 0 to disable.
                        Config.Revives         = "max";     // Number of revives to raise. Set to "max" to auto detect, set to 0 to disable.
                        Config.PoisonNovaDelay = 2;         // Delay between two Poison Novas in seconds.
                        Config.ActiveSummon    = false;     // Raise dead between each attack. If false, it will raise after clearing a spot.
                        Config.ReviveUnstackable = true;    // Revive monsters that can move freely after you teleport.
                        Config.IronGolemChicken  = 30;      // Exit game if Iron Golem's life is less or equal to designated percent.
                        print("Auto ÿc4" + charClass + " attackÿc0");

                        break;
                    case "paladin":
                        if (me.charlvl <= 25) {
                            switch (me.charlvl) {
                                case 1:
                                    skillID = 0;
                                    skillID2 = 0;
                                    Config.AttackSkill  = [skillID, skillID, skillID2, skillID, skillID2, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                                case 2:
                                    skillID = 0;
                                    skillID2 = 98;    //might

                                    if (me.getSkill(skillID2, 0) < 1) {
                                        skillID2 = 0;
                                    }

                                    Config.AttackSkill  = [skillID, skillID, skillID2, skillID, skillID2, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                    skillID = 97;     //smite
                                    skillID2 = 98;    //might

                                    if (me.getSkill(skillID, 0) < 1) {
                                        skillID = 0;
                                    }

                                    if (me.getSkill(skillID2, 0) < 1) {
                                        skillID2 = 0;
                                    }

                                    Config.AttackSkill  = [skillID, skillID, skillID2, skillID, skillID2, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                                case 12:
                                case 13:
                                case 14:
                                case 15:
                                case 16:
                                case 17:
                                    skillID = 97;      //smite
                                    skillID2 = 108;    //blessed aim

                                    if (me.getSkill(skillID, 0) < 1) {
                                        skillID = 0;
                                    }

                                    if (me.getSkill(skillID2, 0) < 1) {
                                        skillID2 = 98; //might
                                    }

                                    Config.AttackSkill  = [skillID, skillID, skillID2, skillID, skillID2, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                                case 18:
                                case 19:
                                case 20:
                                case 21:
                                case 22:
                                case 23:
                                case 24:
                                case 25:
                                    skillID = 112;       //blessed hammer
                                    skillID2 = 113;      //concentration

                                    if (me.getSkill(skillID, 0) < 1) {
                                        skillID = 97;    //smite
                                    }

                                    if (me.getSkill(skillID2, 0) < 1) {
                                        skillID2 = 108;  //blessed aim
                                    }

                                    Config.AttackSkill  = [skillID, skillID, skillID2, skillID, skillID2, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                            }
                        } else {
                            Config.AttackSkill  = Config.AttackPallySkill;
                            Config.LowManaSkill = Config.LowManaPallySkill;
                        }

                        Config.SkipImmune   = ["magic"];
                        Config.AvoidDolls   = true;         // Try to attack dolls from a greater distance with hammerdins.
                        Config.Vigor        = true;         // Swith to Vigor when running
                        Config.Charge       = false;        // Use Charge when running
                        Config.Redemption   = [50, 50];     // Switch to Redemption after clearing an area if under designated life or mana. Format: [lifepercent, manapercent]
                        print("Auto ÿc4" + charClass + " attackÿc0");

                        break;
                    case "barbarian":
                        if (me.charlvl <= 25) {
                            switch (me.charlvl) {
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                    skillID = 126;       //bash
                                    skillID2 = 0;

                                    if (me.getSkill(skillID, 0) < 1) {
                                        skillID = 0;
                                    }

                                    Config.AttackSkill  = [skillID, skillID, 0, skillID, 0, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                                case 12:
                                case 13:
                                case 14:
                                case 15:
                                case 16:
                                case 17:
                                    skillID = 139;       //stun
                                    skillID2 = 0;

                                    if (me.getSkill(skillID, 0) < 1) {
                                        skillID = 126;   //bash
                                    }

                                    Config.AttackSkill  = [skillID, skillID, 0, skillID, 0, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                                case 18:
                                case 19:
                                case 20:
                                case 21:
                                case 22:
                                case 23:
                                case 24:
                                case 25:
                                    skillID = 144;       //concentrate
                                    skillID2 = 0;

                                    if (me.getSkill(skillID, 0) < 1) {
                                        skillID = 126;
                                    }

                                    Config.AttackSkill  = [skillID, skillID, 0, skillID, 0, 0, 0];
                                    Config.LowManaSkill = [0, 0];

                                    break;
                            }
                        } else {
                            Config.AttackSkill  = Config.AttackBarbSkill;
                            Config.LowManaSkill = Config.LowManaBarbSkill;
                        }

                        Config.SkipImmune   = [];
                        Config.FindItem       = false;      // Use Find Item skill on corpses after clearing.
                        Config.FindItemSwitch = false;      // Switch to non-primary slot when using Find Item skills
                        print("Auto ÿc4" + charClass + " attackÿc0");

                        break;
                    case "druid":
                        Config.SkipImmune   = [];
                        Config.AttackSkill  = Config.AttackDruidSkill;
                        Config.LowManaSkill = Config.LowManaDruidSkill;
                        Config.SummonRaven  = true;
                        Config.SummonAnimal = "Grizzly";        // 0 = disabled, 1 or "Spirit Wolf" = summon spirit wolf, 2 or "Dire Wolf" = summon dire wolf, 3 or "Grizzly" = summon grizzly
                        Config.SummonSpirit = "Oak Sage";       // 0 = disabled, 1 / "Oak Sage", 2 / "Heart of Wolverine", 3 / "Spirit of Barbs"
                        Config.SummonVine   = "Poison Creeper"; // 0 = disabled, 1 / "Poison Creeper", 2 / "Carrion Vine", 3 / "Solar Creeper"
                        print("Auto ÿc4" + charClass + " attackÿc0");

                        break;
                    case "assassin": 
                        Config.SkipImmune   = [];
                        Config.AttackSkill  = Config.AttackSinSkill;
                        Config.LowManaSkill = Config.LowManaSinSkill;
                        Config.UseTraps     = true;                      // Set to true to use traps
                        Config.Traps        = [271, 271, 271, 276, 276]; // Skill IDs for traps to be cast on all mosters except act bosses.
                        Config.BossTraps    = [271, 271, 271, 271, 271]; // Skill IDs for traps to be cast on act bosses.
                        Config.SummonShadow = "Master";                  // 0 = don't summon, 1 or "Warrior" = summon Shadow Warrior, 2 or "Master" = summon Shadow Master
                        Config.UseFade      = true;                      // Set to true to use Fade prebuff.
                        Config.UseBoS       = false;                     // Set to true to use Burst of Speed prebuff. TODO: Casting in town + UseFade compatibility
                        Config.UseVenom     = false;                     // Set to true to use Venom prebuff. Set to false if you don't have the skill and have Arachnid Mesh - it will cause connection drop otherwise.
                        Config.UseCloakofShadows = true;                 // Set to true to use Cloak of Shadows while fighting. Useful for blinding regular monsters/minions.
                        Config.AggressiveCloak   = false;                // Move into Cloak range or cast if already close
                        print("Auto ÿc4" + charClass + " attackÿc0");
                        break;
                }
            },

    //! SEND NOTIFICATIONS ============================================================
    notify: function (data) {
        let tries = 1;
        let response;
        if (Config.RogerThatTelegram.Active &&
            (Config.RogerThatTelegram.Notify.Trade || Config.RogerThatTelegram.Notify.HotIP || Config.RogerThatTelegram.Notify.DiabloClone)) {
                if (Config.RogerThatTelegram.Url === '' || Config.RogerThatTelegram.Token === '' || Config.RogerThatTelegram.Port === undefined) {
                    me.overhead("ÿc1ERROR:ÿc0 Headers are not configured.'");
                } else {
                    const HTTP = require('../libs/modules/HTTP');

                    print('ÿc2Sending msg: ÿc0ÿc9' + data.message + 'ÿc0 (code ÿc4' + data.code + 'ÿc0)');
                    while (tries <= 4) {
                        response = HTTP({
                            url: Config.RogerThatTelegram.Url + '/api/diablo/notify',
                            port: Config.RogerThatTelegram.Port,
                            method: 'POST',
                            headers: {
                                'Authorization': 'Bearer ' + Config.RogerThatTelegram.Token,
                                'Content-Type': 'application/json'
                            },
                            data: JSON.stringify(data)
                        });

                        if (response) {
                            break;
                        }

                        if (tries <= 3) {
                            print('Send msg retry ÿc1' + tries + 'ÿc0');
                            tries++;
                        } else {
                            break;
                        }
                    }
                    if (!response) {
                        print('ÿc1Failed to connect to ÿc0ÿc9' + Config.RogerThatTelegram.Url + 'ÿc0');
                    } else {
                        print('ÿc2Message delivered to ÿc0ÿc9' + Config.RogerThatTelegram.Url + 'ÿc0');
                    }
                }

        }
    }
};