/**
*	@filename	Eyeback.js
*	@author		kolton
*	@desc		kill Eyeback the Unleashed
*/

function Eyeback() {
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
	Pather.useWaypoint(112);
	Precast.doPrecast(true);

	if (!Pather.moveToPreset(111, 1, 784)) {
		throw new Error("Failed to move to Eyeback the Unleashed");
	}

	Attack.clear(15, 0, getLocaleString(22499)); // Eyeback the Unleashed
  this.DodgeTelestomp();
	return true;
}