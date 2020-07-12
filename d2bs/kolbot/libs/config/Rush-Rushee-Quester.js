//! Generic
//? ██████╗ ██╗   ██╗███████╗██╗  ██╗███████╗███████╗     ██████╗ ██╗   ██╗███████╗███████╗████████╗███████╗██████╗
//? ██╔══██╗██║   ██║██╔════╝██║  ██║██╔════╝██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗
//? ██████╔╝██║   ██║███████╗███████║█████╗  █████╗      ██║   ██║██║   ██║█████╗  ███████╗   ██║   █████╗  ██████╔╝
//? ██╔══██╗██║   ██║╚════██║██╔══██║██╔══╝  ██╔══╝      ██║▄▄ ██║██║   ██║██╔══╝  ╚════██║   ██║   ██╔══╝  ██╔══██╗
//? ██║  ██║╚██████╔╝███████║██║  ██║███████╗███████╗    ╚██████╔╝╚██████╔╝███████╗███████║   ██║   ███████╗██║  ██║
//? ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝     ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝

function LoadConfig() {
   //! FOLLOW LEADER -------------------------------------------------------------------
      Config.Leader   = "TMFSorc-I";
      Config.QuitList = [""];
      Config.QuitListMode = 0;
      Config.QuitListDelay = [1, 10];
   //! SCRIPTS -------------------------------------------------------------------------
      Scripts.Rushee    =  true;
         Config.Rushee.Quester =  true;
         Config.Rushee.Bumper  = false;
   //! INVENTORY SETTINGS --------------------------------------------------------------
      Config.Inventory[0] = [0,0,0,0,0,0,0,0,0,0];
      Config.Inventory[1] = [0,0,0,0,0,0,0,0,0,0];
      Config.Inventory[2] = [0,0,0,0,0,0,0,0,0,0];
      Config.Inventory[3] = [0,0,0,0,0,0,0,0,0,0];

      Config.BeltColumn   = ["hp", "hp", "hp", "hp"];
      Config.MinColumn    = [3, 3, 3, 3];
      Config.StashGold    = 10000;
   //! TOWN SETTINGS / POTION SETTINGS / CHICKEN SETTINGS ------------------------------
      //+ Town settings -------------------------------------------------------------
         Config.HealHP        = 90;                      // Go to a healer if under designated percent of life.
         Config.HealMP        =  0;                      // Go to a healer if under designated percent of mana.
         Config.HealStatus    = true;                    // Go to a healer if poisoned or cursed
         Config.UseMerc       = true;                    // Use merc. This is ignored and always false in d2classic.
         Config.MercWatch     = true;                    // Instant merc revive during battle.
      //+ Potion settings -----------------------------------------------------------
         Config.UseHP         = 85;                      // Drink a healing potion if life is under designated percent.
         Config.UseRejuvHP    = 65;                      // Drink a rejuvenation potion if life is under designated percent.
         Config.UseMP         = 40;                      // Drink a mana potion if mana is under designated percent.
         Config.UseRejuvMP    = 10;                      // Drink a rejuvenation potion if mana is under designated percent.
         Config.UseMercHP     = 85;                      // Give a healing potion to your merc if his/her life is under designated percent.
         Config.UseMercRejuv  = 40;                      // Give a rejuvenation potion to your merc if his/her life is under designated percent.
         Config.HPBuffer      =  0;                      // Number of healing potions to keep in inventory.
         Config.MPBuffer      =  0;                      // Number of mana potions to keep in inventory.
         Config.RejuvBuffer   =  0;                      // Number of rejuvenation potions to keep in inventory.
      //+ Chicken settings ----------------------------------------------------------
         Config.LifeChicken   =  0;                      // Exit game if life is less or equal to designated percent.
         Config.ManaChicken   =  0;                      // Exit game if mana is less or equal to designated percent.
         Config.MercChicken   =  0;                      // Exit game if merc's life is less or equal to designated percent.
         Config.TownHP        = 55;                      // Go to town if life is under designated percent.
         Config.TownMP        =  0;                      // Go to town if mana is under designated percent.
         Config.GoToTownHP    = false;                   // Go to town if out of healing potions
         Config.GoToTownMP    = false;                   // Go to town if out of mana potions
   //! PICK LIST -----------------------------------------------------------------------
      // Config.PickitFiles.push("w-bot1.nip");
      // Config.PickitFiles.push("w-bot2.nip");
      // Config.PickitFiles.push("w-bot3.nip");
      // Config.PickitFiles.push("w-bot4.nip");
      // Config.PickitFiles.push("w-potions.nip");
      // Config.PickitFiles.push("w-RogerThatEarlyLadder.nip");
      // Config.PickitFiles.push("w-RogerThatMidLadder.nip");
      // Config.PickitFiles.push("w-RogerThatEndLadder.nip");
      // Config.PickitFiles.push("w-RogerThat.nip");
      // Config.PickitFiles.push("w-LLD.nip");
      Config.PickRange = 40;
      Config.FastPick  = true;
   //! IN GAME CONFIG ------------------------------------------------------------------
      Config.ManualPlayPick = false;
      Config.OpenChests = false;                         // Open chests. Controls key buying. true = open only chests, 2 = open everything body, rocks...
      Config.AutoMap = false;                            // Set to true to open automap at the beginning of the game.
   //! GENERAL CONFIG ------------------------------------------------------------------
      Config.LastMessage = "";                           // Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
      Config.MinGameTime = 0;                            // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
      Config.MaxGameTime = 0;                            // Maximum game time in seconds. Quit game when limit is reached.
      Config.TeleSwitch = false;                         // Switch to secondary (non-primary) slot when teleporting more than 5 nodes.
      Config.MiniShopBot = true;                         // Scan items in NPC shops.
      Config.PacketShopping = false;                     // Use packets to shop. Improves shopping speed.
      Config.TownCheck = false;                          // Go to town if out of potions
      Config.LogExperience = false;                      // Print experience statistics in the manager.
      Config.PingQuit = [{Ping: 0, Duration: 0}];        // Quit if ping is over the given value for over the given time period in seconds.
      Config.Silence = false;                            // Make the bot not say a word. Do not use in combination with LocalChat
      Config.ScanShrines = [15, 2, 3];                   // 15 = XP, 2 = Health, 3 = Mana
      Config.MFSwitchPercent = 0;                        // Boss life % to switch to non-primary weapon slot. Set to 0 to disable.
      Config.PrimarySlot = -1;                           // Set to use specific weapon slot as primary weapon slot: -1 = disabled, 0 = slot I, 1 = slot II
      Config.WaypointMenu = true;
      Config.WalkIfManaLessThan = 10;
   //! NOTIFICATION CONFIG -------------------------------------------------------------
      Config.RogerThatTelegram.Active = false;
         Config.RogerThatTelegram.Notify.Trade = false;
         Config.RogerThatTelegram.Notify.HotIP = true;
         Config.RogerThatTelegram.Notify.DiabloClone = true;
   //! PUBLIC GAMES OPTIONS ------------------------------------------------------------
      Config.LocalChat.Enabled = true;                   // enable the LocalChat system
         Config.LocalChat.Toggle = false;                // optional, set to KEY value to toggle through modes 0, 1, 2
         Config.LocalChat.Mode = 1;                      // 0 = disabled, 1 = chat from 'say' (recommended), 2 = all chat (for manual play)
         Config.PublicMode = 2;                          // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
   //! MONSTER SKIP CONFIG -------------------------------------------------------------
      Config.SkipImmune  = [];
      Config.SkipEnchant = [];
      Config.SkipAura    = [];
      //Config.SkipException = [getLocaleString(2851), getLocaleString(2852), getLocaleString(2853)]; // vizier, de seis, infector
   //! ATTACK CONFIG -------------------------------------------------------------------
      Config.AttackSkill[0] = 0;                         // Preattack skill.
      Config.AttackSkill[1] = 0;                         // Primary skill for bosses.
      Config.AttackSkill[2] = 0;                         // Backup/Immune skill for bosses.
      Config.AttackSkill[3] = 0;                         // Primary skill for others.
      Config.AttackSkill[4] = 0;                         // Backup/Immune skill for others.

      Config.BossPriority = true;                        // Set to true to attack Unique/SuperUnique monsters first when clearing
      Config.ClearType    = 0xF;                         // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
}