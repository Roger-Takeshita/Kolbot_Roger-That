/**
*	@filename	Pit.js
*	@author		kolton
*	@desc		clear Pit
*/

function Pit() {
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
	Pather.useWaypoint(6);
	Precast.doPrecast(true);

	if (!Pather.moveToExit([7, 12], true)) {
		throw new Error("Failed to move to Pit level 1");
	}

	if (Config.Pit.ClearPit1) {
		Attack.clearLevel(Config.ClearType);
	}

	if (!Pather.moveToExit(16, true, Config.Pit.ClearPath)) {
		throw new Error("Failed to move to Pit level 2");
	}

	Attack.clearLevel();
	this.DodgeTelestomp();
	return true;
}