function UpdateRunewords() {
    Config.Runewords.push([Runeword.Oath,                         "Ettin Axe",             Roll.Eth]);    // Make Oath Ettin Axe
    Config.Runewords.push([Runeword.Oath,                         "Berserker Axe",         Roll.Eth]);    // Make Oath Beserker Axe
    Config.Runewords.push([Runeword.Oath,                         "Small Crescent",        Roll.Eth]);    // Make Oath Small Crescent
    Config.Runewords.push([Runeword.Insight,                      "Giant Thresher",        Roll.Eth]);    // Make ethereal Insight Giant Thresher
    Config.Runewords.push([Runeword.Insight,                      "Great Poleaxe",         Roll.Eth]);    // Make ethereal Insight Great Poleaxe
    Config.Runewords.push([Runeword.Insight,                      "Thresher",              Roll.Eth]);    // Make ethereal Insight Thresher
    Config.Runewords.push([Runeword.Insight,                      "Cryptic Axe",           Roll.Eth]);    // Make ethereal Insight Cryptic Axe
    Config.Runewords.push([Runeword.Insight,                      "Colossus Voulge",       Roll.Eth]);    // Make ethereal Insight Colossus Voulge
    Config.Runewords.push([Runeword.Insight,                      "Elder Staff",           Roll.Eth]);    // Make ethereal Insight Elder Staff
    Config.Runewords.push([Runeword.Insight,                      "Cedar Staff",           Roll.Eth]);    // Make ethereal Insight Cedar Staff
    Config.Runewords.push([Runeword.Insight,                      "Battle Staff",          Roll.Eth]);    // Make ethereal Insight Battle Staff
    Config.Runewords.push([Runeword.Insight,                      "Elder Staff",        Roll.NonEth]);    // Make non-ethereal Insight Elder Staff
    Config.Runewords.push([Runeword.Insight,                      "Cedar Staff",        Roll.NonEth]);    // Make non-ethereal Insight Cedar Staff
    Config.Runewords.push([Runeword.Insight,                      "Battle Staff",       Roll.NonEth]);    // Make non-ethereal Insight Battle Staff
    Config.Runewords.push([Runeword.Sanctuary,                    "Hyperion",           Roll.NonEth]);    // Make Hyperion Sanctuary
    Config.Runewords.push([Runeword.Sanctuary,                    "Sacred Targe",       Roll.NonEth]);    // Make Sanctuary Sacred Targe
    Config.Runewords.push([Runeword.Sanctuary,                    "Sacred Rondache",    Roll.NonEth]);    // Make Sanctuary Sacred Rondache
    Config.Runewords.push([Runeword.Sanctuary,                    "Kurast Shield",      Roll.NonEth]);    // Make Sanctuary Kurast Shield
    Config.Runewords.push([Runeword.Sanctuary,                    "Zakarum Shield",     Roll.NonEth]);    // Make Sanctuary Zakarum Shield
    Config.Runewords.push([Runeword.Sanctuary,                    "Vortex Shield",      Roll.NonEth]);    // Make Sanctuary Vortex Shield
    Config.Runewords.push([Runeword.Spirit,                       "Monarch",            Roll.NonEth]);    // Make Spirit Monarch
    Config.Runewords.push([Runeword.Spirit,                       "Rondache",           Roll.NonEth]);    // Make Spirit Hondache
    Config.Runewords.push([Runeword.Spirit,                       "Targe",              Roll.NonEth]);    // Make Spirit Target
    Config.Runewords.push([Runeword.Spirit,                       "Rondache",           Roll.NonEth]);    // Make Spirit Rondache
    Config.Runewords.push([Runeword.Spirit,                       "Heraldic Shield",    Roll.NonEth]);    // Make Spirit Heraldic Shield
    Config.Runewords.push([Runeword.Spirit,                       "Aerin Shield",       Roll.NonEth]);    // Make Spirit Aerin Shield
    Config.Runewords.push([Runeword.Spirit,                       "Crown Shield",       Roll.NonEth]);    // Make Spirit Crown Shield
    Config.Runewords.push([Runeword.Spirit,                       "Akaran Targe",       Roll.NonEth]);    // Make Spirit Akaran Targe
    Config.Runewords.push([Runeword.Spirit,                       "Akaran Rondache",    Roll.NonEth]);    // Make Spirit Akaran Rondache
    Config.Runewords.push([Runeword.Spirit,                       "Protector Shield",   Roll.NonEth]);    // Make Spirit Protector Shield
    Config.Runewords.push([Runeword.Spirit,                       "Gilded Shield",      Roll.NonEth]);    // Make Spirit Gilded Shield
    Config.Runewords.push([Runeword.Spirit,                       "Royal Shield",       Roll.NonEth]);    // Make Spirit Royal Shield
    Config.Runewords.push([Runeword.Spirit,                       "Sacred Targe",       Roll.NonEth]);    // Make Spirit Sacred Targe
    Config.Runewords.push([Runeword.Spirit,                       "Sacred Rondache",    Roll.NonEth]);    // Make Spirit Sacred Rondache
    Config.Runewords.push([Runeword.Spirit,                       "Kurast Shield",      Roll.NonEth]);    // Make Spirit Kurast Shield
    Config.Runewords.push([Runeword.Spirit,                       "Zakarum Shield",     Roll.NonEth]);    // Make Spirit Zakarum Shield
    Config.Runewords.push([Runeword.Spirit,                       "Vortex Shield",      Roll.NonEth]);    // Make Spirit Vortex Shield
    Config.Runewords.push([Runeword.Harmony,                      "Matriarchal Bow",    Roll.NonEth]);    // Make Harmony Matriarchal Bow
    Config.KeepRunewords.push("      [type] == shield # ([coldresist] == 70 || [coldresist] == 115)");    // Resist 70/115 Sanctuary
    Config.KeepRunewords.push("     ([type] == polearm || [type] == staff) # [meditationaura] == 17");    // Insight Meditation lvl 17
    Config.KeepRunewords.push("            [type] == shield || [type] == auricshields # [fcr] == 35");    // 35% Fcr Spirit
    Config.KeepRunewords.push("[type] == bow # ([enhanceddamage] == 275 || [enhanceddamage] == 290)");    // 275% or 290% ed Harmony
    Config.KeepRunewords.push("[type] == axe # ([enhanceddamage] == 340 || [enhanceddamage] == 355)");    // 340% or 355% ed Oath
}