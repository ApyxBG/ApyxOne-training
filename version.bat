@echo off
if EXIST .git (
    git rev-parse --short=8 HEAD > git_commit_version.txt
    git describe --tags > git_tag_id.txt
    SET /p MOAG_COM_BOARD_TAG=<git_tag_id.txt
    git describe --tags --abbrev=0 > git_tag_id.txt
) else (
    echo DEAD>git_commit_version.txt
    echo BEEF>git_tag_id.txt
)
SET /p VERSION=<git_commit_version.txt
SET /p TAG=<git_tag_id.txt

if ("%TAG%")== ("") (
    SET MAJOR=0
    SET MINOR=0
    SET TAG_DRIFT=255
) else (
    for /F "tokens=1,2 delims=." %%a in ("%TAG:~1%") do (
        SET MAJOR=%%a
        echo %%b>git_tag_id.txt
    )
    SET /p MINOR=<git_tag_id.txt
    git rev-list %VERSION%...%TAG% > git_tag_drift.txt
    SET /a TAG_DRIFT=0
    for /f %%a in (git_tag_drift.txt) do set /a TAG_DRIFT+=1
    rm git_tag_drift.txt
)

SET MOAG_COM_BOARD_VERSION=V%MAJOR%.%MINOR%
IF NOT (%MOAG_COM_BOARD_TAG%) == (v%MAJOR%.%MINOR%) (
    SET MOAG_COM_BOARD_VERSION=V%MAJOR%.%MINOR%-%TAG_DRIFT%
)
SET MOAG_COM_BOARD_GIT_COMMIT=[%VERSION%]



echo %MOAG_COM_BOARD_VERSION%>Public/version.txt
echo %MOAG_COM_BOARD_GIT_COMMIT%>>Public/version.txt

rm git_commit_version.txt git_tag_id.txt

exit
