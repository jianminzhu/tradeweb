%~d0
cd %~dp0/dist 
start %~dp0tsc_namespace_allinone.bat
pause
call node app.js
pause
 