//! Generic
//? ██████╗  ██████╗  ██████╗ ███████╗██████╗       ████████╗██╗  ██╗ █████╗ ████████╗    ███╗   ███╗██╗   ██╗██╗     ███████╗
//? ██╔══██╗██╔═══██╗██╔════╝ ██╔════╝██╔══██╗      ╚══██╔══╝██║  ██║██╔══██╗╚══██╔══╝    ████╗ ████║██║   ██║██║     ██╔════╝
//? ██████╔╝██║   ██║██║  ███╗█████╗  ██████╔╝█████╗   ██║   ███████║███████║   ██║       ██╔████╔██║██║   ██║██║     █████╗
//? ██╔══██╗██║   ██║██║   ██║██╔══╝  ██╔══██╗╚════╝   ██║   ██╔══██║██╔══██║   ██║       ██║╚██╔╝██║██║   ██║██║     ██╔══╝
//? ██║  ██║╚██████╔╝╚██████╔╝███████╗██║  ██║         ██║   ██║  ██║██║  ██║   ██║       ██║ ╚═╝ ██║╚██████╔╝███████╗███████╗
//? ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝         ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚══════╝

function LoadConfig() {
   //! FOLLOW LEADER -------------------------------------------------------------------
      Config.Leader   =  "";
      Config.QuitList = [""];
      Config.QuitListMode = 0;
      Config.QuitListDelay = [1, 10];
   //! INVENTORY SETTINGS --------------------------------------------------------------
      Config.Inventory[0] = [0,0,0,0,0,0,0,0,0,0];
      Config.Inventory[1] = [0,0,0,0,0,0,0,0,0,0];
      Config.Inventory[2] = [0,0,0,0,0,0,0,0,0,0];
      Config.Inventory[3] = [0,0,0,0,0,0,0,0,0,0];

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
         Config.UseMP        = 30;                       // Drink a mana potion if mana is under designated percent.
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
      // Config.PickitFiles.push("w-potions.nip");
      // Config.PickitFiles.push("w-RogerThat.nip");
      // Config.PickitFiles.push("w-LLD.nip");
      Config.PickRange = 40;
      Config.FastPick  = true;
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
            Config.CainID.MinGold = 500000;              // Minimum gold (stash + character) to have in order to use Cain.
            Config.CainID.MinUnids = 3;                  // Minimum number of unid items in order to use Cain.
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
   //! PUBLIC GAMES OPTIONS ------------------------------------------------------------
      Config.LocalChat.Enabled = true;                   // enable the LocalChat system
         Config.LocalChat.Toggle = false;                // optional, set to KEY value to toggle through modes 0, 1, 2
         Config.LocalChat.Mode = 1;                      // 0 = disabled, 1 = chat from 'say' (recommended), 2 = all chat (for manual play)
         Config.PublicMode = 2;                          // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
   //! GENERAL CONFIG ------------------------------------------------------------------
      Config.AutoMap = false;                            // Set to true to open automap at the beginning of the game.
      Config.LastMessage = "";                           // Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
      Config.MinGameTime = 0;                            // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
      Config.MaxGameTime = 0;                            // Maximum game time in seconds. Quit game when limit is reached.
      Config.TeleSwitch = false;                         // Switch to secondary (non-primary) slot when teleporting more than 5 nodes.
      Config.OpenChests = false;                         // Open chests. Controls key buying.
      Config.MiniShopBot = true;                         // Scan items in NPC shops.
      Config.PacketShopping = false;                     // Use packets to shop. Improves shopping speed.
      Config.TownCheck = false;                          // Go to town if out of potions
      Config.LogExperience = false;                      // Print experience statistics in the manager.
      Config.PingQuit = [{Ping: 0, Duration: 0}];        // Quit if ping is over the given value for over the given time period in seconds.
      Config.Silence = false;                            // Make the bot not say a word. Do not use in combination with LocalChat
      Config.ScanShrines = [15, 2, 3];                   // 15 = XP, 2 = Health, 3 = Mana
      Config.WaypointMenu = true;
      Config.WalkIfManaLessThan = 10;
   //! NOTIFICATION CONFIG -------------------------------------------------------------
      Config.RogerThatTelegram.Active = false;
         Config.RogerThatTelegram.Notify.Trade = false;
         Config.RogerThatTelegram.Notify.HotIP = true;
         Config.RogerThatTelegram.Notify.DiabloClone = true;
   //! DIABLO CLONE CONFIG -------------------------------------------------------------
      Config.StopOnDClone = false;                       // Go to town and idle as soon as Diablo walks the Earth
      Config.SoJWaitTime = 5;                            // Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
      Config.KillDclone = false;                         // Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
      Config.DCloneQuit = 0;                             // 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled
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
}