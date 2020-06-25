@echo off

set diablopath=%cd%
set destinationpath="C:\Users\%username%\Desktop"
set date=%DATE:~10,4%-%DATE:~4,2%-%DATE:~7,2%

@echo off
for /F "tokens=*" %%A in (D2_RogerThat_BKP.txt) do  (
   if EXIST %diablopath%\%%A\NUL (
      echo D | xcopy /E /S /Y /I "%diablopath%\%%A" "%destinationpath%\%date%_Kolbot_BKP\%%A"
   ) else if EXIST %diablopath%\%%A (
      echo F | xcopy /Y /I "%diablopath%\%%A" "%destinationpath%\%date%_Kolbot_BKP\%%A"
   ) else (
      echo "------------------> File doesn't exist    %diablopath%\%%A"
      pause
   )
)
