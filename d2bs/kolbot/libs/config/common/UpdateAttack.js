function UpdateAttack() {
    //- This function is almost like an auto build, as you lvl the attack configuration is updated, the function always checks if you have the skill point, otherwise he uses a lower skill
    let classes = ["Amazon", "Sorceress", "Necromancer", "Paladin", "Barbarian", "Druid", "Assassin"],
        charClass = classes[me.classid],
        typeOfAmazon,
        typeOfSorc,
        typeOfNecro,
        typeOfPally,
        typeOfDruid,
        skill1,
        skill2;

    function useSkill (skillsOrder) {
        for (let i = 0; i < skillsOrder.length; i++) {
            if (skillsOrder[i] !== undefined && me.getSkill(skillsOrder[i], 0)) {
                return skillsOrder[i];
            }
        }

        return 0;
    }

    if (me.ingame && me.gameReady) {
        switch (charClass) {
            case "Amazon":
                if (me.getSkill(6, 0) >= 1) {
                    typeOfAmazon = "Bow";
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc1" + typeOfAmazon + " Attack";
                    Config.SkipImmune = ["physical"];
                } else {
                    typeOfAmazon = "Javelin";
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc9" + typeOfAmazon + " Attack";
                    Config.SkipImmune = ["lightning"];
                }

                if (me.charlvl <= 30) {
                    switch (typeOfAmazon) {
                        case "Javelin":
                            skill1 = useSkill([24, 14, 10]); // charged strike > power strike > jab
                            skill2 = skill1;

                            break;
                        case "Bow":
                            skill1 = useSkill([31, 26, 12, 6]); // freezing arrow > strafe > multiple shot > magic arrow
                            skill2 = skill1;

                            break;
                    }

                    Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                } else {
                    Config.AttackSkill = Config.AttackZonSkill;
                    Config.LowManaSkill = Config.LowManaZonSkill;
                    Config.UpdateSkill = false;
                }

                Config.LightningFuryDelay = 10; // Lightning fury interval in seconds. LF is treated as timed skill.
                Config.SummonValkyrie = true;   // Summon Valkyrie

                break;
            case "Sorceress":
                if (me.getSkill(36, 0) >= 1) {
                    typeOfSorc = "Fire";
                    Config.SkipImmune = ["fire"];
                    Config.UpdateAttackMsg = "ÿc9Updated Attack ÿc2" + charClass + " ÿc1" + typeOfSorc + " Attack";
                } else if (me.getSkill(39, 0) >= 1) {
                    typeOfSorc = "Cold";
                    Config.SkipImmune = ["cold"];
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc3" + typeOfSorc + " Attack";
                } else if (me.getSkill(38, 0) >= 1) {
                    typeOfSorc = "Lighting";
                    Config.SkipImmune = ["lightning"];
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc9" + typeOfSorc + " Attack";
                } else {
                    typeOfSorc = "";
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " Attack -ÿc1  undefined type of sorc";
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
                        case "Lighting":
                            skill1 = useSkill([18, 49, 38]); // chain lightning > lightning > charged bolt
                            skill2 = useSkill([49, 18, 38]); // lightning > chain lightning > charged bolt

                            break;
                        case "Fire":
                            skill1 = useSkill([47, 36]);     // fire ball > fire bolt
                            skill2 = useSkill([56, 47, 36]); // meteor > fire ball > fire bolt

                            break;
                        case "Cold":
                            skill1 = useSkill([55, 45, 39]); // glacial spike > ice blast > ice bolt
                            skill2 = useSkill([59, 45, 39]); // blizzard > ice blast > ice bolt

                            break;
                    }

                    Config.AttackSkill = [skill2, skill2, skill1, skill2, skill1, 0, 0];
                    Config.LowManaSkill = [0, 0];

                } else {
                    switch (typeOfSorc) {
                        case "Lighting":
                            Config.AttackSkill = Config.AttackSorcLightSkill;
                            Config.LowManaSkill = Config.LowManaSorcLightSkill;

                            break;
                        case "Fire":
                            Config.AttackSkill = Config.AttackSorcFireSkill;
                            Config.LowManaSkill = Config.LowManaSorcFireSkill;

                            break;
                        case "Cold":
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
            case "Necromancer":
                if (me.getSkill(67, 0) >= 1) {
                    typeOfNecro = "Spear";
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc3" + typeOfNecro + " Attack";
                    Config.SkipImmune = ["magic"];
                } else {
                    typeOfNecro = "Summoning";
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc1" + typeOfNecro + " Attack";
                }

                if (me.charlvl <= 30) {
                    switch (typeOfNecro) {
                        case "Summoning":
                            skill1 = 0;
                            skill2 = 0;

                            break;
                        case "Spear":
                            skill1 = useSkill([84, 67]); // bone spear > teeth
                            skill2 = skill1;

                            break;
                    }

                    Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                } else {
                    Config.AttackSkill = Config.AttackNecSkill;
                    Config.LowManaSkill = Config.LowManaNecSkill;
                    Config.UpdateSkill = false;
                }

                Config.Curse[0] = 66;               // Boss curse. Use skill number or set to 0 to disable.
                Config.Curse[1] = 66;               // Other monsters curse. Use skill number or set to 0 to disable.
                Config.ExplodeCorpses = 74;         // Explode corpses. Use skill number or 0 to disable. 74 = Corpse Explosion, 83 = Poison Explosion
                Config.Golem = "Clay";              // Golem. 0 or "None" = don't summon, 1 or "Clay" = Clay Golem, 2 or "Blood" = Blood Golem, 3 or "Fire" = Fire Golem
                Config.Skeletons = "max";           // Number of skeletons to raise. Set to "max" to auto detect, set to 0 to disable.
                Config.SkeletonMages = "max";       // Number of skeleton mages to raise. Set to "max" to auto detect, set to 0 to disable.
                Config.Revives = "max";             // Number of revives to raise. Set to "max" to auto detect, set to 0 to disable.
                Config.PoisonNovaDelay = 2;         // Delay between two Poison Novas in seconds.
                Config.ActiveSummon = false;        // Raise dead between each attack. If false, it will raise after clearing a spot.
                Config.ReviveUnstackable = true;    // Revive monsters that can move freely after you teleport.
                Config.IronGolemChicken = 30;       // Exit game if Iron Golem's life is less or equal to designated percent.

                break;
            case "Paladin":
                if (me.getSkill(103, 0) >= 1) {
                    typeOfPally = "FOH";
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc9" + typeOfPally + " Attack";
                    Config.SkipImmune = ["lightning"];
                } else {
                    typeOfPally = "Hammer";
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc3" + typeOfPally + " Attack";
                    Config.SkipImmune = ["magic"];
                }

                if (me.charlvl <= 30) {
                    switch (typeOfPally) {
                        case "FOH":
                            skill1 = useSkill([121, 116, 111, 106, 96, 97]); // foh > conversion > vengeance > zeal > sacrifice > smite
                            skill2 = useSkill([123, 119, 114, 103, 98]); // conviction > sanctuary > holy freeze > thorns > might
                            Config.Vigor = true;  // Swith to Vigor when running
                            Config.Charge = true;  // Use Charge when running

                            break;
                        case "Hammer":
                            skill1 = useSkill([112, 97]);   // blessed hammer > smite
                            skill2 = useSkill([113, 98]);   // concentration > might
                            Config.Vigor = true;            // Swith to Vigor when running
                            Config.Charge = false;          // Use Charge when running

                            break;
                    }

                    Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                } else {
                    Config.AttackSkill = Config.AttackPallySkill;
                    Config.LowManaSkill = Config.LowManaPallySkill;
                    Config.UpdateSkill = false;
                }

                Config.AvoidDolls = true;       // Try to attack dolls from a greater distance with hammerdins.
                Config.Redemption = [50, 50];   // Switch to Redemption after clearing an area if under designated life or mana. Format: [lifepercent, manapercent]

                break;
            case "Barbarian":
                if (me.charlvl <= 30) {
                    skill1 = useSkill([151, 144, 139, 126]); // whirlwind > concentrate > stun > bash
                    skill2 = useSkill([132]); // leap

                    Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                    Config.LowManaSkill = [0, 0];
                } else {
                    Config.AttackSkill = Config.AttackBarbSkill;
                    Config.LowManaSkill = Config.LowManaBarbSkill;
                    Config.UpdateSkill = false;
                }

                Config.SkipImmune = ["physical"];
                Config.FindItem = false;        // Use Find Item skill on corpses after clearing.
                Config.FindItemSwitch = false;  // Switch to non-primary slot when using Find Item skills
                Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc1 Attack";

                break;
            case "Druid":
                if (me.getSkill(223, 0) >= 1) {
                    typeOfDruid = "Wolf";
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc1" + typeOfDruid + " Attack";
                    Config.Wereform = 1;
                } else {
                    typeOfDruid = "Tornado";
                    Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc3" + typeOfDruid + " Attack";
                }

                if (me.charlvl <= 30) {

                    switch (typeOfDruid) {
                        case "Wolf":
                            skill1 = useSkill([248, 232]); // fury > feral rage
                            skill2 = skill1;

                            break;
                        case "Tornado":
                            skill1 = useSkill([245, 240]); // tornado > twister
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
                Config.SummonVine = "Poison Creeper";   // 0 = disabled, 1 / "Poison Creeper", 2 / "Carrion Vine", 3 / "Solar Creeper"

                break;
            case "Assassin":
                if (me.charlvl <= 30) {
                    skill1 = useSkill([]);
                    skill2 = skill1;
                    Config.AttackSkill = [skill1, skill1, skill2, skill1, skill2, 0, 0];
                } else {
                    Config.AttackSkill = Config.AttackSinSkill;
                    Config.LowManaSkill = Config.LowManaSinSkill;
                    Config.UpdateSkill = false;
                }

                Config.SkipImmune = ["lightning"];
                Config.UseTraps = true;                         // Set to true to use traps
                Config.Traps = [271, 271, 271, 276, 276];       // Skill IDs for traps to be cast on all mosters except act bosses.
                Config.BossTraps = [271, 271, 271, 271, 271];   // Skill IDs for traps to be cast on act bosses.
                Config.SummonShadow = "Master";                 // 0 = don't summon, 1 or "Warrior" = summon Shadow Warrior, 2 or "Master" = summon Shadow Master
                Config.UseFade = true;                          // Set to true to use Fade prebuff.
                Config.UseBoS = false;                          // Set to true to use Burst of Speed prebuff.
                Config.UseVenom = false;                        // Set to true to use Venom prebuff. Set to false if you don't have the skill and have Arachnid Mesh - it will cause connection drop otherwise.
                Config.UseCloakofShadows = true;                // Set to true to use Cloak of Shadows while fighting. Useful for blinding regular monsters/minions.
                Config.AggressiveCloak = false;                 // Move into Cloak range or cast if already close
                Config.UpdateAttackMsg = "ÿc9Updated: ÿc2" + charClass + " ÿc9 Attack";

                break;
        }

        return true;
    }

    return false
}