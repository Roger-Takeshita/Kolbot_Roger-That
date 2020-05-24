function LoadConfig() {
   //! FOLLOW LEADER -------------------------------------------------------------------
      Config.Leader             = "Auto_I";        // Leader's ingame character name. Leave blank to try auto-detection (works in AutoBaal, Wakka, MFHelper)
      Config.QuitList           = [""];            // List of character names to quit with. Example: Config.QuitList = ["MySorc", "MyDin"];
      Config.QuitListMode       = 0;               // 0 = use character names; 1 = use profile names (all profiles must run on the same computer).
      Config.QuitListDelay      = [];              // Quit the game with random delay in case of using Config.QuitList. Example: Config.QuitListDelay = [1, 10]; will exit with random delay between 1 and 10 seconds.
      Scripts.LevelLeader       = false;
      Scripts.LevelFollower     = true;
   //! PUBLIC GAMES OPTIONS ------------------------------------------------------------
      Config.LocalChat.Enabled  = true;            // enable the LocalChat system
      Config.LocalChat.Toggle   = false;           // optional, set to KEY value to toggle through modes 0, 1, 2
      Config.LocalChat.Mode     = 1;               // 0 = disabled, 1 = chat from 'say' (recommended), 2 = all chat (for manual play)
      Config.PublicMode         = 2;               // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
   //! TOWN SETTINGS / POTION SETTINGS / CHICKEN SETTINGS ------------------------------
      //+ Town settings -------------------------------------------------------------
         Config.HealHP          = 50;              // Go to a healer if under designated percent of life.
         Config.HealMP          = 0;               // Go to a healer if under designated percent of mana.
         Config.HealStatus      = false;           // Go to a healer if poisoned or cursed
         Config.UseMerc         = true;            // Use merc. This is ignored and always false in d2classic.
         Config.MercWatch       = false;           // Instant merc revive during battle.
      //+ Potion settings -----------------------------------------------------------
         Config.UseHP           = 75;              // Drink a healing potion if life is under designated percent.
         Config.UseRejuvHP      = 40;              // Drink a rejuvenation potion if life is under designated percent.
         Config.UseMP           = 30;              // Drink a mana potion if mana is under designated percent.
         Config.UseRejuvMP      = 0;               // Drink a rejuvenation potion if mana is under designated percent.
         Config.UseMercHP       = 75;              // Give a healing potion to your merc if his/her life is under designated percent.
         Config.UseMercRejuv    = 0;               // Give a rejuvenation potion to your merc if his/her life is under designated percent.
         Config.HPBuffer        = 0;               // Number of healing potions to keep in inventory.
         Config.MPBuffer        = 0;               // Number of mana potions to keep in inventory.
         Config.RejuvBuffer     = 0;               // Number of rejuvenation potions to keep in inventory.
      //+ Chicken settings ----------------------------------------------------------
         Config.LifeChicken     = 30;              // Exit game if life is less or equal to designated percent.
         Config.ManaChicken     = 0;               // Exit game if mana is less or equal to designated percent.
         Config.MercChicken     = 0;               // Exit game if merc's life is less or equal to designated percent.
         Config.TownHP          = 0;               // Go to town if life is under designated percent.
         Config.TownMP          = 0;               // Go to town if mana is under designated percent.
   //! INVENTORY SETTINGS --------------------------------------------------------------
      Config.Inventory[0] = [0,0,0,0,0,0,0,0,0,0];
      Config.Inventory[1] = [0,0,0,0,0,0,0,0,0,0];
      Config.Inventory[2] = [0,0,0,0,0,0,0,0,0,0];
      Config.Inventory[3] = [0,0,0,0,0,0,0,0,0,0];

      Config.StashGold = 100000;

      Config.BeltColumn[0] = "hp";
      Config.BeltColumn[1] = "hp";
      Config.BeltColumn[2] = "mp";
      Config.BeltColumn[3] = "mp";

      Config.MinColumn[0] = 3;
      Config.MinColumn[1] = 3;
      Config.MinColumn[2] = 3;
      Config.MinColumn[3] = 3;
   //! PICK LIST -----------------------------------------------------------------------
      Config.PickitFiles.push("w-kolton.nip");
      Config.PickitFiles.push("w-potions.nip");
      Config.PickitFiles.push("w-LLD.nip");
      Config.PickRange = 40;
      Config.FastPick = true;
   //! ADDITION CONFIG -----------------------------------------------------------------
      //+ Item identification settings ----------------------------------------------
         Config.ItemInfo                     = false;    // Log stashed, skipped (due to no space) or sold items.
         Config.ItemInfoQuality              = [];       // The quality of sold items to log. See NTItemAlias.dbl for values. Example: Config.ItemInfoQuality = [6, 7, 8];
         Config.CainID.Enable                = false;    // Identify items at Cain
         Config.CainID.MinGold               = 2500000;  // Minimum gold (stash + character) to have in order to use Cain.
         Config.CainID.MinUnids              = 3;        // Minimum number of unid items in order to use Cain.
         Config.FieldID                      = false;    // Identify items in the field instead of going to town.
         Config.DroppedItemsAnnounce.Enable  = false;    // Announce Dropped Items to in-game newbs
         Config.DroppedItemsAnnounce.Quality = [];       // Quality of item to announce. See NTItemAlias.dbl for values. Example: Config.DroppedItemsAnnounce.Quality = [6, 7, 8];
      //+ Manager item log screen ---------------------------------------------------
         Config.LogKeys          = false;          // Log keys on item viewer
         Config.LogOrgans        = false;          // Log organs on item viewer
         Config.LogLowRunes      = false;          // Log low runes (El - Dol) on item viewer
         Config.LogMiddleRunes   = false;          // Log middle runes (Hel - Mal) on item viewer
         Config.LogHighRunes     = false;          // Log high runes (Ist - Zod) on item viewer
         Config.LogLowGems       = false;          // Log low gems (chipped, flawed, normal) on item viewer
         Config.LogHighGems      = false;          // Log high gems (flawless, perfect) on item viewer
         Config.SkipLogging      = [];             // Custom log skip list. Set as three digit item code or classid. Example: ["tes", "ceh", 656, 657] will ignore logging of essences.
         Config.ShowCubingInfo   = false;          // Show cubing messages on console
      //+ Repair settings -----------------------------------------------------------
         Config.CubeRepair       = false;          // Repair weapons with Ort and armor with Ral rune. Don't use it if you don't understand the risk of losing items.
         Config.RepairPercent    = 40;             // Durability percent of any equipped item that will trigger repairs.
      //+ Gambling config -----------------------------------------------------------
         Config.Gamble           = false;
         Config.GambleGoldStart  = 1000000;
         Config.GambleGoldStop   = 500000;
         Config.GambleItems.push("Amulet");
         Config.GambleItems.push("Ring");
         Config.GambleItems.push("Circlet");
         Config.GambleItems.push("Coronet");
         Config.GambleItems.push("monarch");
   //! CUBING CONFIG -------------------------------------------------------------------
      Config.Cubing             = false;           // Set to true to enable cubing.
      Config.MakeRunewords      = false;           // Set to true to enable runeword making/rerolling
   //! PUBLIC GAMES OPTIONS ------------------------------------------------------------
      Config.Greetings          = [];              // Example: ["Hello, $name (level $level $class)"]
      Config.DeathMessages      = [];              // Example: ["Watch out for that $killer, $name!"]
      Config.Congratulations    = [];              // Example: ["Congrats on level $level, $name!"]
      Config.ShitList           = false;           // Blacklist hostile players so they don't get invited to party.
      Config.UnpartyShitlisted  = false;           // Leave party if someone invited a blacklisted player.
   //! GENERAL CONFIG ------------------------------------------------------------------
      Config.AutoMap            = false;           // Set to true to open automap at the beginning of the game.
      Config.LastMessage        = "";              // Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
      Config.MinGameTime        = 60;              // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
      Config.MaxGameTime        = 0;               // Maximum game time in seconds. Quit game when limit is reached.
      Config.TeleSwitch         = false;           // Switch to secondary (non-primary) slot when teleporting more than 5 nodes.
      Config.OpenChests         = false;           // Open chests. Controls key buying.
      Config.MiniShopBot        = true;            // Scan items in NPC shops.
      Config.PacketShopping     = false;           // Use packets to shop. Improves shopping speed.
      Config.TownCheck          = false;           // Go to town if out of potions
      Config.LogExperience      = false;           // Print experience statistics in the manager.
      Config.PingQuit           = [{Ping: 0, Duration: 0}];  // Quit if ping is over the given value for over the given time period in seconds.
      Config.Silence            = false;           // Make the bot not say a word. Do not use in combination with LocalChat
      Config.ScanShrines        = [15, 2, 3];      // 15 = XP, 2 = Health, 3 = Mana
      Config.MFSwitchPercent    = 0;               // Boss life % to switch to secondary weapon slot. Set to 0 to disable.
      Config.PrimarySlot        = 0;               // Set to use specific weapon slot as primary weapon slot: -1 = disabled, 0 = slot I, 1 = slot II
      Config.WaypointMenu       = true;
      Config.WalkIfManaLessThan = 10;
   //! NOTIFICATION CONFIG -------------------------------------------------------------
      Config.RogerThatTelegram.Active = false;
         Config.RogerThatTelegram.Notify.Trade = false;
         Config.RogerThatTelegram.Notify.HotIP = true;
         Config.RogerThatTelegram.Notify.DiabloClone = true;
   //! DIABLO CLONE CONFIG -------------------------------------------------------------
      Config.StopOnDClone       = false;           // Go to town and idle as soon as Diablo walks the Earth
      Config.SoJWaitTime        = 5;               // Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
      Config.KillDclone         = false;           // Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
      Config.DCloneQuit         = false;           // 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled
   //! MONSTER SKIP CONFIG -------------------------------------------------------------
      Config.SkipImmune  = [];
      Config.SkipEnchant = [];
      Config.SkipAura    = [];
   //! ATTACK CONFIG -------------------------------------------------------------------
      Config.AttackSkill[0]  = -1;                 // Preattack skill.
      Config.AttackSkill[1]  = -1;                 // Primary skill to bosses.
      Config.AttackSkill[2]  = -1;                 // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
      Config.AttackSkill[3]  = -1;                 // Primary skill to others.
      Config.AttackSkill[4]  = -1;                 // Primary untimed skill to others. Keep at -1 if Config.AttackSkill[3] is untimed skill.
      Config.AttackSkill[5]  = -1;                 // Secondary skill if monster is immune to primary.
      Config.AttackSkill[6]  = -1;                 // Secondary untimed skill if monster is immune to primary untimed.

      Config.LowManaSkill[0] = -1;                 // Timed low mana skill.
      Config.LowManaSkill[1] = -1;                 // Untimed low mana skill.

      Config.CustomAttack = {
         //"Monster Name": [-1, -1]
      };

      Config.NoTele               = false;         // Restrict char from teleporting. Useful for low level/low mana chars
      Config.Dodge                = false;         // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
      Config.DodgeRange           = 15;            // Distance to keep from monsters.
      Config.DodgeHP              = 100;           // Dodge only if HP percent is less than or equal to Config.DodgeHP. 100 = always dodge.
      Config.BossPriority         = true;          // Set to true to attack Unique/SuperUnique monsters first when clearing
      Config.ClearType            = 0xF;           // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
      Config.TeleStomp            = false;         // Use merc to attack bosses if they're immune to attacks, but not to physical damage
      Config.Wereform             = false;         // 0 / false - don't shapeshift, 1 / "Werewolf" - change to werewolf, 2 / "Werebear" - change to werebear
      Config.Curse[0] = 0;                         // Boss curse. Use skill number or set to 0 to disable.
      Config.Curse[1] = 0;                         // Other monsters curse. Use skill number or set to 0 to disable.

      Config.ExplodeCorpses       = 0;             // Explode corpses. Use skill number or 0 to disable. 74 = Corpse Explosion, 83 = Poison Explosion
      Config.Golem                = "None";        // Golem. 0 or "None" = don't summon, 1 or "Clay" = Clay Golem, 2 or "Blood" = Blood Golem, 3 or "Fire" = Fire Golem
      Config.Skeletons            = 0;             // Number of skeletons to raise. Set to "max" to auto detect, set to 0 to disable.
      Config.SkeletonMages        = 0;             // Number of skeleton mages to raise. Set to "max" to auto detect, set to 0 to disable.
      Config.Revives              = 0;             // Number of revives to raise. Set to "max" to auto detect, set to 0 to disable.
      Config.PoisonNovaDelay      = 2;             // Delay between two Poison Novas in seconds.
      Config.ActiveSummon         = false;         // Raise dead between each attack. If false, it will raise after clearing a spot.
      Config.ReviveUnstackable    = true;          // Revive monsters that can move freely after you teleport.
      Config.IronGolemChicken     = 30;            // Exit game if Iron Golem's life is less or equal to designated percent.
   //! AUTO LEVEL ----------------------------------------------------------------------
      Config.AutoSkill.Enabled    = false;         // Enable or disable AutoSkill system
      Config.AutoSkill.Save       = 0;             // Number of skill points that will not be spent and saved
      Config.AutoSkill.Build      = [];

      Config.AutoStat.Enabled     = false;         // Enable or disable AutoStat system
      Config.AutoStat.Save        = 0;             // Number stat points that will not be spent and saved.
      Config.AutoStat.BlockChance = 0;             // An integer value set to desired block chance. This is ignored in classic.
      Config.AutoStat.UseBulk     = true;          // Set true to spend multiple stat points at once (up to 100), or false to spend singe point at a time.
      Config.AutoStat.Build       = [];

      Config.AutoBuild.Enabled    = true;          // This will enable or disable the AutoBuild system
      Config.AutoBuild.Template   = "Summoner";    // The name of the build associated with an existing
      Config.AutoBuild.Verbose    = true;          // Allows script to print messages in console
      Config.AutoBuild.DebugMode  = true;          // Debug mode prints a little more information to console and logs activity to /logs/AutoBuild.CharacterName._MM_DD_YYYY.log
}