function UpdateInventory () {
    for (let i = 0; i < Config.RogerThatInventory1.length; i++) {
        if (me.name === Config.RogerThatInventory1[i]) {
            Config.Inventory[0] = Config.Inventory1[0];
            Config.Inventory[1] = Config.Inventory1[1];
            Config.Inventory[2] = Config.Inventory1[2];
            Config.Inventory[3] = Config.Inventory1[3];
            Config.UpdateInventoryMsg = "ÿc9Updated: ÿc2Inventory ÿc2One";
            return true;
        }
    }

    for (let i = 0; i < Config.RogerThatInventory2.length; i++) {
        if (me.name === Config.RogerThatInventory2[i]) {
            Config.Inventory[0] = Config.Inventory2[0];
            Config.Inventory[1] = Config.Inventory2[1];
            Config.Inventory[2] = Config.Inventory2[2];
            Config.Inventory[3] = Config.Inventory2[3];
            Config.UpdateInventoryMsg = "ÿc9Updated: ÿc2Inventory ÿc2Two";
            return true;
        }
    }

    for (let i = 0; i < Config.RogerThatInventory3.length; i++) {
        if (me.name === Config.RogerThatInventory3[i]) {
            Config.Inventory[0] = Config.Inventory3[0];
            Config.Inventory[1] = Config.Inventory3[1];
            Config.Inventory[2] = Config.Inventory3[2];
            Config.Inventory[3] = Config.Inventory3[3];
            Config.UpdateInventoryMsg = "ÿc9Updated: ÿc2Inventory ÿc2Three";
            return true;
        }
    }

    for (let i = 0; i < Config.RogerThatInventory4.length; i++) {
        if (me.name === Config.RogerThatInventory4[i]) {
            Config.Inventory[0] = Config.Inventory4[0];
            Config.Inventory[1] = Config.Inventory4[1];
            Config.Inventory[2] = Config.Inventory4[2];
            Config.Inventory[3] = Config.Inventory4[3];
            Config.UpdateInventoryMsg = "ÿc9Updated: ÿc2Inventory ÿc2Four";
            return true;
        }
    }

    for (let i = 0; i < Config.RogerThatInventory5.length; i++) {
        if (me.name == Config.RogerThatInventory5[i]) {
            Config.Inventory[0] = Config.Inventory5[0];
            Config.Inventory[1] = Config.Inventory5[1];
            Config.Inventory[2] = Config.Inventory5[2];
            Config.Inventory[3] = Config.Inventory5[3];
            Config.UpdateInventoryMsg = "ÿc9Updated: ÿc2Inventory ÿc2Five";
            return true;
        }
    }

    for (let i = 0; i < Config.RogerThatInventory6.length; i++) {
        if (me.name == Config.RogerThatInventory6[i]) {
            Config.Inventory[0] = Config.Inventory6[0];
            Config.Inventory[1] = Config.Inventory6[1];
            Config.Inventory[2] = Config.Inventory6[2];
            Config.Inventory[3] = Config.Inventory6[3];
            Config.UpdateInventoryMsg = "ÿc9Updated: ÿc2Inventory ÿc2Six";
            return true;
        }
    }

    for (let i = 0; i < Config.RogerThatInventory7.length; i++) {
        if (me.name == Config.RogerThatInventory7[i]) {
            Config.Inventory[0] = Config.Inventory7[0];
            Config.Inventory[1] = Config.Inventory7[1];
            Config.Inventory[2] = Config.Inventory7[2];
            Config.Inventory[3] = Config.Inventory7[3];
            Config.UpdateInventoryMsg = "ÿc9Updated: ÿc2Inventory ÿc2Seven";
            return true;
        }
    }

    for (let i = 0; i < Config.RogerThatInventory8.length; i++) {
        if (me.name == Config.RogerThatInventory8[i]) {
            Config.Inventory[0] = Config.Inventory8[0];
            Config.Inventory[1] = Config.Inventory8[1];
            Config.Inventory[2] = Config.Inventory8[2];
            Config.Inventory[3] = Config.Inventory8[3];
            Config.UpdateInventoryMsg = "ÿc9Updated: ÿc2Inventory ÿc2Eight";
            return true;
        }
    }

    Config.Inventory[0] = Config.InventoryGeneric[0];
    Config.Inventory[1] = Config.InventoryGeneric[1];
    Config.Inventory[2] = Config.InventoryGeneric[2];
    Config.Inventory[3] = Config.InventoryGeneric[3];
    Config.UpdateInventoryMsg = "ÿc9Updated: ÿc2Inventory ÿc1Generic";
    return true;
}