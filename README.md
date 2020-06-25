# RogerThat Config

<h1 id='summary'>Summary</h1>

- [D2 Backup](#bkp)
- [Print Colors](#colors)
  - [In Game](#ingame)
  - [Console](#console)
- [Ignore / Untrack Files](#gitignoreuntrack)
  - [.gitignore](#gitignore)
  - [Untrack Files](#untrack)
- [Screen Location](#screen)


<h1 id='bkp'>D2 Backup</h1>

[Go Back to Summary](#summary)

- Inside the main folder, there are two files `D2_RogerThat_BKP.bat` and `D2_RogerThat_BKP.txt`
  - The `D2_RogerThat_BKP.bat` is just the executable
    - **It has to be executed on the main root of the Kolbot's folder**
  - The `D2_RogerThat_BKP.txt` is where we have to add all the relative paths of the files that we want to create a backup
  - Once we run the `D2_RogerThat_BKP.bat`, it will create a folder on your desktop with the following format `YYYY-MM-DD_Kolbot_BKP`

  - For example:
    - We have the following files that we want to backup
    - Notice that we have 2 folders, we don't need to add `\` in the end of the path

	```Bash
		d2bs\d2bs.ini
		d2bs\kolbot\D2BotFollow.dbj
		d2bs\kolbot\data\secure         <------ Folder
		d2bs\kolbot\libs\AutoMule.js
		d2bs\kolbot\libs\common\Config.js
		d2bs\kolbot\libs\config\MF-4P-Follower-Sorc-Cold-Cow.js
		d2bs\kolbot\libs\config\MF-4P-Follower-Sorc-Cold.js
		d2bs\kolbot\libs\config\MF-4P-Follower-Sorc-Light-Cow.js
		d2bs\kolbot\libs\config\MF-4P-Follower-Sorc-Light.js
		d2bs\kolbot\libs\config\MF-4P-Leader-Pally.js
		d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Cold-Cow.js
		d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Cold.js
		d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Fire.js
		d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Light-Cow.js
		d2bs\kolbot\libs\config\MF-4S-Follower-Sorc-Light.js
		d2bs\kolbot\libs\config\MF-4S-Leader-Sorc-Cold.js
		d2bs\kolbot\libs\config\RogerThat-Master.js
		d2bs\kolbot\libs\config\Rush-Rushee-Follower.js
		d2bs\kolbot\libs\config\Rush-Rushee-Quester.js
		d2bs\kolbot\libs\config\_CustomConfig.js
		d2bs\kolbot\mules                <------ Folder
		d2bs\kolbot\pickit\w-koltonEarlyLadder.nip
		d2bs\kolbot\pickit\w-koltonEndLadder.nip
		data\cdkeys.json
		data\profile.json
		data\server.json
		.gitignore
		.prettierignore
	```

<h1 id='colors'>Print Colors</h1>

<h3 id='ingame'>In Game</h3>

[Go Back to Summary](#summary)

- `me.overhead("ÿc1 Your red string");`
- `print("ÿc9 Your yellow ÿc4 brown string");`

	```Bash
		ÿc1 Red
		ÿc4 Brown
		ÿc3 Blue
		ÿc9 Yellow
		ÿc2 Green
		ÿc0 White
	```

<h3 id='console'>Console</h3>

[Go Back to Summary](#summary)

- `D2Bot.printToConsole("Your string here", n);`

	```Bash
		3 - Black
		4 - Blue
		5 - Green
		6 - Yellow
		7 - Brown
		8 - Orange
		9 - Red
	```

<h1 id='gitignoreuntrack'>Ignore / Untrack Files</h1>

<h3 id='gitignore'>.gitignore</h3>

[Go Back to Summary](#summary)

- Add these folder/files to **.gitignore**, to keep clean `git status`

	```Bash
		*.prettierignore
		d2bs/kolbot/data/
		d2bs/kolbot/mules/
		d2bs/kolbot/logs/
		d2bs/logs/
		data/patch.json.old
		limedrop/
	```

<h3 id='untrack'>Untrack Files</h3>

[Go Back to Summary](#summary)

- [Untrack](https://github.com/Roger-Takeshita/GitHub#untrack-pushed-files) the following files

	```Bash
		git update-index --assume-unchanged d2bs/d2bs.log
		git update-index --assume-unchanged d2bs/kolbot/logs/ScriptErrorLog.txt
		git update-index --assume-unchanged d2bs/kolbot/logs/ip.txt
		git update-index --assume-unchanged d2bs/kolbot/logs/leader.txt
		git update-index --assume-unchanged data/patch.json
		git update-index --assume-unchanged logs/exceptions.log
		git update-index --assume-unchanged logs/keyinfo.log
	```

<h1 id='screen'>Screen Location</h1>

[Go Back to Summary](#summary)

- Screen resolution 800x600

	```Bash
		-3,0		# D1 - Mule
		637, 0		# D2 - Mule
		1277, 0		# D3 - Mule
		1897, 0		# D4 - Mule
		-3, 543		# D5 - Mule
		637, 543	# D6 - Mule
		1277, 543	# D7 - Mule
		1897, 543	# D8 - Mule
	```

- Screen resolution 640x480

	```Bash
		-3, 37		# D1 - Mule
		637, 37		# D2 - Mule
		1277, 37	# D3 - Mule
		1907, 37	# D4 - Mule
		-3, 543		# D5 - Mule
		637, 543	# D6 - Mule
		1277, 543	# D7 - Mule
		1907, 543	# D8 - Mule
	```

-------------

## Rules

1. D2BS, D2Bot and kolbot # are educational tools with an open source developer community. These tools are meant to be used offline or on private servers that explicitly allow them. These tools are not meant to be abused on battle.net (a Blizzard Entertainment entity).

2. D2BS, D2Bot and kolbot # are FREE software. If you paid or are asked to pay for these, you have been scammed.

3. do not discuss cheating, maliciously exploiting, or illegal use of software.

4. selling or discussing illegal software or cheating tools are strictly prohibited in all repositories.

## kolbot

* this name is better known than others, even it is just a part of d2bs (diablo 2 botting system) which contain 3 distinct components:
	* D2BS - core
	* D2Bot# - manager (C#)
	* kolbot - script library (JS)

* use the master(trunk) branch

If you want to contribute to kolbot code, make sure you use [ESLint options for kolbot code](https://gist.githubusercontent.com/Nishimura-Katsuo/2d6866666c7acf10047c486a15a7fe60/raw/99ef9c2995929c492ef856772ff346e0f19709cd/.eslintrc.js) or [JSLint options for kolbot code](https://gist.githubusercontent.com/noah-/d917342e52281d54c404e0b2c18b0c6e/raw/fbade95e38b103d2654b90d85ef62a51c4295153/jslint.config) for final polish.
If you want to contribute to d2bs/d2bot#, come to irc.synirc.net/d2bs and ask around.

# D2BS is NOT SAFE from DETECTION!

[**Join the Forums!**](https://d2bot.discourse.group/)

[**Join the Discord Channel!**](https://discord.gg/FuBG8N2)

[**Documentation Repo**](https://github.com/blizzhackers/documentation#diablo-2-botting-system-d2bs)

## Install dependencies - do this first!
- [Microsoft Visual C++ 2010 Redistributable Package (x86)](https://www.microsoft.com/en-us/download/details.aspx?id=5555)
- [Microsoft .NET Framework 4.0 (or higher)](https://dotnet.microsoft.com/download/dotnet-framework)

## Getting Started
- [download d2bot-with-kolbot](https://github.com/blizzhackers/documentation/blob/master/d2bot/Download.md#download)
- [d2bot manager setup](https://github.com/blizzhackers/documentation/blob/master/d2bot/ManagerSetup.md/#manager-setup)
- [notepad++ syntax highlighting](https://github.com/blizzhackers/documentation/blob/master/kolbot/Notepad++.md/#syntax-highlighting-in-np)
- [FAQ](https://github.com/blizzhackers/documentation/blob/master/kolbot/FAQ.md/#faq)

## Guides
- [manual playing](https://github.com/blizzhackers/documentation/blob/master/kolbot/ManualPlay.md/#manual-playing)
- [multi botting](https://github.com/blizzhackers/documentation/blob/master/kolbot/MultiBotting.md/#multi-botting)
- [character config](https://github.com/blizzhackers/documentation/blob/master/kolbot/CharacterConfig.md/#character-configuration)
- [TCP/IP Games](https://github.com/blizzhackers/documentation/blob/master/kolbot/TCP-IP%20games.md#tcpip-games)

## LimeDrop web based item manager and dropper

- Limedrop is available by default on the master(trunk) branch.
- [limedrop install and usage](https://github.com/blizzhackers/documentation/tree/master/limedrop#limedrop-guide)


![limedrop-general](https://github.com/blizzhackers/documentation/blob/master/limedrop/assets/limedrop-general.png)
