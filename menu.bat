ECHO OFF
:MENU
CLS
ECHO.
ECHO ...............................................
ECHO PRESS 1, 2 OR 3 to select your task, or 4 to EXIT.
ECHO ...............................................
ECHO.
ECHO 1 - Create Database
ECHO 2 - Add Countries
ECHO 3 - Add Leagues
ECHO 4 - Add Teams
ECHO 5 - Add Standings
ECHO 6 - Add Team Statistics
ECHO 7 - Add Todays Match
ECHO 8 - Add H2H
ECHO 9 - Add Predictions
ECHO.
SET /P M=Type 1, 2, 3, or 4 then press ENTER:
IF %M%==1 GOTO Database
IF %M%==2 GOTO Countries
IF %M%==3 GOTO Leagues
IF %M%==4 GOTO Team
IF %M%==5 GOTO Standings
IF %M%==6 GOTO TeamStatistics
IF %M%==7 GOTO TodayMatches
IF %M%==8 GOTO H2H
IF %M%==9 GOTO Predictions
:Database
curl http://localhost:8000/createdatabase
GOTO MENU
:Countries
curl http://localhost:8000/addcountries
GOTO MENU
:Leagues
curl http://localhost:8000/addleagues
GOTO MENU
:Team
curl http://localhost:8000/addTeams
GOTO MENU
:Standings
curl http://localhost:8000/addStandings
GOTO MENU
:TeamStatistics
curl http://localhost:8000/addTeamStatistics
GOTO MENU
:TodayMatches
curl http://localhost:8000/addtodayMatches
GOTO MENU
:H2H
curl http://localhost:8000/addH2H
GOTO MENU
:Predictions
curl http://localhost:8000/addpredictions
GOTO MENU