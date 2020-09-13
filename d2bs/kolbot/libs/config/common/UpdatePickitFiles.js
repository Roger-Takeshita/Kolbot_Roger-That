function UpdatePickitFiles() {
    if (Config.RogerThatInventoryFlag) {
        Config.PickitFiles.push("w-RogerThatEarlyLadder.nip");
        Config.PickitFiles.push("w-RogerThatMidLadder.nip");
        Config.PickitFiles.push("w-RogerThatEndLadder.nip");
    } else {
        // Config.PickitFiles.push("w-RogerThatEarlyLadder.nip");
        // Config.PickitFiles.push("w-RogerThatMidLadder.nip");
        Config.PickitFiles.push("w-RogerThatEndLadder.nip");
    }
    print("ÿc9Added: ÿc4Ladder Pickit Files");
}