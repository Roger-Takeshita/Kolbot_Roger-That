//! Paladin Config File
//? ███╗   ███╗███████╗    ██╗     ███████╗ █████╗ ██████╗ ███████╗██████╗               ██╗  ██╗ █████╗ ███╗   ███╗███╗   ███╗███████╗██████╗
//? ████╗ ████║██╔════╝    ██║     ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗              ██║  ██║██╔══██╗████╗ ████║████╗ ████║██╔════╝██╔══██╗
//? ██╔████╔██║█████╗      ██║     █████╗  ███████║██║  ██║█████╗  ██████╔╝    █████╗    ███████║███████║██╔████╔██║██╔████╔██║█████╗  ██████╔╝
//? ██║╚██╔╝██║██╔══╝      ██║     ██╔══╝  ██╔══██║██║  ██║██╔══╝  ██╔══██╗    ╚════╝    ██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝  ██╔══██╗
//? ██║ ╚═╝ ██║██║         ███████╗███████╗██║  ██║██████╔╝███████╗██║  ██║              ██║  ██║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║███████╗██║  ██║
//? ╚═╝     ╚═╝╚═╝         ╚══════╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝              ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝

function LoadConfig() {
   //! FOLLOW LEADER -------------------------------------------------------------------
      Config.Leader   =  "";
      Config.QuitList = [""];
      Config.QuitListMode = 0;
      Config.QuitListDelay = [0, 0];
   //! LEADER / HELPER -----------------------------------------------------------------
      Config.MFLeader   = false;
      Scripts.MFHelper  = false;
   //! SCRIPTS -------------------------------------------------------------------------
      Scripts.Rakanishu = true;
         Config.Rakanishu.KillGriswold = true;
      Scripts.Coldcrow = true;
      Scripts.Treehead = true;
      Scripts.BoneAsh = true;
      Scripts.Coldworm = true;
         Config.Coldworm.KillBeetleburst = true;
      Scripts.Stormtree = true;
      Scripts.Travincal = true;
      Scripts.Mephisto = true;
         Config.Mephisto.TakeRedPortal = true;
      Scripts.Hephasto = true;
      Scripts.Diablo = true;
         Config.Diablo.Entrance = true;
         Config.Diablo.SealOrder = ["vizier", "seis", "infector"];
      Scripts.Nihlathak = true;
      Scripts.Frozenstein = true;
      Scripts.Snapchip = true;
      Scripts.Baal = true;
         Config.Baal.HotTPMessage = "";
         Config.Baal.SafeTPMessage = "";
         Config.Baal.BaalMessage = "";
         Config.Baal.SoulQuit = false;
         Config.Baal.DollQuit = false;
         Config.Baal.KillBaal = true;
   //! SPECIAL SCRIPTS -----------------------------------------------------------------
      Scripts.WPGetter = false;                          // Get missing waypoints
      Scripts.GetKeys = false;                           // Hunt for T/H/D keys
      Scripts.OrgTorch = false;
         Config.OrgTorch.MakeTorch = true;               // Convert organ sets to torches
         Config.OrgTorch.WaitForKeys = true;             // Enable Torch System to get keys from other profiles. See libs/TorchSystem.js for more info
         Config.OrgTorch.WaitTimeout = 15;               // Time in minutes to wait for keys before moving on
         Config.OrgTorch.UseSalvation = true;            // Use Salvation aura on Mephisto (if possible)
         Config.OrgTorch.GetFade = false;                // Get fade by standing in a fire. You MUST have Last Wish or Treachery on your character being worn.
         Config.OrgTorch.AntidotesToChug = 0;            // Chug x antidotes before Lilith. Each antidote gives +50 poison res and +10 max poison for 30 seconds. The duration stacks. 4 potions == 2 minutes
      Scripts.Questing = false;                          // solves missing quests (skill/stat+shenk)
      Scripts.KillDclone = false;                        // Kill Diablo Clone by using Arcane Sanctuary waypoint. Diablo needs to walk the Earth in the game.
      Scripts.ShopBot = false;                           // Shopbot script. Automatically uses shopbot.nip and ignores other pickits.
         Config.ShopBot.ShopNPC = NPC.Anya;
         Config.ShopBot.ScanIDs = [];
         Config.ShopBot.CycleDelay = 0;                  // Delay between shopping cycles in milliseconds, might help with crashes.
         Config.ShopBot.QuitOnMatch = false;             // Leave game as soon as an item is shopped.
      Scripts.ChestMania = false;                        // Open chests in configured areas. See sdk/areas.txt
         Config.ChestMania.Act1 = [13, 14, 15, 16, 18, 19];                   // List of act 1 areas to open chests in
         Config.ChestMania.Act2 = [55, 59, 65, 66, 67, 68, 69, 70, 71, 72];   // List of act 2 areas to open chests in
         Config.ChestMania.Act3 = [79, 80, 81, 92, 93, 84, 85, 90];           // List of act 3 areas to open chests in
         Config.ChestMania.Act4 = [107];                                      // List of act 4 areas to open chests in
         Config.ChestMania.Act5 = [115, 116, 119, 125, 126, 127];             // List of act 5 areas to open chests in
      Scripts.ClearAnyArea = false;                      // Clear any area. Uses Config.ClearType to determine which type of monsters to kill.
         Config.ClearAnyArea.AreaList = [128, 129, 130]; // List of area ids to clear. See sdk/areas.txt
   //! INVENTORY SETTINGS --------------------------------------------------------------
      Config.Inventory[0] = [1,1,1,1,1,1,0,0,0,0];
      Config.Inventory[1] = [1,1,1,1,1,1,0,0,0,0];
      Config.Inventory[2] = [1,1,1,1,1,1,0,0,0,0];
      Config.Inventory[3] = [1,1,1,1,1,1,0,0,0,0];

      Config.BeltColumn   = ["hp", "mp", "rv", "rv"];
      Config.MinColumn    = [3, 3, 0, 0];
      Config.StashGold    = 500000;
   //! TOWN SETTINGS / POTION SETTINGS / CHICKEN SETTINGS ------------------------------
      //+ Town settings -------------------------------------------------------------
         Config.HealHP       = 90;                       // Go to a healer if under designated percent of life.
         Config.HealMP       =  0;                       // Go to a healer if under designated percent of mana.
         Config.HealStatus   = true;                     // Go to a healer if poisoned or cursed
         Config.UseMerc      = true;                     // Use merc. This is ignored and always false in d2classic.
         Config.MercWatch    = true;                     // Instant merc revive during battle.
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
         Config.TownCheck    = true;                     // Go to town if out of potions
      //+ Chicken settings ----------------------------------------------------------
         Config.LifeChicken  = 35;                       // Exit game if life is less or equal to designated percent.
         Config.ManaChicken  =  0;                       // Exit game if mana is less or equal to designated percent.
         Config.MercChicken  =  0;                       // Exit game if merc's life is less or equal to designated percent.
         Config.PingQuit     = [{Ping: 0, Duration: 0}]; // Quit if ping is over the given value for over the given time period in seconds.
   //! PICK LIST -----------------------------------------------------------------------
      Config.PickitFiles.push("w-bot1.nip");
      // Config.PickitFiles.push("w-bot2.nip");
      // Config.PickitFiles.push("w-bot3.nip");
      // Config.PickitFiles.push("w-bot4.nip");
      // Config.PickitFiles.push("w-potions.nip");
      Config.PickitFiles.push("w-RogerThat.nip");
      Config.PickitFiles.push("w-LLD.nip");
      Config.PickRange = 40;
      Config.FastPick  = true;
   //! MANUAL PLAY / OPEN CHEST --------------------------------------------------------
      Config.ManualPlayPick = false;
      Config.OpenChests = false;                         // Open chests. Controls key buying. true = open only chests, 2 = open everything body, rocks...
      Config.AutoMap = false;                            // Set to true to open automap at the beginning of the game.
   //! GENERAL CONFIG ------------------------------------------------------------------
      Config.MinGameTime = 300;                          // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
      Config.MaxGameTime = 1200;                         // Maximum game time in seconds. Quit game when limit is reached.
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
      Config.FCR = 255;                                  // 0 - disable, 1 to 255 - set value of faster cast rate
      Config.FHR = 255;                                  // 0 - disable, 1 to 255 - set value of faster hit recovery
      Config.FBR = 255;                                  // 0 - disable, 1 to 255 - set value of faster block recovery
      Config.IAS = 255;                                  // 0 - disable, 1 to 255 - set value of increased attack speed
      Config.PacketCasting = 2;                          // 0 = disable, 1 = packet teleport, 2 = full packet casting.
      Config.WaypointMenu = true;
   //! ADDITION CONFIG -----------------------------------------------------------------
      //+ Print to console ----------------------------------------------------------
         Config.D2BotPrintGameTime         = false;      // Game time in the end of each game
         Config.D2BotPrintChicken          =  true;      // Chicken location
         Config.D2BotPrintCrash            = false;      // Crash location
         Config.D2BotLogScriptError        = false;      // Save script error in logs/ScriptErrorLog.txt
         Config.D2BotPrintScriptError      = false;      // Print script error on console
         Config.D2BotScreenShotScriptError = false;      // Screenshot script error
         Config.D2BotPrintDie              =  true;      // When you die
         Config.D2BotPrintLostXp           = false;      // When you lose experience
         Config.LogExperience              = false;      // Print experience statistics in the manager.
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
         Config.Gamble = true;
            Config.GambleGoldStart = 2000000;
            Config.GambleGoldStop  =  500000;
            Config.GambleItems.push("Amulet");
            Config.GambleItems.push("Ring");
            Config.GambleItems.push("Circlet");
            Config.GambleItems.push("Coronet");
            Config.GambleItems.push("Monarch");
   //! AUTO MULE -----------------------------------------------------------------------
      Config.AutoMule.Trigger = [];
      Config.AutoMule.Force   = [];
      Config.AutoMule.Exclude = [];
   //! NOTIFICATION CONFIG -------------------------------------------------------------
      Config.RogerThatTelegram.Active = false;
         Config.RogerThatTelegram.Notify.Trade = false;
         Config.RogerThatTelegram.Notify.HotIP = true;
         Config.RogerThatTelegram.Notify.DiabloClone = true;
   //! DIABLO CLONE CONFIG -------------------------------------------------------------
      Config.StopOnDClone = false;                       // Go to town and idle as soon as Diablo walks the Earth
      Config.SoJWaitTime = 5;                            // Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
      Config.KillDclone = true;                          // Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
      Config.DCloneQuit = 0;                             // 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled
   //! PUBLIC GAMES OPTIONS ------------------------------------------------------------
      Config.LocalChat.Enabled = true;                   // enable the LocalChat system
         Config.LocalChat.Toggle = false;                // optional, set to KEY value to toggle through modes 0, 1, 2
         Config.LocalChat.Mode = 1;                      // 0 = disabled, 1 = chat from 'say' (recommended), 2 = all chat (for manual play)
         Config.PublicMode = 3;                          // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
      Config.Greetings = [];                             // Example: ["Hello, $name (level $level $class)"]
      Config.DeathMessages = [];                         // Example: ["Watch out for that $killer, $name!"]
      Config.Congratulations = [];                       // Example: ["Congrats on level $level, $name!"]
      Config.ShitList = false;                           // Blacklist hostile players so they don't get invited to party.
      Config.UnpartyShitlisted = false;                  // Leave party if someone invited a blacklisted player.
   //! HOSTILE / VIPER -----------------------------------------------------------------
      Config.AntiHostile = false;                        // Enable anti-hostile
      Config.HostileAction = 0;                          // 0 - quit immediately, 1 - quit when hostile player is sighted, 2 - attack hostile
      Config.TownOnHostile = false;                      // Go to town instead of quitting when HostileAction is 0 or 1
      Config.RandomPrecast = false;                      // Anti-PK measure, only supported in Baal and BaalHelper and BaalAssisstant at the moment.
      Config.ViperCheck = false;                         // Quit if revived Tomb Vipers are sighted
   //! CUBING / RUNEWORDS --------------------------------------------------------------
      Config.Cubing = true;                              // config/common/UpdateCubing.js
         //+ CRAFT ------------------------------------------------------------------
            Config.Recipes.push([Recipe.Caster.Amulet]);                              // Craft Caster Amulet
            Config.Recipes.push([Recipe.Blood.Ring]);                                 // Craft Blood Ring
            // Config.Recipes.push([Recipe.Caster.Belt,        "Sharkskin Belt"]);       // Craft Caster Sharkskin Belt
            // Config.Recipes.push([Recipe.Caster.Belt,      "Vampirefang Belt"]);       // Craft Caster Vampirefang Belt
            // Config.Recipes.push([Recipe.Blood.Gloves,     "Sharkskin Gloves"]);       // Craft Blood Sharkskin Gloves
            Config.Recipes.push([Recipe.Blood.Gloves,   "Vampirebone Gloves"]);       // Craft Blood Vampirebone Gloves
            // Config.Recipes.push([Recipe.HitPower.Gloves,         "Vambraces"]);       // Craft Hit Power Vambraces
            // Config.Recipes.push([Recipe.HitPower.Gloves,      "Chain Gloves"]);       // Craft Hit Power Chain Gloves
            // Config.Recipes.push([Recipe.HitPower.Gloves,     "Heavy Bracers"]);       // Craft Hit Power Heavy Bracers
            // Config.Recipes.push([Recipe.Blood.Helm,                  "Armet"]);       // Craft Blood Armet
         //+ OTHERS -----------------------------------------------------------------
            Config.Recipes.push([Recipe.Reroll.Magic,          "Grand Charm"]);       // Reroll magic Grand Charm (ilvl 91+)
            // Config.Recipes.push([Recipe.Reroll.Magic,               "Diadem"]);       // Reroll magic Diadem
            // Config.Recipes.push([Recipe.Reroll.Rare,                "Diadem"]);       // Reroll rare Diadem
            // Config.Recipes.push([Recipe.Token]);                                      // Make Token of Absolution
      Config.MakeRunewords = false;                      // config/common/UpdateMakeRunewords.js
   //! MONSTER SKIP CONFIG -------------------------------------------------------------
      Config.SkipImmune  = ["magic"];
      Config.SkipEnchant = [];
      Config.SkipAura    = [];
      //Config.SkipException = [getLocaleString(2851), getLocaleString(2852), getLocaleString(2853)]; // vizier, de seis, infector
   //! ATTACK CONFIG -------------------------------------------------------------------
      Config.AttackSkill[0]  = -1;                       // Preattack skill.
      Config.AttackSkill[1]  = 112;                      // Primary skill to bosses.
      Config.AttackSkill[2]  = 113;                      // Primary aura to bosses
      Config.AttackSkill[3]  = 112;                      // Primary skill to others.
      Config.AttackSkill[4]  = 113;                      // Primary aura to others.
      Config.AttackSkill[5]  =  97;                      // Secondary skill if monster is immune to primary.
      Config.AttackSkill[6]  = 122;                      // Secondary aura.

      Config.LowManaSkill[0] = 112;                      // Low mana skill.
      Config.LowManaSkill[1] = 124;                      // Low mana aura.

      Config.CustomAttack = {
         //"Monster Name": [-1, -1]
      };

      Config.NoTele       = false;                       // Restrict char from teleporting. Useful for low level/low mana chars
      Config.BossPriority = true;                        // Set to true to attack Unique/SuperUnique monsters first when clearing
      Config.ClearType    = 0xF;                         // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
      Config.AvoidDolls   = true;                        // Try to attack dolls from a greater distance with hammerdins.
      Config.Vigor        = true;                        // Swith to Vigor when running
      Config.Charge       = false;                       // Use Charge when running
      Config.Redemption   = [50, 50];                    // Switch to Redemption after clearing an area if under designated life or mana. Format: [lifepercent, manapercent]
}