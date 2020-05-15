/**
*	@filename	Nihlathak.js
*	@author		kolton
*	@desc		kill Nihlathak
*/

function Nihlathak() {
	var TeleStompFlag = Config.TeleStomp,
		DodgeHPPercent = Config.DodgeHP;

	this.DodgeTelestomp = function () {
		if (me.classid == 1 && TeleStompFlag) {
			Config.TeleStomp = TeleStompFlag;
			Config.DodgeHP = DodgeHPPercent;
		}
	};

	if (me.classid == 1 && TeleStompFlag) {
		Config.TeleStomp = false;
		Config.DodgeHP = 100;
	}

	Town.doChores();
	Pather.useWaypoint(123);
	Precast.doPrecast(false);

	if (!Pather.moveToExit(124, true)) {
		throw new Error("Failed to go to Nihlathak");
	}

	Pather.moveToPreset(me.area, 2, 462, 0, 0, false, true);

	if (Config.Nihlathak.ViperQuit && getUnit(1, 597)) {
		this.DodgeTelestomp();
		print("Tomb Vipers found.");

		return true;
	}

	Attack.kill(526); // Nihlathak
	Pickit.pickItems();
	this.DodgeTelestomp();
	return true;
}