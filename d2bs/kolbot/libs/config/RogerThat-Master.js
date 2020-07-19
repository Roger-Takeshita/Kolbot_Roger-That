//! Generic
//? ██████╗  ██████╗  ██████╗ ███████╗██████╗       ████████╗██╗  ██╗ █████╗ ████████╗    ███╗   ███╗ █████╗ ███████╗████████╗███████╗██████╗
//? ██╔══██╗██╔═══██╗██╔════╝ ██╔════╝██╔══██╗      ╚══██╔══╝██║  ██║██╔══██╗╚══██╔══╝    ████╗ ████║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗
//? ██████╔╝██║   ██║██║  ███╗█████╗  ██████╔╝█████╗   ██║   ███████║███████║   ██║       ██╔████╔██║███████║███████╗   ██║   █████╗  ██████╔╝
//? ██╔══██╗██║   ██║██║   ██║██╔══╝  ██╔══██╗╚════╝   ██║   ██╔══██║██╔══██║   ██║       ██║╚██╔╝██║██╔══██║╚════██║   ██║   ██╔══╝  ██╔══██╗
//? ██║  ██║╚██████╔╝╚██████╔╝███████╗██║  ██║         ██║   ██║  ██║██║  ██║   ██║       ██║ ╚═╝ ██║██║  ██║███████║   ██║   ███████╗██║  ██║
//? ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝         ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝

