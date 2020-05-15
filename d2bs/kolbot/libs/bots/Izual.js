/**
*	@filename	Izual.js
*	@author		kolton
*	@desc		kill Izual
*/

function Izual() {
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
	Pather.useWaypoint(106);
	Precast.doPrecast(true);

	if (!Pather.moveToPreset(105, 1, 256)) {
		throw new Error("Failed to move to Izual.");
	}

	Attack.kill(256); // Izual
	Pickit.pickItems();
  this.DodgeTelestomp();
	return true;
}