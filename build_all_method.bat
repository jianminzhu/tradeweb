%~d0
cd %~dp0 
call tsc_to_front_amd
call tsc_to_front_amd_allinone
call npm run build
call npm run start  