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

    //! ITEMS INFO ====================================================================
        //+ Print items ------------------------------------------------------------
            printItems: function (items) {
                for (let i = 0; i < items.length; i++){
                    print("ÿc9" + items[i].classid + "ÿc0 "+ items[i].name + "ÿc9 Quality: ÿc0" + items[i].quality + "ÿc9 Location: ÿc0"+ items[i].location + "ÿc9 Item Type: ÿc0" + items[i].itemType)
                }
            },

        //+ Get items qty ----------------------------------------------------------
            getItemsQuantity: function (itemsArray) {
                let items = this.getProfileItems();
                let checkStatus = this.getItemsClassId(itemsArray);
                let status = {};
                let msg = "";
                let haveSomething = false;

                for (let i = 0; i < items.length; i++) {
                    if (checkStatus[items[i].classid] !== undefined && checkStatus[items[i].classid].qty >= 0) {
                        if (!status[checkStatus[items[i].classid].name]) {
                            status[checkStatus[items[i].classid].name] = 1;
                        } else {
                            status[checkStatus[items[i].classid].name] += 1;
                        }
                        haveSomething = true;
                    }
                }

                if (haveSomething) {
                    for (var item in status) {
                        msg += status[item] + "x " + item + " ";
                    }

                    say("I have: " + msg);
                } else {
                    me.overhead("Sorry! I'm poor!");
                }
            },

        //+ Get items id -----------------------------------------------------------
            getItemsClassId: function (itemsArray, qtyArray) {
                let dropObj = {};
                let itemCodes = [];
                const runes = {
                    el: 610,
                    eld: 611,
                    tir: 612,
                    nef: 613,
                    eth: 614,
                    ith: 615,
                    tal: 616,
                    ral: 617,
                    ort: 618,
                    thul: 619,
                    amn: 620,
                    sol: 621,
                    shael: 622,
                    dol: 623,
                    hel: 624,
                    io: 625,
                    lum: 626,
                    ko: 627,
                    fal: 628,
                    lem: 629,
                    pul: 630,
                    um: 631,
                    mal: 632,
                    ist: 633,
                    gul: 634,
                    vex: 635,
                    ohm: 636,
                    lo: 637,
                    sur: 638,
                    ber: 639,
                    jah: 640,
                    cham: 641,
                    zod: 642
                };
                const gems = {
                    camethyst: 557,
                    famethyst: 558,
                    amethyst: 559,
                    flamethyst: 560,
                    pamethyst: 561,
                    ctopaz: 562,
                    ftopaz: 563,
                    topaz: 564,
                    fltopaz: 565,
                    ptopaz: 566,
                    csapphire: 567,
                    fsapphire: 568,
                    sapphire: 569,
                    flsapphire: 570,
                    psapphire: 571,
                    cemerald: 572,
                    femerald: 573,
                    emerald: 574,
                    flemerald: 575,
                    pemerald: 576,
                    cruby: 577,
                    fruby: 578,
                    ruby: 579,
                    flruby: 580,
                    pruby: 581,
                    cdiamond: 582,
                    fdiamond: 583,
                    diamond: 584,
                    fldiamond: 585,
                    pdiamond: 586,
                    cskull: 597,
                    fskull: 598,
                    skull: 599,
                    flskull: 600,
                    pskull: 601
                }
                const codes = {
                    557: "camethyst",
                    558: "famethyst",
                    559: "amethyst",
                    560: "flamethyst",
                    561: "pamethyst",
                    562: "ctopaz",
                    563: "ftopaz",
                    564: "topaz",
                    565: "fltopaz",
                    566: "ptopaz",
                    567: "csapphire",
                    568: "fsapphire",
                    569: "sapphire",
                    570: "flsapphire",
                    571: "psapphire",
                    572: "cemerald",
                    573: "femerald",
                    574: "emerald",
                    575: "flemerald",
                    576: "pemerald",
                    577: "cruby",
                    578: "fruby",
                    579: "ruby",
                    580: "flruby",
                    581: "pruby",
                    582: "cdiamond",
                    583: "fdiamond",
                    584: "diamond",
                    585: "fldiamond",
                    586: "pdiamond",
                    597: "cskull",
                    598: "fskull",
                    599: "skull",
                    600: "flskull",
                    601: "pskul",
                    610: "el",
                    611: "eld",
                    612: "tir",
                    613: "nef",
                    614: "eth",
                    615: "ith",
                    616: "tal",
                    617: "ral",
                    618: "ort",
                    619: "thul",
                    620: "amn",
                    621: "sol",
                    622: "shael",
                    623: "dol",
                    624: "hel",
                    625: "io",
                    626: "lum",
                    627: "ko",
                    628: "fal",
                    629: "lem",
                    630: "pul",
                    631: "um",
                    632: "mal",
                    633: "ist",
                    634: "gul",
                    635: "vex",
                    636: "ohm",
                    637: "lo",
                    638: "sur",
                    639: "ber",
                    640: "jah",
                    641: "cham",
                    642: "zod",
                    647: "terror",
                    648: "hate",
                    649: "destruction",
                    650: "horn",
                    651: "eye",
                    652: "brain",
                    654: "blue",
                    655: "yellow",
                    656: "red",
                    657: "green"
                }

                for (let i = 0; i < itemsArray.length; i++) {
                    if (itemsArray[i] !== undefined) {
                        switch (itemsArray[i]) {
                            case "h":            // Hate key
                                dropObj[648] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "hate key"
                                };

                                break;
                            case "t":            // Terror key
                                dropObj[647] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "terror key"
                                };

                                break;
                            case "d":            // Destruction key
                                dropObj[649] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "destruction key"
                                };

                                break;
                            case "key":
                            case "keys":         // Keys
                                itemCodes = [647, 648, 649];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: codes[itemCodes[j]]
                                    };
                                }

                                break;
                            case "horn":         // Horn
                                dropObj[650] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "horn"
                                };

                                break;
                            case "eye":          // Eye
                                dropObj[651] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "eye"
                                };

                                break;
                            case "brain":        // Brain
                                dropObj[652] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "brain"
                                };

                                break;
                            case "organ":
                            case "organs":       // Organs
                                itemCodes = [650, 651, 652];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: codes[itemCodes[j]]
                                    };
                                }

                                break;
                            case "blue":
                            case "b":            // Blue essence
                                dropObj[654] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "blue"
                                };

                                break;
                            case "yellow":
                            case "y":            // Yellow essence
                                dropObj[655] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "yellow"
                                };

                                break;
                            case "red":
                            case "r":            // Red essence
                                dropObj[656] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "red"
                                };

                                break;
                            case "green":
                            case "g":            // Green essence
                                dropObj[657] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "green"
                                };

                                break;
                            case "ess":
                            case "essence":
                            case "essences":     // Essences
                                itemCodes = [654, 655, 656, 657];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: codes[itemCodes[j]]
                                    };
                                }

                                break;
                            case "helm":
                            case "helms":        // Helms
                                itemCodes = [306, 307, 308, 309, 310, 311, 312, 349, 352, 353, 354, 355, 356, 357, 358, 395, 399, 400, 401, 402, 403, 404, 405, 406, 407, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 465, 468, 470, 472, 473, 474, 475, 476, 477, 488, 493, 494, 495, 496, 497];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: "helm"
                                    };
                                }

                                break;
                            case "glove":
                            case "gloves":       // Gloves
                                itemCodes = [334, 335, 336, 337, 338, 380, 381, 382, 383, 384, 450, 451, 452, 453, 454];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: "glove"
                                    };
                                }

                                break;
                            case "shield":
                            case "shields":      // Shields
                                itemCodes = [328, 329, 330, 331, 332, 333, 350, 351, 374, 375, 376, 377, 378, 379, 396, 397, 410, 411, 412, 444, 445, 446, 447, 448, 449, 466, 467, 480, 481, 482, 486, 487, 500, 501, 502, 506, 507];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: "shield"
                                    };
                                }

                                break;
                            case "armor":
                            case "armors":       // Armors
                                itemCodes = [313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 334, 348, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: "armor"
                                    };
                                }

                                break;
                            case "belt":
                            case "belts":        // Belts
                                itemCodes = [344, 345, 346, 347, 348, 390, 391, 392, 393, 394, 460, 461, 462, 463, 464];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: "belt"
                                    };
                                }

                                break;
                            case "boot":
                            case "boots":        // Boots
                                itemCodes = [339, 340, 341, 342, 343, 385, 386, 387, 388, 389, 455, 456, 457, 458, 459];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: "boot"
                                    };
                                }

                                break;
                            case "token":
                            case "tokens":       // Tokens
                                dropObj[653] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "token"
                                };

                                break;
                            case "rune":
                            case "runes":        // All runes
                                for (let j = 610 ; j <= 642 ; j++) {
                                    dropObj[j] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: codes[j]
                                    };
                                }

                                break;
                            case "lr":
                            case "lrs":          // Low runes
                                for (let j = 610 ; j <= 634 ; j++) {
                                    dropObj[j] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: codes[j]
                                    };
                                }

                                break;
                            case "hr":
                            case "hrs":          // High runes
                                for (let j = 635 ; j <= 642 ; j++) {
                                    dropObj[j] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: codes[j]
                                    };
                                }

                                break;
                            case "gem":
                            case "gems":         // Gems
                                for (let j = 557 ; j <= 586 ; j++) {
                                    dropObj[j] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: codes[j]
                                    };
                                }

                                for (let j = 597 ; j <= 601 ; j++) {
                                    dropObj[j] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: codes[j]
                                    };
                                }

                                break;
                            case "sc":
                            case "scs":          // Small charms and large charms
                                itemCodes = [603, 604];
                                for (let j = 0; j < itemCodes.length; j++) {
                                    dropObj[itemCodes[j]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: "sc"
                                    };
                                }

                                break;
                            case "gc":
                            case "gcs":          // Grand charms
                                dropObj[605] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "gc"
                                };

                                break;
                            case "ring":
                            case "rings":        // Rings
                                dropObj[522] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "ring"
                                };

                                break;
                            case "amulet":
                            case "amulets":      // Amulets
                                dropObj[520] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "amulet"
                                };

                                break;
                            case "jewel":
                            case "jewels":       // Jewels
                                dropObj[643] = {
                                    qty: qtyArray ? qtyArray[i] : 0,
                                    name: "jewel"
                                };

                                break;
                            case "item":
                            case "items":        // Drop all items
                                Config.CainID.MinGold = 100;
                                Town.identify();
                                return this.dropProfileItems();

                            case "socket":
                            case "sockets":      // Drop socket items
                                return this.dropProfileItems("socket");

                            default:             // Drop runes
                                if (runes[itemsArray[i]]) {
                                    dropObj[runes[itemsArray[i]]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: runes[itemsArray[i]]
                                    };
                                } else if (gems[itemsArray[i]]) {
                                    dropObj[gems[itemsArray[i]]] = {
                                        qty: qtyArray ? qtyArray[i] : 0,
                                        name: gems[itemsArray[i]]
                                    };
                                }

                                break;
                        }
                    }
                }

                return dropObj;
            },

    //! DROP ITEMS ====================================================================
        //+ Drop items -------------------------------------------------------------
            dropProfileItems: function (mode) {
                let items;

                switch (mode) {
                    case 'trash':
                        items = this.getProfileItems('trash');

                        break;
                    case 'socket':
                        items = this.getProfileItems('socket');

                        break;
                    default:
                        items = this.getProfileItems();
                        items = items.concat(this.getProfileItems('trash'));

                        break;
                }

                if (!Town.openStash()) {
                    return false;
                }

                if (!items || items.length === 0) {
                    return false;
                }

                for (let i = 0; i < items.length; i++) {
                    items[i].drop();
                }

                return true;
            },

            dropMultipleItems: function (itemsArray, qtyArray) {
                let dropItems;
                const items = this.getProfileItems();

                if (!Town.openStash()) {
                    return false;
                }

                if (!items || items.length === 0) {
                    return false;
                }

                dropItems = this.getItemsClassId(itemsArray, qtyArray);

                for (let i=0; i < items.length; i++) {
                    if (dropItems[items[i].classid] && dropItems[items[i].classid].qty >  0) {
                        items[i].drop();
                        dropItems[items[i].classid].qty -= 1;
                    } else if (dropItems[items[i].classid] && dropItems[items[i].classid].qty === -1) {
                        items[i].drop();
                    }
                }

                return true;
            },

        //+ Get profile items ------------------------------------------------------
            getProfileItems: function (mode) {
                let item = me.findItems(-1, 0),
                    items = [];

                for (let i = 0; i < item.length; i++) {
                    if (item[i].classid !== 549 &&                            // Don't drop Horadric Cube
                        (item[i].classid !== 603 || item[i].quality !== 7) && // Don't drop Annihilus
                        (item[i].classid !== 604 || item[i].quality !== 7) && // Don't drop Hellfire Torch
                        !Storage.Inventory.IsLocked(item[i], Config.Inventory) && // Don't drop item in locked slots
                        ((!TorchSystem.getFarmers() && !TorchSystem.isFarmer()) || [647, 648, 649].indexOf(item[i].classid) === -1)) { // Don't drop Keys if part of TorchSystem
                            if ((!this.cubingIngredient(item[i]) && !this.runewordIngredient(item[i]) && !this.utilityIngredient(item[i]))) { // Don't drop Excluded item or Runeword/Cubing/CraftingSystem ingredients
                                switch (mode) {
                                    case 'trash':
                                        if ([1, 2, 3, 4, 5].indexOf(this.checkItem(item[i]).result) === -1) {
                                            items.push(copyUnit(item[i]));
                                        }

                                        break;
                                    case 'socket':
                                        if (item[i].itemType && Town.ignoredItemTypes.indexOf(item[i].itemType) === -1 && [2, 3].indexOf(item[i].quality) >= 0) {
                                            items.push(copyUnit(item[i]));
                                        }

                                        break;
                                    default:
                                        if (item[i].itemType && Town.ignoredItemTypes.indexOf(item[i].itemType) === -1 && this.checkItem(item[i]).result > 0) {
                                            items.push(copyUnit(item[i]));
                                        }

                                        break;
                                }

                            }
                    }
                }

                return items;
            },

        //+ Cube ingredients -------------------------------------------------------
            utilityIngredient: function (item) {
                return CraftingSystem.validGids.indexOf(item.gid) > -1;
            },

        //+ Check if an item is a cubing ingredient --------------------------------
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

        //+ Drop anni/torch --------------------------------------------------------
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
        ignoreLog: [4, 5, 6, 22, 41, 76, 77, 78, 79, 80, 81],

        //+ Check items with pickit list -------------------------------------------
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

        //+ Pick multiple items ----------------------------------------------------
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

        //+ Pick item --------------------------------------------------------------
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

        //+ Can pick it? -----------------------------------------------------------
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

        //+ Check belt -------------------------------------------------------------
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

        //+ Sort items by distance for general item pickup -------------------------
            sortItems: function (unitA, unitB) {
                return getDistance(me, unitA) - getDistance(me, unitB);
            },

        //+ Sort items by distance for general item pickup - fast pick -------------
            sortFastPickItems: function (unitA, unitB) {
                if (unitA.itemType === 74 || unitA.quality === 7) {
                    return -1;
                }

                if (unitB.itemType === 74 || unitB.quality === 7) {
                    return 1;
                }

                return getDistance(me, unitA) - getDistance(me, unitB);
            },

        //+ Fast pickit ------------------------------------------------------------
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
                for (let i = 0; i < Config.RogerThatInventory1.length; i++) {
                    if (me.name === Config.RogerThatInventory1[i]) {
                        print("Inventory ÿc9Oneÿc0");
                        Config.Inventory[0] = Config.Inventory1[0];
                        Config.Inventory[1] = Config.Inventory1[1];
                        Config.Inventory[2] = Config.Inventory1[2];
                        Config.Inventory[3] = Config.Inventory1[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0; i < Config.RogerThatInventory2.length; i++) {
                    if (me.name === Config.RogerThatInventory2[i]) {
                        print("Inventory ÿc9Twoÿc0");
                        Config.Inventory[0] = Config.Inventory2[0];
                        Config.Inventory[1] = Config.Inventory2[1];
                        Config.Inventory[2] = Config.Inventory2[2];
                        Config.Inventory[3] = Config.Inventory2[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0; i < Config.RogerThatInventory3.length; i++) {
                    if (me.name === Config.RogerThatInventory3[i]) {
                        print("Inventory ÿc9Threeÿc0");
                        Config.Inventory[0] = Config.Inventory3[0];
                        Config.Inventory[1] = Config.Inventory3[1];
                        Config.Inventory[2] = Config.Inventory3[2];
                        Config.Inventory[3] = Config.Inventory3[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0; i < Config.RogerThatInventory4.length; i++) {
                    if (me.name === Config.RogerThatInventory4[i]) {
                        print("Inventory ÿc9Fourÿc0");
                        Config.Inventory[0] = Config.Inventory4[0];
                        Config.Inventory[1] = Config.Inventory4[1];
                        Config.Inventory[2] = Config.Inventory4[2];
                        Config.Inventory[3] = Config.Inventory4[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0; i < Config.RogerThatInventory5.length; i++) {
                    if (me.name == Config.RogerThatInventory5[i]) {
                        print("Inventory ÿc9Fiveÿc0");
                        Config.Inventory[0] = Config.Inventory5[0];
                        Config.Inventory[1] = Config.Inventory5[1];
                        Config.Inventory[2] = Config.Inventory5[2];
                        Config.Inventory[3] = Config.Inventory5[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0; i < Config.RogerThatInventory6.length; i++) {
                    if (me.name == Config.RogerThatInventory6[i]) {
                        print("Inventory ÿc9Sixÿc0");
                        Config.Inventory[0] = Config.Inventory6[0];
                        Config.Inventory[1] = Config.Inventory6[1];
                        Config.Inventory[2] = Config.Inventory6[2];
                        Config.Inventory[3] = Config.Inventory6[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0; i < Config.RogerThatInventory7.length; i++) {
                    if (me.name == Config.RogerThatInventory7[i]) {
                        print("Inventory ÿc9Sevenÿc0");
                        Config.Inventory[0] = Config.Inventory7[0];
                        Config.Inventory[1] = Config.Inventory7[1];
                        Config.Inventory[2] = Config.Inventory7[2];
                        Config.Inventory[3] = Config.Inventory7[3];
                        this.printInventory();
                        return true;
                    }
                }

                for (let i = 0; i < Config.RogerThatInventory8.length; i++) {
                    if (me.name == Config.RogerThatInventory8[i]) {
                        print("Inventory ÿc9Eightÿc0");
                        Config.Inventory[0] = Config.Inventory8[0];
                        Config.Inventory[1] = Config.Inventory8[1];
                        Config.Inventory[2] = Config.Inventory8[2];
                        Config.Inventory[3] = Config.Inventory8[3];
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
            useSkill: function (skillsOrder) {
                for (let i = 0; i < skillsOrder.length; i++) {
                    if (skillsOrder[i] !== undefined && me.getSkill(skillsOrder[i], 0)) {
                        return skillsOrder[i];
                    }
                }

                return 0;
            },

            updateAttack: function () {
                //- This function is almost like an auto build, as you lvl the attack configuration is updated, the function always checks if you have the skill point, otherwise he uses a lower skill
                let classes = ["amazon", "sorceress", "necromancer", "paladin", "barbarian", "druid", "assassin"],
                    charClass = classes[me.classid],
                    typeOfAmazon,
                    typeOfSorc,
                    typeOfNecro,
                    typeOfPally,
                    typeOfDruid,
                    skill1,
                    skill2;

                if (me.ingame && me.gameReady) {
                    switch (charClass) {
                        case "amazon":
                            if (me.getSkill(6, 0) >= 1) {
                                typeOfAmazon = "bow";
                                print("Auto ÿc4" + charClass + " ÿc1" + typeOfAmazon + " attack");
                                Config.SkipImmune = ["physical"];
                            } else {
                                typeOfAmazon = "java";
                                print("Auto ÿc4" + charClass + " ÿc9" + typeOfAmazon + " attack");
                                Config.SkipImmune = ["lightning"];
                            }

                            if (me.charlvl <= 30) {
                                switch (typeOfAmazon) {
                                    case "java":
                                        skill1 = this.useSkill([24, 14, 10]); // charged strike > power strike > jab
                                        skill2 = skill1;

                                        break;
                                    case "bow":
                                        skill1 = this.useSkill([31, 26, 12, 6]); // freezing arrow > strafe > multiple shot > magic arrow
                                        skill2 = skill1;

                                        break;
                                }

                                Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                            } else {
                                Config.AttackSkill = Config.AttackZonSkill;
                                Config.LowManaSkill = Config.LowManaZonSkill;
                                Config.UpdateSkill = false;
                            }

                            Config.LightningFuryDelay = 10;   // Lightning fury interval in seconds. LF is treated as timed skill.
                            Config.SummonValkyrie = true; // Summon Valkyrie

                            break;
                        case "sorceress":
                            if (me.getSkill(36, 0) >= 1) {
                                typeOfSorc = "fire";
                                Config.SkipImmune = ["fire"];
                                print("Auto ÿc4" + charClass + " ÿc1" + typeOfSorc + " attack");
                            } else if (me.getSkill(39, 0) >= 1) {
                                typeOfSorc = "cold";
                                Config.SkipImmune = ["cold"];
                                print("Auto ÿc4" + charClass + " ÿc3" + typeOfSorc + " attack");
                            } else if (me.getSkill(38, 0) >= 1) {
                                typeOfSorc = "light";
                                Config.SkipImmune = ["lightning"];
                                print("Auto ÿc4" + charClass + " ÿc9" + typeOfSorc + " attack");
                            } else {
                                typeOfSorc = "";
                                print("Auto ÿc4" + charClass + "ÿc1  undefined type of sorc");
                            }

                            if (me.charlvl == 1) {
                                if (me.getSkill(36, 1, false) >= 1) { // fire bolt
                                    skill1 = 36;
                                } else {
                                    skill1 = 0;
                                }

                                skill2 = skill1;
                                Config.AttackSkill = [skill2, skill2, skill1, skill2, skill1, 0, 0];
                                Config.LowManaSkill = [0, 0];
                            } else if (me.charlvl <= 30) {
                                switch (typeOfSorc) {
                                    case "light":
                                        skill1 = this.useSkill([18, 49, 38]); // chain lightning > lightning > charged bolt
                                        skill2 = this.useSkill([49, 18, 38]); // lightning > chain lightning > charged bolt

                                        break;
                                    case "fire":
                                        skill1 = this.useSkill([47, 36]);     // fire ball > fire bolt
                                        skill2 = this.useSkill([56, 47, 36]); // meteor > fire ball > fire bolt

                                        break;
                                    case "cold":
                                        skill1 = this.useSkill([55, 45, 39]); // glacial spike > ice blast > ice bolt
                                        skill2 = this.useSkill([59, 45, 39]); // blizzard > ice blast > ice bolt

                                        break;
                                }

                                Config.AttackSkill = [skill2, skill2, skill1, skill2, skill1, 0, 0];
                                Config.LowManaSkill = [0, 0];

                            } else {
                                switch (typeOfSorc) {
                                    case "light":
                                        Config.AttackSkill = Config.AttackSorcLightSkill;
                                        Config.LowManaSkill = Config.LowManaSorcLightSkill;

                                        break;
                                    case "fire":
                                        Config.AttackSkill = Config.AttackSorcFireSkill;
                                        Config.LowManaSkill = Config.LowManaSorcFireSkill;

                                        break;
                                    case "cold":
                                        Config.AttackSkill = Config.AttackSorcColdSkill;
                                        Config.LowManaSkill = Config.LowManaSorcColdSkill;

                                        break;
                                    default:
                                        Config.AttackSkill = [0, 0, 0, 0, 0, 0, 0];
                                        Config.LowManaSkill = [0, 0];

                                        break;
                                }

                                Config.UpdateSkill = false;
                            }

                            Config.CastStatic = 60;    // Cast static until the target is at designated life percent. 100 = disabled.
                            Config.StaticList = ["bloodraven", "griswold", "andariel", "summoner", "duriel", "mephisto", "diablo", "izual", "baal"];

                            break;
                        case "necromancer":
                            if (me.getSkill(67, 0) >= 1) {
                                typeOfNecro = "spear";
                                print("Auto ÿc4" + charClass + " ÿc3" + typeOfNecro + " attack");
                                Config.SkipImmune = ["magic"];
                            } else {
                                typeOfNecro = "summoning";
                                print("Auto ÿc4" + charClass + " ÿc1" + typeOfNecro + " attack");
                            }

                            if (me.charlvl <= 30) {
                                switch (typeOfNecro) {
                                    case "summoning":
                                        skill1 = 0;
                                        skill2 = 0;

                                        break;
                                    case "spear":
                                        skill1 = this.useSkill([84, 67]); // bone spear > teeth
                                        skill2 = skill1;

                                        break;
                                }

                                Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                            } else {
                                Config.AttackSkill = Config.AttackNecSkill;
                                Config.LowManaSkill = Config.LowManaNecSkill;
                                Config.UpdateSkill = false;
                            }

                            Config.Curse[0] = 66;        // Boss curse. Use skill number or set to 0 to disable.
                            Config.Curse[1] = 66;        // Other monsters curse. Use skill number or set to 0 to disable.
                            Config.ExplodeCorpses = 74;        // Explode corpses. Use skill number or 0 to disable. 74 = Corpse Explosion, 83 = Poison Explosion
                            Config.Golem = "Clay";    // Golem. 0 or "None" = don't summon, 1 or "Clay" = Clay Golem, 2 or "Blood" = Blood Golem, 3 or "Fire" = Fire Golem
                            Config.Skeletons = "max";     // Number of skeletons to raise. Set to "max" to auto detect, set to 0 to disable.
                            Config.SkeletonMages = "max";     // Number of skeleton mages to raise. Set to "max" to auto detect, set to 0 to disable.
                            Config.Revives = "max";     // Number of revives to raise. Set to "max" to auto detect, set to 0 to disable.
                            Config.PoisonNovaDelay = 2;         // Delay between two Poison Novas in seconds.
                            Config.ActiveSummon = false;     // Raise dead between each attack. If false, it will raise after clearing a spot.
                            Config.ReviveUnstackable = true;    // Revive monsters that can move freely after you teleport.
                            Config.IronGolemChicken = 30;      // Exit game if Iron Golem's life is less or equal to designated percent.

                            break;
                        case "paladin":
                            if (me.getSkill(103, 0) >= 1) {
                                typeOfPally = "foh";
                                print("Auto ÿc4" + charClass + " ÿc9" + typeOfPally + " attack");
                                Config.SkipImmune = ["lightning"];
                            } else {
                                typeOfPally = "hammer";
                                print("Auto ÿc4" + charClass + " ÿc3" + typeOfPally + " attack");
                                Config.SkipImmune = ["magic"];
                            }

                            if (me.charlvl <= 30) {
                                switch (typeOfPally) {
                                    case "foh":
                                        skill1 = this.useSkill([121, 116, 111, 106, 96, 97]); // foh > conversion > vengeance > zeal > sacrifice > smite
                                        skill2 = this.useSkill([123, 119, 114, 103, 98]); // conviction > sanctuary > holy freeze > thorns > might
                                        Config.Vigor = true;  // Swith to Vigor when running
                                        Config.Charge = true;  // Use Charge when running

                                        break;
                                    case "hammer":
                                        skill1 = this.useSkill([112, 97]); // blessed hammer > smite
                                        skill2 = this.useSkill([113, 98]); // concentration > might
                                        Config.Vigor = true;  // Swith to Vigor when running
                                        Config.Charge = false; // Use Charge when running

                                        break;
                                }

                                Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                            } else {
                                Config.AttackSkill = Config.AttackPallySkill;
                                Config.LowManaSkill = Config.LowManaPallySkill;
                                Config.UpdateSkill = false;
                            }

                            Config.AvoidDolls = true;         // Try to attack dolls from a greater distance with hammerdins.
                            Config.Redemption = [50, 50];     // Switch to Redemption after clearing an area if under designated life or mana. Format: [lifepercent, manapercent]

                            break;
                        case "barbarian":
                            if (me.charlvl <= 30) {
                                skill1 = this.useSkill([151, 144, 139, 126]); // whirlwind > concentrate > stun > bash
                                skill2 = this.useSkill([132]); // leap

                                Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                                Config.LowManaSkill = [0, 0];
                            } else {
                                Config.AttackSkill = Config.AttackBarbSkill;
                                Config.LowManaSkill = Config.LowManaBarbSkill;
                                Config.UpdateSkill = false;
                            }

                            Config.SkipImmune = ["physical"];
                            Config.FindItem = false;      // Use Find Item skill on corpses after clearing.
                            Config.FindItemSwitch = false;      // Switch to non-primary slot when using Find Item skills
                            print("Auto ÿc4" + charClass + " ÿc1 attack");

                            break;
                        case "druid":
                            if (me.getSkill(223, 0) >= 1) {
                                typeOfDruid = "wolf";
                                print("Auto ÿc4" + charClass + " ÿc1" + typeOfDruid + " attack");
                                Config.Wereform = 1;
                            } else {
                                typeOfDruid = "tornado";
                                print("Auto ÿc4" + charClass + " ÿc3" + typeOfDruid + " attack");
                            }

                            if (me.charlvl <= 30) {

                                switch (typeOfDruid) {
                                    case "wolf":
                                        skill1 = this.useSkill([248, 232]); // fury > feral rage
                                        skill2 = skill1;

                                        break;
                                    case "tornado":
                                        skill1 = this.useSkill([245, 240]); // tornado > twister
                                        skill2 = skill1;
                                        break;
                                }

                                Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                            } else {
                                Config.AttackSkill = Config.AttackDruidSkill;
                                Config.LowManaSkill = Config.LowManaDruidSkill;
                                Config.UpdateSkill = false;
                            }

                            Config.SkipImmune = ["physical"];
                            Config.SummonRaven = true;
                            Config.SummonAnimal = "Grizzly";        // 0 = disabled, 1 or "Spirit Wolf" = summon spirit wolf, 2 or "Dire Wolf" = summon dire wolf, 3 or "Grizzly" = summon grizzly
                            Config.SummonSpirit = "Oak Sage";       // 0 = disabled, 1 / "Oak Sage", 2 / "Heart of Wolverine", 3 / "Spirit of Barbs"
                            Config.SummonVine = "Poison Creeper"; // 0 = disabled, 1 / "Poison Creeper", 2 / "Carrion Vine", 3 / "Solar Creeper"

                            break;
                        case "assassin":
                            if (me.charlvl <= 30) {
                                skill1 = this.useSkill([]);
                                skill2 = skill1;
                                Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                            } else {
                                Config.AttackSkill = Config.AttackSinSkill;
                                Config.LowManaSkill = Config.LowManaSinSkill;
                                Config.UpdateSkill = false;
                            }

                            Config.SkipImmune = ["lightning"];
                            Config.UseTraps = true;                      // Set to true to use traps
                            Config.Traps = [271, 271, 271, 276, 276]; // Skill IDs for traps to be cast on all mosters except act bosses.
                            Config.BossTraps = [271, 271, 271, 271, 271]; // Skill IDs for traps to be cast on act bosses.
                            Config.SummonShadow = "Master";                  // 0 = don't summon, 1 or "Warrior" = summon Shadow Warrior, 2 or "Master" = summon Shadow Master
                            Config.UseFade = true;                      // Set to true to use Fade prebuff.
                            Config.UseBoS = false;                     // Set to true to use Burst of Speed prebuff.
                            Config.UseVenom = false;                     // Set to true to use Venom prebuff. Set to false if you don't have the skill and have Arachnid Mesh - it will cause connection drop otherwise.
                            Config.UseCloakofShadows = true;                 // Set to true to use Cloak of Shadows while fighting. Useful for blinding regular monsters/minions.
                            Config.AggressiveCloak = false;                // Move into Cloak range or cast if already close
                            print("Auto ÿc4" + charClass + " ÿc9 attack");

                            break;
                    }

                    // print("Attack: " + JSON.stringify(Config.AttackSkill));
                    // print("Low Mana Attack: " + JSON.stringify(Config.LowManaSkill));
                    return true;
                }

                return false
            },

    //! SEND NOTIFICATIONS ============================================================
        notify: function (data) {
            let tries = 1;
            let response;

            if (Config.RogerThatTelegram.Active &&
                (Config.RogerThatTelegram.Notify.Trade || Config.RogerThatTelegram.Notify.HotIP || Config.RogerThatTelegram.Notify.DiabloClone)) {
                    if (Config.RogerThatTelegram.Url === '' || Config.RogerThatTelegram.Email === '' || Config.RogerThatTelegram.Password === '') {
                        me.overhead("ÿc1ERROR:ÿc0 Headers are not configured.");
                    } else {
                        const HTTP = require("../libs/modules/HTTP");

                        print("ÿc2Sending msg: ÿc0ÿc9" + data.message + "ÿc0 (code ÿc4" + data.code + "ÿc0)");

                        while (tries <= 4) {
                            try {
                                data.email = Config.RogerThatTelegram.Email;
                                data.password = Config.RogerThatTelegram.Password;
                                response = HTTP({
                                    url: Config.RogerThatTelegram.Url + "/api/diablo/notify",
                                    method: "POST",
                                    headers: {
                                        'Content-Type': "application/json"
                                    },
                                    data: JSON.stringify(data)
                                });
                            } catch (error) {
                                print(JSON.stringify(error, undefined, 3));
                            }

                            if (response) {
                                break;
                            }

                            if (tries <= 3) {
                                print("Send msg retry ÿc1" + tries);
                                tries++;
                            } else {
                                break;
                            }
                        }

                        if (!response) {
                            print("ÿc1Failed to connect to ÿc9" + Config.RogerThatTelegram.Url);
                            me.overhead("ÿc1!");
                        } else {
                            print("ÿc2Message delivered to ÿc9" + Config.RogerThatTelegram.Url);
                            response.then((data) => {
                                const msgArray = data.split(/\r?\n/);
                                print("ÿc2Server response: ÿc9 " + msgArray[msgArray.length - 1]);
                                // me.overhead("ÿc2" + msgArray[msgArray.length-1]);
                            })
                        }
                    }

            }
        }
};