function LoadConfig() {
   //! FOLLOW LEADER -------------------------------------------------------------------
      Config.Leader   =  "";
      Config.QuitList = [""];
      Config.QuitListMode = 0;
      Config.QuitListDelay = [1, 10];
   //! ROGER-THAT ----------------------------------------------------------------------
      Config.RogerThatInventoryFlag = true;
         Config.RogerThatInventory1 = ["TMFLeader"];
         Config.RogerThatInventory2 = ["TMFSorc-I"];
         Config.RogerThatInventory3 = ["TMFSorc-II"];
         Config.RogerThatInventory4 = ["TMFSorc-III"];
         Config.RogerThatInventory5 = ["TMFSorc-IV"];
         Config.RogerThatInventory6 = ["TMFSorc-V"];
         Config.RogerThatInventory7 = ["TMFSorc-VI"];
         Config.RogerThatInventory8 = ["TMFSorc-VII"];
   //! SCRIPTS -------------------------------------------------------------------------
      Scripts.RogerThat = true;
   //! INVENTORY SETTINGS --------------------------------------------------------------
      //+ Inventory 1 ---------------------------------------------------------------
         Config.Inventory1[0]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory1[1]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory1[2]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory1[3]       = [1,1,1,1,1,1,0,0,0,0];
      //+ Inventory 2 ---------------------------------------------------------------
         Config.Inventory2[0]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory2[1]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory2[2]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory2[3]       = [1,1,1,1,1,1,0,0,0,0];
      //+ Inventory 3 ---------------------------------------------------------------
         Config.Inventory3[0]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory3[1]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory3[2]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory3[3]       = [1,1,1,1,1,1,0,0,0,0];
      //+ Inventory 4 ---------------------------------------------------------------
         Config.Inventory4[0]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory4[1]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory4[2]       = [1,1,1,1,1,1,0,0,0,0];
         Config.Inventory4[3]       = [1,1,1,1,1,1,0,0,0,0];
      //+ Inventory 5 ---------------------------------------------------------------
         Config.Inventory5[0]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory5[1]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory5[2]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory5[3]       = [0,0,0,0,0,0,0,0,0,0];
      //+ Inventory 6 ---------------------------------------------------------------
         Config.Inventory6[0]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory6[1]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory6[2]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory6[3]       = [0,0,0,0,0,0,0,0,0,0];
      //+ Inventory 7 ---------------------------------------------------------------
         Config.Inventory7[0]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory7[1]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory7[2]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory7[3]       = [0,0,0,0,0,0,0,0,0,0];
      //+ Inventory 8 ---------------------------------------------------------------
         Config.Inventory8[0]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory8[1]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory8[2]       = [0,0,0,0,0,0,0,0,0,0];
         Config.Inventory8[3]       = [0,0,0,0,0,0,0,0,0,0];
      //+ Generic Inventory ---------------------------------------------------------
         Config.InventoryGeneric[0] = [1,1,1,1,1,1,1,1,1,1];
         Config.InventoryGeneric[1] = [1,1,1,1,1,1,1,1,1,1];
         Config.InventoryGeneric[2] = [1,1,1,1,1,1,1,1,1,1];
         Config.InventoryGeneric[3] = [1,1,1,1,1,1,1,1,1,1];

      Config.BeltColumn   = ["hp", "mp", "mp", "rv"];
      Config.MinColumn    = [3, 3, 3, 0];
      Config.StashGold    = 200000;
   //! TOWN SETTINGS / POTION SETTINGS / CHICKEN SETTINGS ------------------------------
      //+ Town settings -------------------------------------------------------------
         Config.HealHP       = 90;                       // Go to a healer if under designated percent of life.
         Config.HealMP       =  0;                       // Go to a healer if under designated percent of mana.
         Config.HealStatus   = false;                    // Go to a healer if poisoned or cursed
         Config.UseMerc      = false;                    // Use merc. This is ignored and always false in d2classic.
         Config.MercWatch    = false;                    // Instant merc revive during battle.
      //+ Potion settings -----------------------------------------------------------
         Config.UseHP        = 85;                       // Drink a healing potion if life is under designated percent.
         Config.UseRejuvHP   = 65;                       // Drink a rejuvenation potion if life is under designated percent.
         Config.UseMP        = 50;                       // Drink a mana potion if mana is under designated percent.
         Config.UseMercHP    = 85;                       // Give a healing potion to your merc if his/her life is under designated percent.
         Config.UseMercRejuv = 50;                       // Give a rejuvenation potion to your merc if his/her life is under designated percent.
         Config.HPBuffer     =  0;                       // Number of healing potions to keep in inventory.
         Config.MPBuffer     =  0;                       // Number of mana potions to keep in inventory.
         Config.RejuvBuffer  =  0;                       // Number of rejuvenation potions to keep in inventory.
         Config.TownHP       = 55;                       // Go to town if life is under designated percent.
         Config.TownMP       = 15;                       // Go to town if mana is under designated percent.
         Config.GoToTownHP   = false;                    // Go to town if out of healing potions, use with RogerThat-Master (only)
         Config.GoToTownMP   = false;                    // Go to town if out of mana potions, use with RogerThat-Master (only)
      //+ Chicken settings ----------------------------------------------------------
         Config.LifeChicken  = 35;                       // Exit game if life is less or equal to designated percent.
         Config.ManaChicken  =  0;                       // Exit game if mana is less or equal to designated percent.
         Config.MercChicken  =  0;                       // Exit game if merc's life is less or equal to designated percent.
         Config.PingQuit     = [{Ping: 0, Duration: 0}]; // Quit if ping is over the given value for over the given time period in seconds.
   //! PICK LIST -----------------------------------------------------------------------
      // Config.PickitFiles.push("w-bot1.nip");
      // Config.PickitFiles.push("w-bot2.nip");
      // Config.PickitFiles.push("w-bot3.nip");
      // Config.PickitFiles.push("w-bot4.nip");
      Config.PickitFiles.push("w-RogerThat-Mule.nip");
      // Config.PickitFiles.push("w-potions.nip");
      Config.PickitFiles.push("w-RogerThatEarlyLadder.nip");
      Config.PickitFiles.push("w-RogerThatMidLadder.nip");
      Config.PickitFiles.push("w-RogerThatEndLadder.nip");
      Config.PickitFiles.push("w-RogerThat.nip");
      Config.PickitFiles.push("w-LLD.nip");
      Config.PickRange = 40;
      Config.FastPick  = true;
   //! MANUAL PLAY / OPEN CHEST --------------------------------------------------------
      Config.ManualPlayPick = false;
      Config.OpenChests = false;                         // Open chests. Controls key buying. true = open only chests, 2 = open everything body, rocks...
      Config.AutoMap = false;                            // Set to true to open automap at the beginning of the game.
      Config.UpdateSkill = true;                         // Update skill manually while lvling up to lvl 30, 31+ will use attack config
   //! GENERAL CONFIG ------------------------------------------------------------------
      Config.MinGameTime = 0;                            // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
      Config.MaxGameTime = 0;                            // Maximum game time in seconds. Quit game when limit is reached.
      Config.Silence     = false;                        // Make the bot not say a word. Do not use in combination with LocalChat
      Config.LastMessage = "";                           // Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
      Config.TeleSwitch  = false;                        // Switch to secondary (non-primary) slot when teleporting more than 5 nodes.
      Config.MiniShopBot = true;                         // Scan items in NPC shops.
      Config.ScanShrines = [15, 2, 3];                   // 15 = XP, 2 = Health, 3 = Mana
      Config.WalkIfManaLessThan = 10;
   //! MF SWITCH -----------------------------------------------------------------------
      Config.MFSwitchPercent =  0;                       // Boss life % to switch to non-primary weapon slot. Set to 0 to disable.
      Config.PrimarySlot     = -1;                       // Set to use specific weapon slot as primary weapon slot: -1 = disabled, 0 = slot I, 1 = slot II
   //! FASTMOD CONFIG ------------------------------------------------------------------
      Config.PacketShopping = true;                      // Use packets to shop. Improves shopping speed.
      Config.FCR = 0;                                    // 0 - disable, 1 to 255 - set value of faster cast rate
      Config.FHR = 0;                                    // 0 - disable, 1 to 255 - set value of faster hit recovery
      Config.FBR = 0;                                    // 0 - disable, 1 to 255 - set value of faster block recovery
      Config.IAS = 0;                                    // 0 - disable, 1 to 255 - set value of increased attack speed
      Config.PacketCasting = 2;                          // 0 = disable, 1 = packet teleport, 2 = full packet casting.
      Config.WaypointMenu = true;
      Config.UseTelekinesis = true;
   //! ADDITION CONFIG -----------------------------------------------------------------
      //+ Print to console ----------------------------------------------------------
         Config.D2BotPrintGameTime    = false;           // Game time in the end of each game
         Config.D2BotPrintChicken     =  true;           // Chicken location
         Config.D2BotPrintCrash       = false;           // Crash location
         Config.D2BotPrintScriptError = false;           // Script error
         Config.D2BotPrintDie         =  true;           // When you die
         Config.D2BotPrintLostXp      = false;           // When you lose experience
         Config.LogExperience         = false;           // Print experience statistics in the manager.
      //+ Additional item info log settings. All info goes to \logs\ItemLog.txt -----
         Config.ItemInfo = false;                        // Log stashed, skipped (due to no space) or sold items.
         Config.ItemInfoQuality = [];                    // The quality of sold items to log. See NTItemAlias.dbl for values. Example: Config.ItemInfoQuality = [6, 7, 8];
      //+ Item identification settings ----------------------------------------------
         Config.CainID.Enable = true;                    // Identify items at Cain
            Config.CainID.MinGold = 500;                 // Minimum gold (stash + character) to have in order to use Cain.
            Config.CainID.MinUnids = 1;                  // Minimum number of unid items in order to use Cain.
            Config.FieldID = false;                      // Identify items in the field instead of going to town.
            Config.DroppedItemsAnnounce.Enable = false;  // Announce Dropped Items to in-game newbs
            Config.DroppedItemsAnnounce.Quality = [];    // Quality of item to announce. See NTItemAlias.dbl for values. Example: Config.DroppedItemsAnnounce.Quality = [6, 7, 8];
      //+ Manager item log screen ---------------------------------------------------
         Config.LogKeys = false;                         // Log keys on item viewer
         Config.LogOrgans = false;                       // Log organs on item viewer
         Config.LogLowRunes = false;                     // Log low runes (El - Dol) on item viewer
         Config.LogMiddleRunes = false;                  // Log middle runes (Hel - Mal) on item viewer
         Config.LogHighRunes = true;                     // Log high runes (Ist - Zod) on item viewer
         Config.LogLowGems = false;                      // Log low gems (chipped, flawed, normal) on item viewer
         Config.LogHighGems = false;                     // Log high gems (flawless, perfect) on item viewer
         Config.SkipLogging = [654, 655, 656, 657];      // Custom log skip list. Set as three digit item code or classid. Example: ["tes", "ceh", 656, 657] will ignore logging of essences.
         Config.ShowCubingInfo = false;                  // Show cubing messages on console
      //+ Repair settings -----------------------------------------------------------
         Config.CubeRepair = false;                      // Repair weapons with Ort and armor with Ral rune. Don't use it if you don't understand the risk of losing items.
         Config.RepairPercent = 40;                      // Durability percent of any equipped item that will trigger repairs.
      //+ Gambling config -----------------------------------------------------------
         Config.Gamble = false;
            Config.GambleGoldStart = 2000000;
            Config.GambleGoldStop  =  500000;
            Config.GambleItems.push("Amulet");
            Config.GambleItems.push("Ring");
            Config.GambleItems.push("Circlet");
            Config.GambleItems.push("Coronet");
            Config.GambleItems.push("Monarch");
   //! NOTIFICATION CONFIG -------------------------------------------------------------
      Config.RogerThatTelegram.Active = false;
         Config.RogerThatTelegram.Notify.Trade = true;
         Config.RogerThatTelegram.Notify.HotIP = true;
         Config.RogerThatTelegram.Notify.DiabloClone = true;
   //! DIABLO CLONE CONFIG -------------------------------------------------------------
      Config.StopOnDClone = false;                       // Go to town and idle as soon as Diablo walks the Earth
      Config.SoJWaitTime = 5;                            // Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
      Config.KillDclone = false;                         // Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
      Config.DCloneQuit = false;                         // 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled
   //! PUBLIC GAMES OPTIONS ------------------------------------------------------------
      Config.LocalChat.Enabled = false;                  // enable the LocalChat system
         Config.LocalChat.Toggle = false;                // optional, set to KEY value to toggle through modes 0, 1, 2
         Config.LocalChat.Mode = 0;                      // 0 = disabled, 1 = chat from 'say' (recommended), 2 = all chat (for manual play)
         Config.PublicMode = 2;                          // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
   //! CUBING CONFIG -------------------------------------------------------------------
      Config.Cubing        = true;
         //+ GEMS -------------------------------------------------------------------
            // Config.Recipes.push([Recipe.Gem,             "Flawless Amethyst"]);       // Make Perfect Amethyst
            // Config.Recipes.push([Recipe.Gem,                 "Flawless Ruby"]);       // Make Perfect Ruby
            // Config.Recipes.push([Recipe.Gem,              "Flawless Diamond"]);       // Make Perfect Diamond
            // Config.Recipes.push([Recipe.Gem,              "Flawless Emerald"]);       // Make Perfect Emerald
            // Config.Recipes.push([Recipe.Gem,                "Flawless Topaz"]);       // Make Perfect Topaz
            // Config.Recipes.push([Recipe.Gem,             "Flawless Sapphire"]);       // Make Perfect Sapphire
            // Config.Recipes.push([Recipe.Gem,                "Flawless Skull"]);       // Make Perfect Skull
         //+ CRAFT ------------------------------------------------------------------
            Config.Recipes.push([Recipe.Caster.Amulet]);                              // Craft Caster Amulet
            Config.Recipes.push([Recipe.Blood.Ring]);                                 // Craft Blood Ring
            Config.Recipes.push([Recipe.Caster.Belt,        "Sharkskin Belt"]);       // Craft Caster Sharkskin Belt
            Config.Recipes.push([Recipe.Caster.Belt,      "Vampirefang Belt"]);       // Craft Caster Vampirefang Belt
            Config.Recipes.push([Recipe.Blood.Gloves,     "Sharkskin Gloves"]);       // Craft Blood Sharkskin Gloves
            Config.Recipes.push([Recipe.Blood.Gloves,   "Vampirebone Gloves"]);       // Craft Blood Vampirebone Gloves
            Config.Recipes.push([Recipe.HitPower.Gloves,         "Vambraces"]);       // Craft Hit Power Vambraces
            Config.Recipes.push([Recipe.HitPower.Gloves,      "Chain Gloves"]);       // Craft Hit Power Chain Gloves
            Config.Recipes.push([Recipe.HitPower.Gloves,     "Heavy Bracers"]);       // Craft Hit Power Heavy Bracers
            Config.Recipes.push([Recipe.Blood.Helm,                  "Armet"]);       // Craft Blood Armet
         //+ OTHERS -----------------------------------------------------------------
            Config.Recipes.push([Recipe.Reroll.Magic,          "Grand Charm"]);       // Reroll magic Grand Charm (ilvl 91+)
            Config.Recipes.push([Recipe.Reroll.Magic,               "Diadem"]);       // Reroll magic Diadem
            Config.Recipes.push([Recipe.Reroll.Rare,                "Diadem"]);       // Reroll rare Diadem
            // Config.Recipes.push([Recipe.Token]);                                      // Make Token of Absolution
         //+ SOCKET -----------------------------------------------------------------
            Config.Recipes.push([Recipe.Socket.Weapon, "Giant Thresher",    Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Great Poleaxe",     Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Thresher",          Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Cryptic Axe",       Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Colossus Voulge",   Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Giant Thresher",       Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Great Poleaxe",        Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Thresher",             Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Cryptic Axe",          Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Colossus Voulge",      Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Dusk Shroud",          Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Wyrmhide",             Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Scarab Husk",          Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Wire Fleece",          Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Diamond Mail",         Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Loricated Mail",       Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Boneweave",            Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Great Hauberk",        Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Balrog Skin",          Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "KrakenShell",          Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Hellforge Plate",      Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Archon Plate",         Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Lacquered Plate",      Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Shadow Plate",         Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Armor,  "Sacred Armor",         Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Monarch",           Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Targe",             Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Rondache",          Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Heraldic Shield",   Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Aerin Shield",      Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Crown Shield",      Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Akaran Targe",      Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Akaran Rondache",   Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Protector Shield",  Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Gilded Shield",     Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Royal Shield",      Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Sacred Targe",      Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Sacred Rondache",   Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Kurast Shield",     Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Zakarum Shield",    Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Vortex Shield",     Roll.NonEth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Sacred Targe",         Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Sacred Rondache",      Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Kurast Shield",        Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Zakarum Shield",       Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Shield, "Vortex Shield",        Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Berserker Axe",        Roll.Eth]);
            Config.Recipes.push([Recipe.Socket.Weapon, "Colossus Blade",       Roll.Eth]);
         //+ UPGRADE ----------------------------------------------------------------
            // Config.Recipes.push([Recipe.Unique.Armor.ToExceptional,     "Heavy Gloves",      Roll.NonEth]);    // Upgrade Bloodfist to Exceptional
            // Config.Recipes.push([Recipe.Unique.Armor.ToExceptional,     "Light Gauntlets",   Roll.NonEth]);    // Upgrade Magefist to Exceptional
            // Config.Recipes.push([Recipe.Unique.Armor.ToElite,           "Sharkskin Gloves",  Roll.NonEth]);    // Upgrade Bloodfist or Grave Palm to Elite
            // Config.Recipes.push([Recipe.Unique.Armor.ToElite,           "Battle Gauntlets",  Roll.NonEth]);    // Upgrade Magefist or Lavagout to Elite
            // Config.Recipes.push([Recipe.Unique.Armor.ToElite,           "War Boots",         Roll.NonEth]);    // Upgrade Gore Rider to Elite
      Config.MakeRunewords = false;
         Config.Runewords.push([Runeword.Oath,                          "Ettin Axe",            Roll.Eth]);    // Make Oath Ettin Axe
         Config.Runewords.push([Runeword.Oath,                          "Berserker Axe",        Roll.Eth]);    // Make Oath Beserker Axe
         Config.Runewords.push([Runeword.Oath,                          "Small Crescent",       Roll.Eth]);    // Make Oath Small Crescent
         Config.Runewords.push([Runeword.Insight,                       "Giant Thresher",       Roll.Eth]);    // Make ethereal Insight Giant Thresher
         Config.Runewords.push([Runeword.Insight,                       "Great Poleaxe",        Roll.Eth]);    // Make ethereal Insight Great Poleaxe
         Config.Runewords.push([Runeword.Insight,                       "Thresher",             Roll.Eth]);    // Make ethereal Insight Thresher
         Config.Runewords.push([Runeword.Insight,                       "Cryptic Axe",          Roll.Eth]);    // Make ethereal Insight Cryptic Axe
         Config.Runewords.push([Runeword.Insight,                       "Colossus Voulge",      Roll.Eth]);    // Make ethereal Insight Colossus Voulge
         Config.Runewords.push([Runeword.Insight,                       "Elder Staff",          Roll.Eth]);    // Make ethereal Insight Elder Staff
         Config.Runewords.push([Runeword.Insight,                       "Cedar Staff",          Roll.Eth]);    // Make ethereal Insight Cedar Staff
         Config.Runewords.push([Runeword.Insight,                       "Battle Staff",         Roll.Eth]);    // Make ethereal Insight Battle Staff
         Config.Runewords.push([Runeword.Insight,                       "Elder Staff",       Roll.NonEth]);    // Make non-ethereal Insight Elder Staff
         Config.Runewords.push([Runeword.Insight,                       "Cedar Staff",       Roll.NonEth]);    // Make non-ethereal Insight Cedar Staff
         Config.Runewords.push([Runeword.Insight,                       "Battle Staff",      Roll.NonEth]);    // Make non-ethereal Insight Battle Staff
         Config.Runewords.push([Runeword.Sanctuary,                     "Hyperion",          Roll.NonEth]);    // Make Hyperion Sanctuary
         Config.Runewords.push([Runeword.Sanctuary,                     "Sacred Targe",      Roll.NonEth]);    // Make Sanctuary Sacred Targe
         Config.Runewords.push([Runeword.Sanctuary,                     "Sacred Rondache",   Roll.NonEth]);    // Make Sanctuary Sacred Rondache
         Config.Runewords.push([Runeword.Sanctuary,                     "Kurast Shield",     Roll.NonEth]);    // Make Sanctuary Kurast Shield
         Config.Runewords.push([Runeword.Sanctuary,                     "Zakarum Shield",    Roll.NonEth]);    // Make Sanctuary Zakarum Shield
         Config.Runewords.push([Runeword.Sanctuary,                     "Vortex Shield",     Roll.NonEth]);    // Make Sanctuary Vortex Shield
         Config.Runewords.push([Runeword.Spirit,                        "Monarch",           Roll.NonEth]);    // Make Spirit Monarch
         Config.Runewords.push([Runeword.Spirit,                        "Rondache",          Roll.NonEth]);    // Make Spirit Hondache
         Config.Runewords.push([Runeword.Spirit,                        "Targe",             Roll.NonEth]);    // Make Spirit Target
         Config.Runewords.push([Runeword.Spirit,                        "Rondache",          Roll.NonEth]);    // Make Spirit Rondache
         Config.Runewords.push([Runeword.Spirit,                        "Heraldic Shield",   Roll.NonEth]);    // Make Spirit Heraldic Shield
         Config.Runewords.push([Runeword.Spirit,                        "Aerin Shield",      Roll.NonEth]);    // Make Spirit Aerin Shield
         Config.Runewords.push([Runeword.Spirit,                        "Crown Shield",      Roll.NonEth]);    // Make Spirit Crown Shield
         Config.Runewords.push([Runeword.Spirit,                        "Akaran Targe",      Roll.NonEth]);    // Make Spirit Akaran Targe
         Config.Runewords.push([Runeword.Spirit,                        "Akaran Rondache",   Roll.NonEth]);    // Make Spirit Akaran Rondache
         Config.Runewords.push([Runeword.Spirit,                        "Protector Shield",  Roll.NonEth]);    // Make Spirit Protector Shield
         Config.Runewords.push([Runeword.Spirit,                        "Gilded Shield",     Roll.NonEth]);    // Make Spirit Gilded Shield
         Config.Runewords.push([Runeword.Spirit,                        "Royal Shield",      Roll.NonEth]);    // Make Spirit Royal Shield
         Config.Runewords.push([Runeword.Spirit,                        "Sacred Targe",      Roll.NonEth]);    // Make Spirit Sacred Targe
         Config.Runewords.push([Runeword.Spirit,                        "Sacred Rondache",   Roll.NonEth]);    // Make Spirit Sacred Rondache
         Config.Runewords.push([Runeword.Spirit,                        "Kurast Shield",     Roll.NonEth]);    // Make Spirit Kurast Shield
         Config.Runewords.push([Runeword.Spirit,                        "Zakarum Shield",    Roll.NonEth]);    // Make Spirit Zakarum Shield
         Config.Runewords.push([Runeword.Spirit,                        "Vortex Shield",     Roll.NonEth]);    // Make Spirit Vortex Shield
         Config.Runewords.push([Runeword.Harmony,                       "Matriarchal Bow",   Roll.NonEth]);    // Make Harmony Matriarchal Bow
         Config.KeepRunewords.push("      [type] == shield # ([coldresist] == 70 || [coldresist] == 115)");    // Resist 70/115 Sanctuary
         Config.KeepRunewords.push("     ([type] == polearm || [type] == staff) # [meditationaura] == 17");    // Insight Meditation lvl 17
         Config.KeepRunewords.push("            [type] == shield || [type] == auricshields # [fcr] == 35");    // 35% Fcr Spirit
         Config.KeepRunewords.push("[type] == bow # ([enhanceddamage] == 275 || [enhanceddamage] == 290)");    // 275% or 290% ed Harmony
         Config.KeepRunewords.push("[type] == axe # ([enhanceddamage] == 340 || [enhanceddamage] == 355)");    // 340% or 355% ed Oath
   //! MONSTER SKIP CONFIG -------------------------------------------------------------
      Config.SkipImmune  = [];
      Config.SkipEnchant = [];
      Config.SkipAura    = [];
      //Config.SkipException = [getLocaleString(2851), getLocaleString(2852), getLocaleString(2853)]; // vizier, de seis, infector
   //! ATTACK CONFIG -------------------------------------------------------------------
      //+ SORCERESS -----------------------------------------------------------------
         //- Cold ---------------------------------------------------------------
            Config.AttackSorcColdSkill  = [55, 59, 45, 59, 55, -1, -1];
            Config.LowManaSorcColdSkill = [-1, -1];
         //- Light --------------------------------------------------------------
            Config.AttackSorcLightSkill  = [53, 49, 49, 53, 53, -1, -1];
            Config.LowManaSorcLightSkill = [-1, -1];
         //- Fire ---------------------------------------------------------------
            Config.AttackSorcFireSkill  = [47, 56, 47, 47, 47, -1, -1];
            Config.LowManaSorcFireSkill = [-1, -1];
      //+ PALADIN -------------------------------------------------------------------
         Config.AttackPallySkill  = [112, 112, 113, 112, 113, 97, 122];
         Config.LowManaPallySkill = [112, 124];
      //+ BARBARIAN -----------------------------------------------------------------
         Config.AttackBarbSkill   = [126, 126, 126, 126, 126, -1, -1];
         Config.LowManaBarbSkill  = [-1, -1];
      //+ AMAZON --------------------------------------------------------------------
         Config.AttackZonSkill    = [10, 10, 10, 10, 10, -1, -1];
         Config.LowManaZonSkill   = [-1, -1];
      //+ DRUID ---------------------------------------------------------------------
         Config.AttackDruidSkill  = [245, 245, 245, 245, 245, -1, -1];
         Config.LowManaDruidSkill = [-1, -1];
      //+ NECROMANCER ---------------------------------------------------------------
         Config.AttackNecSkill    = [88, 84, 84, 84, 84, 88, 88];
         Config.LowManaNecSkill   = [-1, -1];
      //+ ASSASSIN ------------------------------------------------------------------
         Config.AttackSinSkill    = [271, 271, 271, 271, 271, -1, -1];
         Config.LowManaSinSkill   = [-1, -1];

      Config.CustomAttack = {
         //"Monster Name": [-1, -1]
      };

      Config.Dodge             = true;                   // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
      Config.DodgeRange        = 10;                     // Distance to keep from monsters.
      Config.DodgeHP           = 90;                     // Dodge only if HP percent is less than or equal to Config.DodgeHP. 100 = always dodge.
      Config.BossPriority      = true;                   // Set to true to attack Unique/SuperUnique monsters first when clearing
      Config.ClearType         = 0xF;                    // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
      Config.TeleStomp         = true;                   // Use merc to attack bosses if they're immune to attacks, but not to physical damage
}