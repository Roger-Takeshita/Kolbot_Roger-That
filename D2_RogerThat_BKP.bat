@echo off

set diablopath=%cd%
set destinationpath="C:\Users\%username%\Desktop"

set date=%DATE:~10,4%-%DATE:~4,2%-%DATE:~7,2%

xcopy /E /S /Y /I   "%diablopath%\d2bs\kolbot\data\secure"                                  "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\data\secure"
xcopy /E /S /Y /I   "%diablopath%\d2bs\kolbot\mules"                                        "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\mules"
xcopy /Y /I         "%diablopath%\d2bs\d2bs.ini"                                            "%destinationpath%\%date%_D2_BKP\d2bs\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\D2BotFollow.dbj"                              "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\AutoMule.js"                             "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\common\Config.js"                        "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\common\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4P-Follower-Sorc-Cold-Cow.js"  "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4P-Follower-Sorc-Cold.js"      "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4P-Follower-Sorc-Light-Cow.js" "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4P-Follower-Sorc-Light.js"     "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4P-Leader-Pally.js"            "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Cold-Cow.js"  "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Cold.js"      "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Fire.js"      "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Light-Cow.js" "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Light.js"     "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\MF-4S-Leader-Sorc-Cold.js"        "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\RogerThat-Master.js"              "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\Rush-Rushee-Follower.js"          "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\Rush-Rushee-Quester.js"           "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\libs\config\_CustomConfig.js"                 "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\libs\config\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\pickit\w-koltonEarlyLadder.nip"               "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\pickit\"
xcopy /Y /I         "%diablopath%\d2bs\kolbot\pickit\w-koltonEndLadder.nip"                 "%destinationpath%\%date%_D2_BKP\d2bs\kolbot\pickit\"
xcopy /Y /I         "%diablopath%\data\cdkeys.json"                                         "%destinationpath%\%date%_D2_BKP\data\"
xcopy /Y /I         "%diablopath%\data\profile.json"                                        "%destinationpath%\%date%_D2_BKP\data\"
xcopy /Y /I         "%diablopath%\data\server.json"                                         "%destinationpath%\%date%_D2_BKP\data\"

if errorlevel 5 goto fail
if errorlevel 4 goto lowmemory
if errorlevel 2 goto abort
if errorlevel 1 goto nofile
if errorlevel 0 goto success

:fail
echo x=msgbox("Disk write error occurred. Please try again." ,0, "Error: Something went wrong") > %tmp%\tmp.vbs
goto exit

:lowmemory
echo x=msgbox("Insufficient memory to copy files or invalid drive or command-line syntax." ,0, "Error: Low Memory") > %tmp%\tmp.vbs
goto exit

:abort
echo x=msgbox("You pressed CTRL+C to end the copy operation." ,0, "Abort") > %tmp%\tmp.vbs
goto exit

:nofile
echo x=msgbox("No files were found to copy." ,0, "Error: Missing Files") > %tmp%\tmp.vbs

:success
echo x=msgbox("Files were copied without error." ,0, "Success") > %tmp%\tmp.vbs
goto exit

:exit
wscript %tmp%\tmp.vbs
del %tmp%\tmp.vbs
