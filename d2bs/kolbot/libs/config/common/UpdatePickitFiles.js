function UpdatePickitFiles() {
    if (me.ladder) {
        if (Config.RogerThatInventoryFlag) {
            Config.PickitFiles.push("w-RogerThatEarlyLadder.nip");
            Config.PickitFiles.push("w-RogerThatMidLadder.nip");
            Config.PickitFiles.push("w-RogerThatMuleLadder.nip");
        }

        Config.PickitFiles.push("w-RogerThatEndLadder.nip");
    } else {
        if (Config.RogerThatInventoryFlag) {
            Config.PickitFiles.push("w-RogerThatMule.nip");
        }
    }
}