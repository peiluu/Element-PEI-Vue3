Started by user mdzypaas
[Pipeline] Start of Pipeline
[Pipeline] node
Running on work1 in /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend
[Pipeline] {
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (准备)
[Pipeline] script
[Pipeline] {
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (代码拉取)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential f269c7b8-e03f-4709-b65a-dfe7ec60313f
Fetching changes from the remote Git repository
Checking out Revision 27639444b984e5e3a522088f24dcf42ef7b69fe5 (origin/uat)
Commit message: "Merge branch 'dev' into uat"
 > git rev-parse --resolve-git-dir /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.git # timeout=10
 > git config remote.origin.url http://10.26.141.41/paas-projects/mtclq/mtclq-frontend.git # timeout=10
Fetching upstream changes from http://10.26.141.41/paas-projects/mtclq/mtclq-frontend.git
 > git --version # timeout=10
 > git --version # 'git version 1.8.3.1'
using GIT_ASKPASS to set credentials git全局账号
 > git fetch --tags --progress http://10.26.141.41/paas-projects/mtclq/mtclq-frontend.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse origin/uat^{commit} # timeout=10
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 27639444b984e5e3a522088f24dcf42ef7b69fe5 # timeout=10
 > git rev-list --no-walk e57f3904683baeb8ab3f3e6c5d636286ed289f94 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (构建分支)
[Pipeline] nodejs
[Pipeline] {
[Pipeline] sh
+ source /etc/profile
++ '[' -x /usr/bin/id ']'
++ '[' -z 0 ']'
+++ /usr/bin/id -un
++ USER=root
++ LOGNAME=root
++ MAIL=/var/spool/mail/root
++ '[' 0 = 0 ']'
++ pathmunge /usr/sbin
++ case ":${PATH}:" in
++ pathmunge /usr/local/sbin
++ case ":${PATH}:" in
+++ /usr/bin/hostname
++ HOSTNAME=mvxl12679
++ HISTSIZE=1000
++ '[' '' = ignorespace ']'
++ export HISTCONTROL=ignoredups
++ HISTCONTROL=ignoredups
++ export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL
++ '[' 0 -gt 199 ']'
++ umask 022
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/256term.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/256term.sh
+++ local256=
+++ '[' -n '' ']'
+++ '[' -n '' ']'
+++ unset local256
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/abrt-console-notification.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/abrt-console-notification.sh
+++ tty -s
+++ return 0
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/bash_completion.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/bash_completion.sh
+++ '[' -z '4.2.46(2)-release' -o -z '' -o -n '' ']'
+++ return
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/cabal-install.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/cabal-install.sh
+++ CABALBIN=/root/.cabal/bin
+++ echo /apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
+++ /bin/grep -q /root/.cabal/bin
+++ '[' -d /root/.cabal/bin ']'
+++ unset CABALBIN
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/ccache.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/ccache.sh
+++ case ":${PATH:-}:" in
+++ '[' -n '' ']'
+++ '[' 0 '!=' 0 ']'
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/colorgrep.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/colorgrep.sh
+++ /usr/libexec/grepconf.sh -c
+++ alias 'grep=grep --color=auto'
+++ alias 'egrep=egrep --color=auto'
+++ alias 'fgrep=fgrep --color=auto'
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/colorls.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/colorls.sh
+++ '[' '!' -t 0 ']'
+++ return
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/cvs.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/cvs.sh
+++ export CVS_RSH=ssh
+++ CVS_RSH=ssh
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/gnat-project.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/gnat-project.sh
++++ uname -i
+++ HARDWARE_PLATFORM=x86_64
+++ export HARDWARE_PLATFORM
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/lang.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/lang.sh
+++ sourced=0
+++ '[' -n zh_CN.UTF-8 ']'
+++ saved_lang=zh_CN.UTF-8
+++ '[' -f /root/.i18n ']'
+++ LANG=zh_CN.UTF-8
+++ unset saved_lang
+++ '[' 0 = 1 ']'
+++ unset sourced
+++ unset langfile
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/less.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/less.sh
+++ '[' -x /usr/bin/lesspipe.sh ']'
+++ export 'LESSOPEN=||/usr/bin/lesspipe.sh %s'
+++ LESSOPEN='||/usr/bin/lesspipe.sh %s'
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/qt-graphicssystem.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/qt-graphicssystem.sh
+++ '[' -z 1 -a -z '' ']'
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/vim.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/vim.sh
+++ '[' -n '4.2.46(2)-release' -o -n '' -o -n '' ']'
+++ '[' -x /usr/bin/id ']'
++++ /usr/bin/id -u
+++ ID=0
+++ '[' -n 0 -a 0 -le 200 ']'
+++ return
++ for i in '/etc/profile.d/*.sh'
++ '[' -r /etc/profile.d/which2.sh ']'
++ '[' ehxB '!=' ehxB ']'
++ . /etc/profile.d/which2.sh
+++ alias 'which=alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
++ unset i
++ unset -f pathmunge
++ export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL
++ HISTTIMEFORMAT='%Y/%m/%d %T '
++ export HISTTIMEFORMAT
++ export 'PROMPT_COMMAND={ thisHistID=`history 1|awk "{print \\$1}"`;lastCommand=`history 1| awk "{\\$1=\"\" ;print}"`;user=`id -un`;pwd=`pwd`;whoStr=(`who -u am i`);user=`id -un`;pwd=(`pwd`);realUser=${whoStr[0]};logMonth=${whoStr[2]};logDay=${whoStr[3]};logTime=${whoStr[4]};pid=${whoStr[6]};ip=${whoStr[7]};if [ ${thisHistID}x != ${lastHistID}x ];then echo -E `date "+%Y/%m/%d %H:%M:%S"` $user\($realUser\)@$ip[IP:$pid][PWD:$pwd][LOGIN:$logMonth $logDay $logTime] --- $lastCommand ;lastHistID=$thisHistID;fi; } >> $HISTORY_FILE'
++ PROMPT_COMMAND='{ thisHistID=`history 1|awk "{print \\$1}"`;lastCommand=`history 1| awk "{\\$1=\"\" ;print}"`;user=`id -un`;pwd=`pwd`;whoStr=(`who -u am i`);user=`id -un`;pwd=(`pwd`);realUser=${whoStr[0]};logMonth=${whoStr[2]};logDay=${whoStr[3]};logTime=${whoStr[4]};pid=${whoStr[6]};ip=${whoStr[7]};if [ ${thisHistID}x != ${lastHistID}x ];then echo -E `date "+%Y/%m/%d %H:%M:%S"` $user\($realUser\)@$ip[IP:$pid][PWD:$pwd][LOGIN:$logMonth $logDay $logTime] --- $lastCommand ;lastHistID=$thisHistID;fi; } >> $HISTORY_FILE'
++ export HISTORY_FILE=/var/log/midea_audit.log
++ HISTORY_FILE=/var/log/midea_audit.log
++ TMOUT=1800
++ readonly TMOUT
++ export TMOUT
++ export 'HISTTIMEFORMAT=  %F %T   '
++ HISTTIMEFORMAT='  %F %T   '
++ export PATH=/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/
++ PATH=/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/
++ export MAVEN_HOME=/apps/svr/apache-maven-3.6.3
++ MAVEN_HOME=/apps/svr/apache-maven-3.6.3
++ export PATH=/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/
++ PATH=/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/
++ export PATH=/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ PATH=/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ export NVM_DIR=/apps/svr/nvm-0.39.3
++ NVM_DIR=/apps/svr/nvm-0.39.3
++ '[' -s /apps/svr/nvm-0.39.3/nvm.sh ']'
++ . /apps/svr/nvm-0.39.3/nvm.sh
+++ NVM_SCRIPT_SOURCE=']'
+++ '[' -z '' ']'
+++ export NVM_CD_FLAGS=
+++ NVM_CD_FLAGS=
+++ nvm_is_zsh
+++ '[' -n '' ']'
+++ '[' -z /apps/svr/nvm-0.39.3 ']'
+++ case $NVM_DIR in
+++ unset NVM_SCRIPT_SOURCE
+++ nvm_process_parameters
+++ local NVM_AUTO_MODE
+++ NVM_AUTO_MODE=use
+++ '[' 0 -ne 0 ']'
+++ nvm_auto use
+++ local NVM_MODE
+++ NVM_MODE=use
+++ local VERSION
+++ local NVM_CURRENT
+++ '[' _use = _install ']'
+++ '[' _use = _use ']'
++++ nvm_ls_current
++++ local NVM_LS_CURRENT_NODE_PATH
+++++ command which node
++++ NVM_LS_CURRENT_NODE_PATH=/apps/svr/node-v10.15.0/bin/node
+++++ nvm_version_dir iojs
+++++ local NVM_WHICH_DIR
+++++ NVM_WHICH_DIR=iojs
+++++ '[' -z iojs ']'
+++++ '[' iojs = new ']'
+++++ '[' _iojs = _iojs ']'
+++++ nvm_echo /apps/svr/nvm-0.39.3/versions/io.js
+++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/io.js
++++ nvm_tree_contains_path /apps/svr/nvm-0.39.3/versions/io.js /apps/svr/node-v10.15.0/bin/node
++++ local tree
++++ tree=/apps/svr/nvm-0.39.3/versions/io.js
++++ local node_path
++++ node_path=/apps/svr/node-v10.15.0/bin/node
++++ '[' @/apps/svr/nvm-0.39.3/versions/io.js@ = @@ ']'
++++ '[' @/apps/svr/node-v10.15.0/bin/node@ = @@ ']'
++++ local previous_pathdir
++++ previous_pathdir=/apps/svr/node-v10.15.0/bin/node
++++ local pathdir
+++++ dirname /apps/svr/node-v10.15.0/bin/node
++++ pathdir=/apps/svr/node-v10.15.0/bin
++++ '[' /apps/svr/node-v10.15.0/bin '!=' '' ']'
++++ '[' /apps/svr/node-v10.15.0/bin '!=' . ']'
++++ '[' /apps/svr/node-v10.15.0/bin '!=' / ']'
++++ '[' /apps/svr/node-v10.15.0/bin '!=' /apps/svr/nvm-0.39.3/versions/io.js ']'
++++ '[' /apps/svr/node-v10.15.0/bin '!=' /apps/svr/node-v10.15.0/bin/node ']'
++++ previous_pathdir=/apps/svr/node-v10.15.0/bin
+++++ dirname /apps/svr/node-v10.15.0/bin
++++ pathdir=/apps/svr/node-v10.15.0
++++ '[' /apps/svr/node-v10.15.0 '!=' '' ']'
++++ '[' /apps/svr/node-v10.15.0 '!=' . ']'
++++ '[' /apps/svr/node-v10.15.0 '!=' / ']'
++++ '[' /apps/svr/node-v10.15.0 '!=' /apps/svr/nvm-0.39.3/versions/io.js ']'
++++ '[' /apps/svr/node-v10.15.0 '!=' /apps/svr/node-v10.15.0/bin ']'
++++ previous_pathdir=/apps/svr/node-v10.15.0
+++++ dirname /apps/svr/node-v10.15.0
++++ pathdir=/apps/svr
++++ '[' /apps/svr '!=' '' ']'
++++ '[' /apps/svr '!=' . ']'
++++ '[' /apps/svr '!=' / ']'
++++ '[' /apps/svr '!=' /apps/svr/nvm-0.39.3/versions/io.js ']'
++++ '[' /apps/svr '!=' /apps/svr/node-v10.15.0 ']'
++++ previous_pathdir=/apps/svr
+++++ dirname /apps/svr
++++ pathdir=/apps
++++ '[' /apps '!=' '' ']'
++++ '[' /apps '!=' . ']'
++++ '[' /apps '!=' / ']'
++++ '[' /apps '!=' /apps/svr/nvm-0.39.3/versions/io.js ']'
++++ '[' /apps '!=' /apps/svr ']'
++++ previous_pathdir=/apps
+++++ dirname /apps
++++ pathdir=/
++++ '[' / '!=' '' ']'
++++ '[' / '!=' . ']'
++++ '[' / '!=' / ']'
++++ '[' / = /apps/svr/nvm-0.39.3/versions/io.js ']'
++++ nvm_tree_contains_path /apps/svr/nvm-0.39.3 /apps/svr/node-v10.15.0/bin/node
++++ local tree
++++ tree=/apps/svr/nvm-0.39.3
++++ local node_path
++++ node_path=/apps/svr/node-v10.15.0/bin/node
++++ '[' @/apps/svr/nvm-0.39.3@ = @@ ']'
++++ '[' @/apps/svr/node-v10.15.0/bin/node@ = @@ ']'
++++ local previous_pathdir
++++ previous_pathdir=/apps/svr/node-v10.15.0/bin/node
++++ local pathdir
+++++ dirname /apps/svr/node-v10.15.0/bin/node
++++ pathdir=/apps/svr/node-v10.15.0/bin
++++ '[' /apps/svr/node-v10.15.0/bin '!=' '' ']'
++++ '[' /apps/svr/node-v10.15.0/bin '!=' . ']'
++++ '[' /apps/svr/node-v10.15.0/bin '!=' / ']'
++++ '[' /apps/svr/node-v10.15.0/bin '!=' /apps/svr/nvm-0.39.3 ']'
++++ '[' /apps/svr/node-v10.15.0/bin '!=' /apps/svr/node-v10.15.0/bin/node ']'
++++ previous_pathdir=/apps/svr/node-v10.15.0/bin
+++++ dirname /apps/svr/node-v10.15.0/bin
++++ pathdir=/apps/svr/node-v10.15.0
++++ '[' /apps/svr/node-v10.15.0 '!=' '' ']'
++++ '[' /apps/svr/node-v10.15.0 '!=' . ']'
++++ '[' /apps/svr/node-v10.15.0 '!=' / ']'
++++ '[' /apps/svr/node-v10.15.0 '!=' /apps/svr/nvm-0.39.3 ']'
++++ '[' /apps/svr/node-v10.15.0 '!=' /apps/svr/node-v10.15.0/bin ']'
++++ previous_pathdir=/apps/svr/node-v10.15.0
+++++ dirname /apps/svr/node-v10.15.0
++++ pathdir=/apps/svr
++++ '[' /apps/svr '!=' '' ']'
++++ '[' /apps/svr '!=' . ']'
++++ '[' /apps/svr '!=' / ']'
++++ '[' /apps/svr '!=' /apps/svr/nvm-0.39.3 ']'
++++ '[' /apps/svr '!=' /apps/svr/node-v10.15.0 ']'
++++ previous_pathdir=/apps/svr
+++++ dirname /apps/svr
++++ pathdir=/apps
++++ '[' /apps '!=' '' ']'
++++ '[' /apps '!=' . ']'
++++ '[' /apps '!=' / ']'
++++ '[' /apps '!=' /apps/svr/nvm-0.39.3 ']'
++++ '[' /apps '!=' /apps/svr ']'
++++ previous_pathdir=/apps
+++++ dirname /apps
++++ pathdir=/
++++ '[' / '!=' '' ']'
++++ '[' / '!=' . ']'
++++ '[' / '!=' / ']'
++++ '[' / = /apps/svr/nvm-0.39.3 ']'
++++ nvm_echo system
++++ command printf '%s\n' system
+++ NVM_CURRENT=system
+++ '[' _system = _none ']'
+++ '[' _system = _system ']'
++++ nvm_resolve_local_alias default
+++ VERSION=v12.22.4
+++ '[' -n v12.22.4 ']'
+++ nvm use --silent v12.22.4
+++ '[' 3 -lt 1 ']'
+++ local DEFAULT_IFS
++++ nvm_echo t
++++ command printf '%s\n' t
++++ command tr t '\t'
++++ tr t '\t'
+++ DEFAULT_IFS='
'
+++ '[' hxB '!=' ehxB ']'
+++ set +e
+++ local EXIT_CODE
+++ IFS='
'
+++ nvm use --silent v12.22.4
+++ '[' 3 -lt 1 ']'
+++ local DEFAULT_IFS
++++ nvm_echo t
++++ command printf '%s\n' t
++++ command tr t '\t'
++++ tr t '\t'
+++ DEFAULT_IFS='
'
+++ '[' hxB '!=' hxB ']'
+++ '[' hxB '!=' hxB ']'
+++ '[' -n /usr/bin/sh ']'
+++ '[' hxB '!=' hxB ']'
+++ '[' '
' '!=' '
' ']'
+++ local i
+++ for i in '"$@"'
+++ case $i in
+++ for i in '"$@"'
+++ case $i in
+++ for i in '"$@"'
+++ case $i in
+++ local COMMAND
+++ COMMAND=use
+++ shift
+++ local VERSION
+++ local ADDITIONAL_PARAMETERS
+++ case $COMMAND in
+++ local PROVIDED_VERSION
+++ local NVM_SILENT
+++ local NVM_SILENT_ARG
+++ local NVM_DELETE_PREFIX
+++ NVM_DELETE_PREFIX=0
+++ local NVM_LTS
+++ local IS_VERSION_FROM_NVMRC
+++ IS_VERSION_FROM_NVMRC=0
+++ '[' 2 -ne 0 ']'
+++ case "$1" in
+++ NVM_SILENT=1
+++ NVM_SILENT_ARG=--silent
+++ shift
+++ '[' 1 -ne 0 ']'
+++ case "$1" in
+++ '[' -n v12.22.4 ']'
+++ PROVIDED_VERSION=v12.22.4
+++ shift
+++ '[' 0 -ne 0 ']'
+++ '[' -n '' ']'
+++ '[' -z v12.22.4 ']'
++++ nvm_match_version v12.22.4
++++ local NVM_IOJS_PREFIX
+++++ nvm_iojs_prefix
+++++ nvm_echo iojs
+++++ command printf '%s\n' iojs
++++ NVM_IOJS_PREFIX=iojs
++++ local PROVIDED_VERSION
++++ PROVIDED_VERSION=v12.22.4
++++ case "_${PROVIDED_VERSION}" in
++++ nvm_version v12.22.4
++++ local PATTERN
++++ PATTERN=v12.22.4
++++ local VERSION
++++ '[' -z v12.22.4 ']'
++++ '[' v12.22.4 = current ']'
++++ local NVM_NODE_PREFIX
+++++ nvm_node_prefix
+++++ nvm_echo node
+++++ command printf '%s\n' node
++++ NVM_NODE_PREFIX=node
++++ case "_${PATTERN}" in
+++++ nvm_ls v12.22.4
+++++ command tail -1
+++++ local PATTERN
+++++ tail -1
+++++ PATTERN=v12.22.4
+++++ local VERSIONS
+++++ VERSIONS=
+++++ '[' v12.22.4 = current ']'
+++++ local NVM_IOJS_PREFIX
++++++ nvm_iojs_prefix
++++++ nvm_echo iojs
++++++ command printf '%s\n' iojs
+++++ NVM_IOJS_PREFIX=iojs
+++++ local NVM_NODE_PREFIX
++++++ nvm_node_prefix
++++++ nvm_echo node
++++++ command printf '%s\n' node
+++++ NVM_NODE_PREFIX=node
+++++ local NVM_VERSION_DIR_IOJS
++++++ nvm_version_dir iojs
++++++ local NVM_WHICH_DIR
++++++ NVM_WHICH_DIR=iojs
++++++ '[' -z iojs ']'
++++++ '[' iojs = new ']'
++++++ '[' _iojs = _iojs ']'
++++++ nvm_echo /apps/svr/nvm-0.39.3/versions/io.js
++++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/io.js
+++++ NVM_VERSION_DIR_IOJS=/apps/svr/nvm-0.39.3/versions/io.js
+++++ local NVM_VERSION_DIR_NEW
++++++ nvm_version_dir new
++++++ local NVM_WHICH_DIR
++++++ NVM_WHICH_DIR=new
++++++ '[' -z new ']'
++++++ '[' new = new ']'
++++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node
++++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node
+++++ NVM_VERSION_DIR_NEW=/apps/svr/nvm-0.39.3/versions/node
+++++ local NVM_VERSION_DIR_OLD
++++++ nvm_version_dir old
++++++ local NVM_WHICH_DIR
++++++ NVM_WHICH_DIR=old
++++++ '[' -z old ']'
++++++ '[' old = new ']'
++++++ '[' _old = _iojs ']'
++++++ '[' _old = _old ']'
++++++ nvm_echo /apps/svr/nvm-0.39.3
++++++ command printf '%s\n' /apps/svr/nvm-0.39.3
+++++ NVM_VERSION_DIR_OLD=/apps/svr/nvm-0.39.3
+++++ case "${PATTERN}" in
+++++ nvm_resolve_local_alias v12.22.4
+++++ '[' -z v12.22.4 ']'
+++++ local VERSION
+++++ local EXIT_CODE
++++++ nvm_resolve_alias v12.22.4
++++++ '[' -z v12.22.4 ']'
++++++ local PATTERN
++++++ PATTERN=v12.22.4
++++++ local ALIAS
++++++ ALIAS=v12.22.4
++++++ local ALIAS_TEMP
++++++ local SEEN_ALIASES
++++++ SEEN_ALIASES=v12.22.4
++++++ true
+++++++ nvm_alias v12.22.4
+++++++ nvm_echo
+++++++ command printf '%s\n' ''
++++++ ALIAS_TEMP=
++++++ '[' -z '' ']'
++++++ break
++++++ '[' -n v12.22.4 ']'
++++++ '[' _v12.22.4 '!=' _v12.22.4 ']'
++++++ nvm_validate_implicit_alias v12.22.4
++++++ return 2
+++++ VERSION=
+++++ EXIT_CODE=2
+++++ '[' -z '' ']'
+++++ return 2
++++++ nvm_ensure_version_prefix v12.22.4
++++++ local NVM_VERSION
+++++++ nvm_strip_iojs_prefix v12.22.4
+++++++ local NVM_IOJS_PREFIX
+++++++ command sed -e 's/^\([0-9]\)/v\1/g'
+++++++ sed -e 's/^\([0-9]\)/v\1/g'
++++++++ nvm_iojs_prefix
++++++++ nvm_echo iojs
++++++++ command printf '%s\n' iojs
+++++++ NVM_IOJS_PREFIX=iojs
+++++++ '[' v12.22.4 = iojs ']'
+++++++ nvm_echo v12.22.4
+++++++ command printf '%s\n' v12.22.4
++++++ NVM_VERSION=v12.22.4
++++++ nvm_is_iojs_version v12.22.4
++++++ case "${1-}" in
++++++ return 1
++++++ nvm_echo v12.22.4
++++++ command printf '%s\n' v12.22.4
+++++ PATTERN=v12.22.4
+++++ '[' v12.22.4 = N/A ']'
+++++ local NVM_PATTERN_STARTS_WITH_V
+++++ case $PATTERN in
+++++ NVM_PATTERN_STARTS_WITH_V=true
+++++ '[' true = true ']'
++++++ nvm_num_version_groups v12.22.4
++++++ local VERSION
++++++ VERSION=v12.22.4
++++++ VERSION=12.22.4
++++++ VERSION=12.22.4
++++++ '[' -z 12.22.4 ']'
++++++ local NVM_NUM_DOTS
+++++++ nvm_echo 12.22.4
+++++++ command printf '%s\n' 12.22.4
+++++++ command sed -e 's/[^\.]//g'
+++++++ sed -e 's/[^\.]//g'
++++++ NVM_NUM_DOTS=..
++++++ local NVM_NUM_GROUPS
++++++ NVM_NUM_GROUPS=...
++++++ nvm_echo 3
++++++ command printf '%s\n' 3
+++++ '[' _3 = _3 ']'
+++++ nvm_is_version_installed v12.22.4
+++++ '[' -z v12.22.4 ']'
+++++ local NVM_NODE_BINARY
+++++ NVM_NODE_BINARY=node
++++++ nvm_get_os
++++++ local NVM_UNAME
+++++++ command uname -a
+++++++ uname -a
++++++ NVM_UNAME='Linux mvxl12679 3.10.0-957.21.3.el7.x86_64 #1 SMP Fri Jun 14 02:54:29 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux'
++++++ local NVM_OS
++++++ case "${NVM_UNAME}" in
++++++ NVM_OS=linux
++++++ nvm_echo linux
++++++ command printf '%s\n' linux
+++++ '[' _linux = _win ']'
++++++ nvm_version_path v12.22.4
+++++ '[' -x /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin/node ']'
+++++ return 0
+++++ VERSIONS=v12.22.4
+++++ '[' '' = true ']'
+++++ '[' -z v12.22.4 ']'
+++++ nvm_echo v12.22.4
+++++ command printf '%s\n' v12.22.4
++++ VERSION=v12.22.4
++++ '[' -z v12.22.4 ']'
++++ '[' _v12.22.4 = _N/A ']'
++++ nvm_echo v12.22.4
++++ command printf '%s\n' v12.22.4
+++ VERSION=v12.22.4
+++ '[' -z v12.22.4 ']'
+++ '[' _v12.22.4 = _system ']'
+++ '[' _v12.22.4 = _∞ ']'
+++ '[' v12.22.4 = N/A ']'
+++ nvm_ensure_version_installed v12.22.4 0
+++ local PROVIDED_VERSION
+++ PROVIDED_VERSION=v12.22.4
+++ local IS_VERSION_FROM_NVMRC
+++ IS_VERSION_FROM_NVMRC=0
+++ '[' v12.22.4 = system ']'
+++ local LOCAL_VERSION
+++ local EXIT_CODE
++++ nvm_version v12.22.4
++++ local PATTERN
++++ PATTERN=v12.22.4
++++ local VERSION
++++ '[' -z v12.22.4 ']'
++++ '[' v12.22.4 = current ']'
++++ local NVM_NODE_PREFIX
+++++ nvm_node_prefix
+++++ nvm_echo node
+++++ command printf '%s\n' node
++++ NVM_NODE_PREFIX=node
++++ case "_${PATTERN}" in
+++++ nvm_ls v12.22.4
+++++ command tail -1
+++++ tail -1
+++++ local PATTERN
+++++ PATTERN=v12.22.4
+++++ local VERSIONS
+++++ VERSIONS=
+++++ '[' v12.22.4 = current ']'
+++++ local NVM_IOJS_PREFIX
++++++ nvm_iojs_prefix
++++++ nvm_echo iojs
++++++ command printf '%s\n' iojs
+++++ NVM_IOJS_PREFIX=iojs
+++++ local NVM_NODE_PREFIX
++++++ nvm_node_prefix
++++++ nvm_echo node
++++++ command printf '%s\n' node
+++++ NVM_NODE_PREFIX=node
+++++ local NVM_VERSION_DIR_IOJS
++++++ nvm_version_dir iojs
++++++ local NVM_WHICH_DIR
++++++ NVM_WHICH_DIR=iojs
++++++ '[' -z iojs ']'
++++++ '[' iojs = new ']'
++++++ '[' _iojs = _iojs ']'
++++++ nvm_echo /apps/svr/nvm-0.39.3/versions/io.js
++++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/io.js
+++++ NVM_VERSION_DIR_IOJS=/apps/svr/nvm-0.39.3/versions/io.js
+++++ local NVM_VERSION_DIR_NEW
++++++ nvm_version_dir new
++++++ local NVM_WHICH_DIR
++++++ NVM_WHICH_DIR=new
++++++ '[' -z new ']'
++++++ '[' new = new ']'
++++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node
++++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node
+++++ NVM_VERSION_DIR_NEW=/apps/svr/nvm-0.39.3/versions/node
+++++ local NVM_VERSION_DIR_OLD
++++++ nvm_version_dir old
++++++ local NVM_WHICH_DIR
++++++ NVM_WHICH_DIR=old
++++++ '[' -z old ']'
++++++ '[' old = new ']'
++++++ '[' _old = _iojs ']'
++++++ '[' _old = _old ']'
++++++ nvm_echo /apps/svr/nvm-0.39.3
++++++ command printf '%s\n' /apps/svr/nvm-0.39.3
+++++ NVM_VERSION_DIR_OLD=/apps/svr/nvm-0.39.3
+++++ case "${PATTERN}" in
+++++ nvm_resolve_local_alias v12.22.4
+++++ '[' -z v12.22.4 ']'
+++++ local VERSION
+++++ local EXIT_CODE
++++++ nvm_resolve_alias v12.22.4
++++++ '[' -z v12.22.4 ']'
++++++ local PATTERN
++++++ PATTERN=v12.22.4
++++++ local ALIAS
++++++ ALIAS=v12.22.4
++++++ local ALIAS_TEMP
++++++ local SEEN_ALIASES
++++++ SEEN_ALIASES=v12.22.4
++++++ true
+++++++ nvm_alias v12.22.4
+++++++ nvm_echo
+++++++ command printf '%s\n' ''
++++++ ALIAS_TEMP=
++++++ '[' -z '' ']'
++++++ break
++++++ '[' -n v12.22.4 ']'
++++++ '[' _v12.22.4 '!=' _v12.22.4 ']'
++++++ nvm_validate_implicit_alias v12.22.4
++++++ return 2
+++++ VERSION=
+++++ EXIT_CODE=2
+++++ '[' -z '' ']'
+++++ return 2
++++++ nvm_ensure_version_prefix v12.22.4
++++++ local NVM_VERSION
+++++++ nvm_strip_iojs_prefix v12.22.4
+++++++ local NVM_IOJS_PREFIX
+++++++ command sed -e 's/^\([0-9]\)/v\1/g'
+++++++ sed -e 's/^\([0-9]\)/v\1/g'
++++++++ nvm_iojs_prefix
++++++++ nvm_echo iojs
++++++++ command printf '%s\n' iojs
+++++++ NVM_IOJS_PREFIX=iojs
+++++++ '[' v12.22.4 = iojs ']'
+++++++ nvm_echo v12.22.4
+++++++ command printf '%s\n' v12.22.4
++++++ NVM_VERSION=v12.22.4
++++++ nvm_is_iojs_version v12.22.4
++++++ case "${1-}" in
++++++ return 1
++++++ nvm_echo v12.22.4
++++++ command printf '%s\n' v12.22.4
+++++ PATTERN=v12.22.4
+++++ '[' v12.22.4 = N/A ']'
+++++ local NVM_PATTERN_STARTS_WITH_V
+++++ case $PATTERN in
+++++ NVM_PATTERN_STARTS_WITH_V=true
+++++ '[' true = true ']'
++++++ nvm_num_version_groups v12.22.4
++++++ local VERSION
++++++ VERSION=v12.22.4
++++++ VERSION=12.22.4
++++++ VERSION=12.22.4
++++++ '[' -z 12.22.4 ']'
++++++ local NVM_NUM_DOTS
+++++++ nvm_echo 12.22.4
+++++++ command printf '%s\n' 12.22.4
+++++++ command sed -e 's/[^\.]//g'
+++++++ sed -e 's/[^\.]//g'
++++++ NVM_NUM_DOTS=..
++++++ local NVM_NUM_GROUPS
++++++ NVM_NUM_GROUPS=...
++++++ nvm_echo 3
++++++ command printf '%s\n' 3
+++++ '[' _3 = _3 ']'
+++++ nvm_is_version_installed v12.22.4
+++++ '[' -z v12.22.4 ']'
+++++ local NVM_NODE_BINARY
+++++ NVM_NODE_BINARY=node
++++++ nvm_get_os
++++++ local NVM_UNAME
+++++++ command uname -a
+++++++ uname -a
++++++ NVM_UNAME='Linux mvxl12679 3.10.0-957.21.3.el7.x86_64 #1 SMP Fri Jun 14 02:54:29 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux'
++++++ local NVM_OS
++++++ case "${NVM_UNAME}" in
++++++ NVM_OS=linux
++++++ nvm_echo linux
++++++ command printf '%s\n' linux
+++++ '[' _linux = _win ']'
++++++ nvm_version_path v12.22.4
+++++ '[' -x /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin/node ']'
+++++ return 0
+++++ VERSIONS=v12.22.4
+++++ '[' '' = true ']'
+++++ '[' -z v12.22.4 ']'
+++++ nvm_echo v12.22.4
+++++ command printf '%s\n' v12.22.4
++++ VERSION=v12.22.4
++++ '[' -z v12.22.4 ']'
++++ '[' _v12.22.4 = _N/A ']'
++++ nvm_echo v12.22.4
++++ command printf '%s\n' v12.22.4
+++ LOCAL_VERSION=v12.22.4
+++ EXIT_CODE=0
+++ local NVM_VERSION_DIR
+++ '[' 0 '!=' 0 ']'
+++ nvm_is_version_installed v12.22.4
+++ '[' -z v12.22.4 ']'
+++ local NVM_NODE_BINARY
+++ NVM_NODE_BINARY=node
++++ nvm_get_os
++++ local NVM_UNAME
+++++ command uname -a
+++++ uname -a
++++ NVM_UNAME='Linux mvxl12679 3.10.0-957.21.3.el7.x86_64 #1 SMP Fri Jun 14 02:54:29 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux'
++++ local NVM_OS
++++ case "${NVM_UNAME}" in
++++ NVM_OS=linux
++++ nvm_echo linux
++++ command printf '%s\n' linux
+++ '[' _linux = _win ']'
++++ nvm_version_path v12.22.4
+++ '[' -x /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin/node ']'
+++ return 0
+++ local NVM_VERSION_DIR
++++ nvm_version_path v12.22.4
++++ local VERSION
++++ VERSION=v12.22.4
++++ '[' -z v12.22.4 ']'
++++ nvm_is_iojs_version v12.22.4
++++ case "${1-}" in
++++ return 1
++++ nvm_version_greater 0.12.0 v12.22.4
++++ command awk 'BEGIN {
    if (ARGV[1] == "" || ARGV[2] == "") exit(1)
    split(ARGV[1], a, /\./);
    split(ARGV[2], b, /\./);
    for (i=1; i<=3; i++) {
      if (a[i] && a[i] !~ /^[0-9]+$/) exit(2);
      if (b[i] && b[i] !~ /^[0-9]+$/) { exit(0); }
      if (a[i] < b[i]) exit(3);
      else if (a[i] > b[i]) exit(0);
    }
    exit(4)
  }' 0.12.0 12.22.4
++++ awk 'BEGIN {
    if (ARGV[1] == "" || ARGV[2] == "") exit(1)
    split(ARGV[1], a, /\./);
    split(ARGV[2], b, /\./);
    for (i=1; i<=3; i++) {
      if (a[i] && a[i] !~ /^[0-9]+$/) exit(2);
      if (b[i] && b[i] !~ /^[0-9]+$/) { exit(0); }
      if (a[i] < b[i]) exit(3);
      else if (a[i] > b[i]) exit(0);
    }
    exit(4)
  }' 0.12.0 12.22.4
+++++ nvm_version_dir new
+++++ local NVM_WHICH_DIR
+++++ NVM_WHICH_DIR=new
+++++ '[' -z new ']'
+++++ '[' new = new ']'
+++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node
+++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4
+++ NVM_VERSION_DIR=/apps/svr/nvm-0.39.3/versions/node/v12.22.4
++++ nvm_change_path /apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin /bin /apps/svr/nvm-0.39.3/versions/node/v12.22.4
++++ '[' -z /apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin ']'
++++ nvm_echo /apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++++ command printf '%s\n' /apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++++ nvm_grep -q '/apps/svr/nvm-0.39.3/[^/]*/bin'
++++ GREP_OPTIONS=
++++ command grep -q '/apps/svr/nvm-0.39.3/[^/]*/bin'
++++ grep -q '/apps/svr/nvm-0.39.3/[^/]*/bin'
++++ nvm_echo /apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++++ command printf '%s\n' /apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++++ nvm_grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin'
++++ GREP_OPTIONS=
++++ command grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin'
++++ grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
+++ PATH=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
+++ nvm_has manpath
+++ type manpath
+++ '[' -z '' ']'
+++ local MANPATH
++++ manpath
+++ MANPATH=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ nvm_change_path /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man /share/man /apps/svr/nvm-0.39.3/versions/node/v12.22.4
++++ '[' -z /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man ']'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ nvm_grep -q '/apps/svr/nvm-0.39.3/[^/]*/share/man'
++++ GREP_OPTIONS=
++++ command grep -q '/apps/svr/nvm-0.39.3/[^/]*/share/man'
++++ grep -q '/apps/svr/nvm-0.39.3/[^/]*/share/man'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ nvm_grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++++ GREP_OPTIONS=
++++ command grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++++ grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ nvm_grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/[^/]*/share/man'
++++ GREP_OPTIONS=
++++ command grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/[^/]*/share/man'
++++ grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/[^/]*/share/man'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ nvm_grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++++ GREP_OPTIONS=
++++ command grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++++ grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++++ command sed -e 's#/apps/svr/nvm-0.39.3/[^/]*/share/man[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man#' -e 's#/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man#'
++++ sed -e 's#/apps/svr/nvm-0.39.3/[^/]*/share/man[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man#' -e 's#/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man#'
+++ MANPATH=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
+++ export MANPATH
+++ export PATH
+++ hash -r
+++ export NVM_BIN=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin
+++ NVM_BIN=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin
+++ export NVM_INC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/include/node
+++ NVM_INC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/include/node
+++ '[' '' = true ']'
+++ local NVM_USE_OUTPUT
+++ NVM_USE_OUTPUT=
+++ '[' 1 -ne 1 ']'
+++ '[' _v12.22.4 '!=' _system ']'
+++ local NVM_USE_CMD
+++ NVM_USE_CMD='nvm use --delete-prefix'
+++ '[' -n v12.22.4 ']'
+++ NVM_USE_CMD='nvm use --delete-prefix v12.22.4'
+++ '[' 1 -eq 1 ']'
+++ NVM_USE_CMD='nvm use --delete-prefix v12.22.4 --silent'
+++ nvm_die_on_prefix 0 'nvm use --delete-prefix v12.22.4 --silent' /apps/svr/nvm-0.39.3/versions/node/v12.22.4
+++ local NVM_DELETE_PREFIX
+++ NVM_DELETE_PREFIX=0
+++ case "${NVM_DELETE_PREFIX}" in
+++ local NVM_COMMAND
+++ NVM_COMMAND='nvm use --delete-prefix v12.22.4 --silent'
+++ local NVM_VERSION_DIR
+++ NVM_VERSION_DIR=/apps/svr/nvm-0.39.3/versions/node/v12.22.4
+++ '[' -z 'nvm use --delete-prefix v12.22.4 --silent' ']'
+++ '[' -z /apps/svr/nvm-0.39.3/versions/node/v12.22.4 ']'
+++ '[' -n '' ']'
+++ local NVM_OS
++++ nvm_get_os
++++ local NVM_UNAME
+++++ command uname -a
+++++ uname -a
++++ NVM_UNAME='Linux mvxl12679 3.10.0-957.21.3.el7.x86_64 #1 SMP Fri Jun 14 02:54:29 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux'
++++ local NVM_OS
++++ case "${NVM_UNAME}" in
++++ NVM_OS=linux
++++ nvm_echo linux
++++ command printf '%s\n' linux
+++ NVM_OS=linux
+++ local NVM_NPM_CONFIG_x_PREFIX_ENV
++++ command awk 'BEGIN { for (name in ENVIRON) if (toupper(name) == "NPM_CONFIG_PREFIX") { print name; break } }'
++++ awk 'BEGIN { for (name in ENVIRON) if (toupper(name) == "NPM_CONFIG_PREFIX") { print name; break } }'
+++ NVM_NPM_CONFIG_x_PREFIX_ENV=
+++ '[' -n '' ']'
+++ local NVM_NPM_BUILTIN_NPMRC
+++ NVM_NPM_BUILTIN_NPMRC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc
+++ nvm_npmrc_bad_news_bears /apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc
+++ local NVM_NPMRC
+++ NVM_NPMRC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc
+++ '[' -n /apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc ']'
+++ '[' -f /apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc ']'
+++ return 1
+++ local NVM_NPM_GLOBAL_NPMRC
+++ NVM_NPM_GLOBAL_NPMRC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc
+++ nvm_npmrc_bad_news_bears /apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc
+++ local NVM_NPMRC
+++ NVM_NPMRC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc
+++ '[' -n /apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc ']'
+++ '[' -f /apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc ']'
+++ return 1
+++ local NVM_NPM_USER_NPMRC
+++ NVM_NPM_USER_NPMRC=/root/.npmrc
+++ nvm_npmrc_bad_news_bears /root/.npmrc
+++ local NVM_NPMRC
+++ NVM_NPMRC=/root/.npmrc
+++ '[' -n /root/.npmrc ']'
+++ '[' -f /root/.npmrc ']'
+++ nvm_grep -Ee '^(prefix|globalconfig) *='
+++ GREP_OPTIONS=
+++ command grep -Ee '^(prefix|globalconfig) *='
+++ grep -Ee '^(prefix|globalconfig) *='
+++ return 1
+++ local NVM_NPM_PROJECT_NPMRC
++++ nvm_find_project_dir
++++ local path_
++++ path_=/apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend
++++ '[' /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend '!=' '' ']'
++++ '[' '!' -f /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/package.json ']'
++++ nvm_echo /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend
++++ command printf '%s\n' /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend
+++ NVM_NPM_PROJECT_NPMRC=/apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc
+++ nvm_npmrc_bad_news_bears /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc
+++ local NVM_NPMRC
+++ NVM_NPMRC=/apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc
+++ '[' -n /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc ']'
+++ '[' -f /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc ']'
+++ return 1
+++ '[' -n '' ']'
+++ EXIT_CODE=0
+++ set -e
+++ return 0
++ '[' -s /apps/svr/nvm-0.39.3/bash_completion ']'
++ . /apps/svr/nvm-0.39.3/bash_completion
+++ command -v nvm
+++ [[ -n '' ]]
+++ complete -o default -F __nvm nvm
++ export NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist
++ NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist
+ nvm use 12.22.4
+ '[' 2 -lt 1 ']'
+ local DEFAULT_IFS
++ nvm_echo t
++ command printf '%s\n' t
++ command tr t '\t'
++ tr t '\t'
+ DEFAULT_IFS='
'
+ '[' hxB '!=' ehxB ']'
+ set +e
+ local EXIT_CODE
+ IFS='
'
+ nvm use 12.22.4
+ '[' 2 -lt 1 ']'
+ local DEFAULT_IFS
++ nvm_echo t
++ command printf '%s\n' t
++ command tr t '\t'
++ tr t '\t'
+ DEFAULT_IFS='
'
+ '[' hxB '!=' hxB ']'
+ '[' hxB '!=' hxB ']'
+ '[' -n /usr/bin/sh ']'
+ '[' hxB '!=' hxB ']'
+ '[' '
' '!=' '
' ']'
+ local i
+ for i in '"$@"'
+ case $i in
+ for i in '"$@"'
+ case $i in
+ local COMMAND
+ COMMAND=use
+ shift
+ local VERSION
+ local ADDITIONAL_PARAMETERS
+ case $COMMAND in
+ local PROVIDED_VERSION
+ local NVM_SILENT
+ local NVM_SILENT_ARG
+ local NVM_DELETE_PREFIX
+ NVM_DELETE_PREFIX=0
+ local NVM_LTS
+ local IS_VERSION_FROM_NVMRC
+ IS_VERSION_FROM_NVMRC=0
+ '[' 1 -ne 0 ']'
+ case "$1" in
+ '[' -n 12.22.4 ']'
+ PROVIDED_VERSION=12.22.4
+ shift
+ '[' 0 -ne 0 ']'
+ '[' -n '' ']'
+ '[' -z 12.22.4 ']'
++ nvm_match_version 12.22.4
++ local NVM_IOJS_PREFIX
+++ nvm_iojs_prefix
+++ nvm_echo iojs
+++ command printf '%s\n' iojs
++ NVM_IOJS_PREFIX=iojs
++ local PROVIDED_VERSION
++ PROVIDED_VERSION=12.22.4
++ case "_${PROVIDED_VERSION}" in
++ nvm_version 12.22.4
++ local PATTERN
++ PATTERN=12.22.4
++ local VERSION
++ '[' -z 12.22.4 ']'
++ '[' 12.22.4 = current ']'
++ local NVM_NODE_PREFIX
+++ nvm_node_prefix
+++ nvm_echo node
+++ command printf '%s\n' node
++ NVM_NODE_PREFIX=node
++ case "_${PATTERN}" in
+++ nvm_ls 12.22.4
+++ command tail -1
+++ tail -1
+++ local PATTERN
+++ PATTERN=12.22.4
+++ local VERSIONS
+++ VERSIONS=
+++ '[' 12.22.4 = current ']'
+++ local NVM_IOJS_PREFIX
++++ nvm_iojs_prefix
++++ nvm_echo iojs
++++ command printf '%s\n' iojs
+++ NVM_IOJS_PREFIX=iojs
+++ local NVM_NODE_PREFIX
++++ nvm_node_prefix
++++ nvm_echo node
++++ command printf '%s\n' node
+++ NVM_NODE_PREFIX=node
+++ local NVM_VERSION_DIR_IOJS
++++ nvm_version_dir iojs
++++ local NVM_WHICH_DIR
++++ NVM_WHICH_DIR=iojs
++++ '[' -z iojs ']'
++++ '[' iojs = new ']'
++++ '[' _iojs = _iojs ']'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/io.js
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/io.js
+++ NVM_VERSION_DIR_IOJS=/apps/svr/nvm-0.39.3/versions/io.js
+++ local NVM_VERSION_DIR_NEW
++++ nvm_version_dir new
++++ local NVM_WHICH_DIR
++++ NVM_WHICH_DIR=new
++++ '[' -z new ']'
++++ '[' new = new ']'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node
+++ NVM_VERSION_DIR_NEW=/apps/svr/nvm-0.39.3/versions/node
+++ local NVM_VERSION_DIR_OLD
++++ nvm_version_dir old
++++ local NVM_WHICH_DIR
++++ NVM_WHICH_DIR=old
++++ '[' -z old ']'
++++ '[' old = new ']'
++++ '[' _old = _iojs ']'
++++ '[' _old = _old ']'
++++ nvm_echo /apps/svr/nvm-0.39.3
++++ command printf '%s\n' /apps/svr/nvm-0.39.3
+++ NVM_VERSION_DIR_OLD=/apps/svr/nvm-0.39.3
+++ case "${PATTERN}" in
+++ nvm_resolve_local_alias 12.22.4
+++ '[' -z 12.22.4 ']'
+++ local VERSION
+++ local EXIT_CODE
++++ nvm_resolve_alias 12.22.4
++++ '[' -z 12.22.4 ']'
++++ local PATTERN
++++ PATTERN=12.22.4
++++ local ALIAS
++++ ALIAS=12.22.4
++++ local ALIAS_TEMP
++++ local SEEN_ALIASES
++++ SEEN_ALIASES=12.22.4
++++ true
+++++ nvm_alias 12.22.4
+++++ nvm_echo
+++++ command printf '%s\n' ''
++++ ALIAS_TEMP=
++++ '[' -z '' ']'
++++ break
++++ '[' -n 12.22.4 ']'
++++ '[' _12.22.4 '!=' _12.22.4 ']'
++++ nvm_validate_implicit_alias 12.22.4
++++ return 2
+++ VERSION=
+++ EXIT_CODE=2
+++ '[' -z '' ']'
+++ return 2
++++ nvm_ensure_version_prefix 12.22.4
++++ local NVM_VERSION
+++++ nvm_strip_iojs_prefix 12.22.4
+++++ local NVM_IOJS_PREFIX
+++++ command sed -e 's/^\([0-9]\)/v\1/g'
+++++ sed -e 's/^\([0-9]\)/v\1/g'
++++++ nvm_iojs_prefix
++++++ nvm_echo iojs
++++++ command printf '%s\n' iojs
+++++ NVM_IOJS_PREFIX=iojs
+++++ '[' 12.22.4 = iojs ']'
+++++ nvm_echo 12.22.4
+++++ command printf '%s\n' 12.22.4
++++ NVM_VERSION=v12.22.4
++++ nvm_is_iojs_version 12.22.4
++++ case "${1-}" in
++++ return 1
++++ nvm_echo v12.22.4
++++ command printf '%s\n' v12.22.4
+++ PATTERN=v12.22.4
+++ '[' v12.22.4 = N/A ']'
+++ local NVM_PATTERN_STARTS_WITH_V
+++ case $PATTERN in
+++ NVM_PATTERN_STARTS_WITH_V=true
+++ '[' true = true ']'
++++ nvm_num_version_groups v12.22.4
++++ local VERSION
++++ VERSION=v12.22.4
++++ VERSION=12.22.4
++++ VERSION=12.22.4
++++ '[' -z 12.22.4 ']'
++++ local NVM_NUM_DOTS
+++++ nvm_echo 12.22.4
+++++ command printf '%s\n' 12.22.4
+++++ command sed -e 's/[^\.]//g'
+++++ sed -e 's/[^\.]//g'
++++ NVM_NUM_DOTS=..
++++ local NVM_NUM_GROUPS
++++ NVM_NUM_GROUPS=...
++++ nvm_echo 3
++++ command printf '%s\n' 3
+++ '[' _3 = _3 ']'
+++ nvm_is_version_installed v12.22.4
+++ '[' -z v12.22.4 ']'
+++ local NVM_NODE_BINARY
+++ NVM_NODE_BINARY=node
++++ nvm_get_os
++++ local NVM_UNAME
+++++ command uname -a
+++++ uname -a
++++ NVM_UNAME='Linux mvxl12679 3.10.0-957.21.3.el7.x86_64 #1 SMP Fri Jun 14 02:54:29 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux'
++++ local NVM_OS
++++ case "${NVM_UNAME}" in
++++ NVM_OS=linux
++++ nvm_echo linux
++++ command printf '%s\n' linux
+++ '[' _linux = _win ']'
++++ nvm_version_path v12.22.4
+++ '[' -x /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin/node ']'
+++ return 0
+++ VERSIONS=v12.22.4
+++ '[' '' = true ']'
+++ '[' -z v12.22.4 ']'
+++ nvm_echo v12.22.4
+++ command printf '%s\n' v12.22.4
++ VERSION=v12.22.4
++ '[' -z v12.22.4 ']'
++ '[' _v12.22.4 = _N/A ']'
++ nvm_echo v12.22.4
++ command printf '%s\n' v12.22.4
+ VERSION=v12.22.4
+ '[' -z v12.22.4 ']'
+ '[' _v12.22.4 = _system ']'
+ '[' _v12.22.4 = _∞ ']'
+ '[' v12.22.4 = N/A ']'
+ nvm_ensure_version_installed v12.22.4 0
+ local PROVIDED_VERSION
+ PROVIDED_VERSION=v12.22.4
+ local IS_VERSION_FROM_NVMRC
+ IS_VERSION_FROM_NVMRC=0
+ '[' v12.22.4 = system ']'
+ local LOCAL_VERSION
+ local EXIT_CODE
++ nvm_version v12.22.4
++ local PATTERN
++ PATTERN=v12.22.4
++ local VERSION
++ '[' -z v12.22.4 ']'
++ '[' v12.22.4 = current ']'
++ local NVM_NODE_PREFIX
+++ nvm_node_prefix
+++ nvm_echo node
+++ command printf '%s\n' node
++ NVM_NODE_PREFIX=node
++ case "_${PATTERN}" in
+++ nvm_ls v12.22.4
+++ command tail -1
+++ tail -1
+++ local PATTERN
+++ PATTERN=v12.22.4
+++ local VERSIONS
+++ VERSIONS=
+++ '[' v12.22.4 = current ']'
+++ local NVM_IOJS_PREFIX
++++ nvm_iojs_prefix
++++ nvm_echo iojs
++++ command printf '%s\n' iojs
+++ NVM_IOJS_PREFIX=iojs
+++ local NVM_NODE_PREFIX
++++ nvm_node_prefix
++++ nvm_echo node
++++ command printf '%s\n' node
+++ NVM_NODE_PREFIX=node
+++ local NVM_VERSION_DIR_IOJS
++++ nvm_version_dir iojs
++++ local NVM_WHICH_DIR
++++ NVM_WHICH_DIR=iojs
++++ '[' -z iojs ']'
++++ '[' iojs = new ']'
++++ '[' _iojs = _iojs ']'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/io.js
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/io.js
+++ NVM_VERSION_DIR_IOJS=/apps/svr/nvm-0.39.3/versions/io.js
+++ local NVM_VERSION_DIR_NEW
++++ nvm_version_dir new
++++ local NVM_WHICH_DIR
++++ NVM_WHICH_DIR=new
++++ '[' -z new ']'
++++ '[' new = new ']'
++++ nvm_echo /apps/svr/nvm-0.39.3/versions/node
++++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node
+++ NVM_VERSION_DIR_NEW=/apps/svr/nvm-0.39.3/versions/node
+++ local NVM_VERSION_DIR_OLD
++++ nvm_version_dir old
++++ local NVM_WHICH_DIR
++++ NVM_WHICH_DIR=old
++++ '[' -z old ']'
++++ '[' old = new ']'
++++ '[' _old = _iojs ']'
++++ '[' _old = _old ']'
++++ nvm_echo /apps/svr/nvm-0.39.3
++++ command printf '%s\n' /apps/svr/nvm-0.39.3
+++ NVM_VERSION_DIR_OLD=/apps/svr/nvm-0.39.3
+++ case "${PATTERN}" in
+++ nvm_resolve_local_alias v12.22.4
+++ '[' -z v12.22.4 ']'
+++ local VERSION
+++ local EXIT_CODE
++++ nvm_resolve_alias v12.22.4
++++ '[' -z v12.22.4 ']'
++++ local PATTERN
++++ PATTERN=v12.22.4
++++ local ALIAS
++++ ALIAS=v12.22.4
++++ local ALIAS_TEMP
++++ local SEEN_ALIASES
++++ SEEN_ALIASES=v12.22.4
++++ true
+++++ nvm_alias v12.22.4
+++++ nvm_echo
+++++ command printf '%s\n' ''
++++ ALIAS_TEMP=
++++ '[' -z '' ']'
++++ break
++++ '[' -n v12.22.4 ']'
++++ '[' _v12.22.4 '!=' _v12.22.4 ']'
++++ nvm_validate_implicit_alias v12.22.4
++++ return 2
+++ VERSION=
+++ EXIT_CODE=2
+++ '[' -z '' ']'
+++ return 2
++++ nvm_ensure_version_prefix v12.22.4
++++ local NVM_VERSION
+++++ nvm_strip_iojs_prefix v12.22.4
+++++ local NVM_IOJS_PREFIX
+++++ command sed -e 's/^\([0-9]\)/v\1/g'
+++++ sed -e 's/^\([0-9]\)/v\1/g'
++++++ nvm_iojs_prefix
++++++ nvm_echo iojs
++++++ command printf '%s\n' iojs
+++++ NVM_IOJS_PREFIX=iojs
+++++ '[' v12.22.4 = iojs ']'
+++++ nvm_echo v12.22.4
+++++ command printf '%s\n' v12.22.4
++++ NVM_VERSION=v12.22.4
++++ nvm_is_iojs_version v12.22.4
++++ case "${1-}" in
++++ return 1
++++ nvm_echo v12.22.4
++++ command printf '%s\n' v12.22.4
+++ PATTERN=v12.22.4
+++ '[' v12.22.4 = N/A ']'
+++ local NVM_PATTERN_STARTS_WITH_V
+++ case $PATTERN in
+++ NVM_PATTERN_STARTS_WITH_V=true
+++ '[' true = true ']'
++++ nvm_num_version_groups v12.22.4
++++ local VERSION
++++ VERSION=v12.22.4
++++ VERSION=12.22.4
++++ VERSION=12.22.4
++++ '[' -z 12.22.4 ']'
++++ local NVM_NUM_DOTS
+++++ nvm_echo 12.22.4
+++++ command printf '%s\n' 12.22.4
+++++ command sed -e 's/[^\.]//g'
+++++ sed -e 's/[^\.]//g'
++++ NVM_NUM_DOTS=..
++++ local NVM_NUM_GROUPS
++++ NVM_NUM_GROUPS=...
++++ nvm_echo 3
++++ command printf '%s\n' 3
+++ '[' _3 = _3 ']'
+++ nvm_is_version_installed v12.22.4
+++ '[' -z v12.22.4 ']'
+++ local NVM_NODE_BINARY
+++ NVM_NODE_BINARY=node
++++ nvm_get_os
++++ local NVM_UNAME
+++++ command uname -a
+++++ uname -a
++++ NVM_UNAME='Linux mvxl12679 3.10.0-957.21.3.el7.x86_64 #1 SMP Fri Jun 14 02:54:29 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux'
++++ local NVM_OS
++++ case "${NVM_UNAME}" in
++++ NVM_OS=linux
++++ nvm_echo linux
++++ command printf '%s\n' linux
+++ '[' _linux = _win ']'
++++ nvm_version_path v12.22.4
+++ '[' -x /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin/node ']'
+++ return 0
+++ VERSIONS=v12.22.4
+++ '[' '' = true ']'
+++ '[' -z v12.22.4 ']'
+++ nvm_echo v12.22.4
+++ command printf '%s\n' v12.22.4
++ VERSION=v12.22.4
++ '[' -z v12.22.4 ']'
++ '[' _v12.22.4 = _N/A ']'
++ nvm_echo v12.22.4
++ command printf '%s\n' v12.22.4
+ LOCAL_VERSION=v12.22.4
+ EXIT_CODE=0
+ local NVM_VERSION_DIR
+ '[' 0 '!=' 0 ']'
+ nvm_is_version_installed v12.22.4
+ '[' -z v12.22.4 ']'
+ local NVM_NODE_BINARY
+ NVM_NODE_BINARY=node
++ nvm_get_os
++ local NVM_UNAME
+++ command uname -a
+++ uname -a
++ NVM_UNAME='Linux mvxl12679 3.10.0-957.21.3.el7.x86_64 #1 SMP Fri Jun 14 02:54:29 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux'
++ local NVM_OS
++ case "${NVM_UNAME}" in
++ NVM_OS=linux
++ nvm_echo linux
++ command printf '%s\n' linux
+ '[' _linux = _win ']'
++ nvm_version_path v12.22.4
+ '[' -x /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin/node ']'
+ return 0
+ local NVM_VERSION_DIR
++ nvm_version_path v12.22.4
++ local VERSION
++ VERSION=v12.22.4
++ '[' -z v12.22.4 ']'
++ nvm_is_iojs_version v12.22.4
++ case "${1-}" in
++ return 1
++ nvm_version_greater 0.12.0 v12.22.4
++ command awk 'BEGIN {
    if (ARGV[1] == "" || ARGV[2] == "") exit(1)
    split(ARGV[1], a, /\./);
    split(ARGV[2], b, /\./);
    for (i=1; i<=3; i++) {
      if (a[i] && a[i] !~ /^[0-9]+$/) exit(2);
      if (b[i] && b[i] !~ /^[0-9]+$/) { exit(0); }
      if (a[i] < b[i]) exit(3);
      else if (a[i] > b[i]) exit(0);
    }
    exit(4)
  }' 0.12.0 12.22.4
++ awk 'BEGIN {
    if (ARGV[1] == "" || ARGV[2] == "") exit(1)
    split(ARGV[1], a, /\./);
    split(ARGV[2], b, /\./);
    for (i=1; i<=3; i++) {
      if (a[i] && a[i] !~ /^[0-9]+$/) exit(2);
      if (b[i] && b[i] !~ /^[0-9]+$/) { exit(0); }
      if (a[i] < b[i]) exit(3);
      else if (a[i] > b[i]) exit(0);
    }
    exit(4)
  }' 0.12.0 12.22.4
+++ nvm_version_dir new
+++ local NVM_WHICH_DIR
+++ NVM_WHICH_DIR=new
+++ '[' -z new ']'
+++ '[' new = new ']'
+++ nvm_echo /apps/svr/nvm-0.39.3/versions/node
+++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4
+ NVM_VERSION_DIR=/apps/svr/nvm-0.39.3/versions/node/v12.22.4
++ nvm_change_path /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin /bin /apps/svr/nvm-0.39.3/versions/node/v12.22.4
++ '[' -z /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin ']'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ nvm_grep -q '/apps/svr/nvm-0.39.3/[^/]*/bin'
++ GREP_OPTIONS=
++ command grep -q '/apps/svr/nvm-0.39.3/[^/]*/bin'
++ grep -q '/apps/svr/nvm-0.39.3/[^/]*/bin'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ nvm_grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin'
++ GREP_OPTIONS=
++ command grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin'
++ grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ nvm_grep -Eq '(^|:)(/usr(/local)?)?/bin:.*/apps/svr/nvm-0.39.3/[^/]*/bin'
++ GREP_OPTIONS=
++ command grep -Eq '(^|:)(/usr(/local)?)?/bin:.*/apps/svr/nvm-0.39.3/[^/]*/bin'
++ grep -Eq '(^|:)(/usr(/local)?)?/bin:.*/apps/svr/nvm-0.39.3/[^/]*/bin'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ nvm_grep -Eq '(^|:)(/usr(/local)?)?/bin:.*/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin'
++ GREP_OPTIONS=
++ command grep -Eq '(^|:)(/usr(/local)?)?/bin:.*/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin'
++ grep -Eq '(^|:)(/usr(/local)?)?/bin:.*/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
++ command sed -e 's#/apps/svr/nvm-0.39.3/[^/]*/bin[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin#' -e 's#/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin#'
++ sed -e 's#/apps/svr/nvm-0.39.3/[^/]*/bin[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin#' -e 's#/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/bin[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin#'
+ PATH=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin:/apps/svr/apache-maven-3.6.3/bin:/apps/svr/node-v10.15.0/bin:/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/bin/git/bin
+ nvm_has manpath
+ type manpath
+ '[' -z '' ']'
+ local MANPATH
++ manpath
+ MANPATH=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ nvm_change_path /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man /share/man /apps/svr/nvm-0.39.3/versions/node/v12.22.4
++ '[' -z /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man ']'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ nvm_grep -q '/apps/svr/nvm-0.39.3/[^/]*/share/man'
++ GREP_OPTIONS=
++ command grep -q '/apps/svr/nvm-0.39.3/[^/]*/share/man'
++ grep -q '/apps/svr/nvm-0.39.3/[^/]*/share/man'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ nvm_grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++ GREP_OPTIONS=
++ command grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++ grep -q '/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ nvm_grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/[^/]*/share/man'
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ GREP_OPTIONS=
++ command grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/[^/]*/share/man'
++ grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/[^/]*/share/man'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ nvm_grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++ GREP_OPTIONS=
++ command grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++ grep -Eq '(^|:)(/usr(/local)?)?/share/man:.*/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man'
++ nvm_echo /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ command printf '%s\n' /apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
++ command sed -e 's#/apps/svr/nvm-0.39.3/[^/]*/share/man[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man#' -e 's#/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man#'
++ sed -e 's#/apps/svr/nvm-0.39.3/[^/]*/share/man[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man#' -e 's#/apps/svr/nvm-0.39.3/versions/[^/]*/[^/]*/share/man[^:]*#/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man#'
+ MANPATH=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/share/man:/apps/svr/node-v10.15.0/share/man:/usr/local/share/man:/usr/share/man/overrides:/usr/share/man
+ export MANPATH
+ export PATH
+ hash -r
+ export NVM_BIN=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin
+ NVM_BIN=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/bin
+ export NVM_INC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/include/node
+ NVM_INC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/include/node
+ '[' '' = true ']'
+ local NVM_USE_OUTPUT
+ NVM_USE_OUTPUT=
+ '[' 0 -ne 1 ']'
+ nvm_is_iojs_version v12.22.4
+ case "${1-}" in
+ return 1
++ nvm_print_npm_version
++ nvm_has npm
++ type npm
+++ npm --version
++ command printf ' (npm v6.14.14)'
++ printf ' (npm v6.14.14)'
+ NVM_USE_OUTPUT='Now using node v12.22.4 (npm v6.14.14)'
+ '[' _v12.22.4 '!=' _system ']'
+ local NVM_USE_CMD
+ NVM_USE_CMD='nvm use --delete-prefix'
+ '[' -n 12.22.4 ']'
+ NVM_USE_CMD='nvm use --delete-prefix v12.22.4'
+ '[' 0 -eq 1 ']'
+ nvm_die_on_prefix 0 'nvm use --delete-prefix v12.22.4' /apps/svr/nvm-0.39.3/versions/node/v12.22.4
+ local NVM_DELETE_PREFIX
+ NVM_DELETE_PREFIX=0
+ case "${NVM_DELETE_PREFIX}" in
+ local NVM_COMMAND
+ NVM_COMMAND='nvm use --delete-prefix v12.22.4'
+ local NVM_VERSION_DIR
+ NVM_VERSION_DIR=/apps/svr/nvm-0.39.3/versions/node/v12.22.4
+ '[' -z 'nvm use --delete-prefix v12.22.4' ']'
+ '[' -z /apps/svr/nvm-0.39.3/versions/node/v12.22.4 ']'
+ '[' -n '' ']'
+ local NVM_OS
++ nvm_get_os
++ local NVM_UNAME
+++ command uname -a
+++ uname -a
++ NVM_UNAME='Linux mvxl12679 3.10.0-957.21.3.el7.x86_64 #1 SMP Fri Jun 14 02:54:29 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux'
++ local NVM_OS
++ case "${NVM_UNAME}" in
++ NVM_OS=linux
++ nvm_echo linux
++ command printf '%s\n' linux
+ NVM_OS=linux
+ local NVM_NPM_CONFIG_x_PREFIX_ENV
++ command awk 'BEGIN { for (name in ENVIRON) if (toupper(name) == "NPM_CONFIG_PREFIX") { print name; break } }'
++ awk 'BEGIN { for (name in ENVIRON) if (toupper(name) == "NPM_CONFIG_PREFIX") { print name; break } }'
+ NVM_NPM_CONFIG_x_PREFIX_ENV=
+ '[' -n '' ']'
+ local NVM_NPM_BUILTIN_NPMRC
+ NVM_NPM_BUILTIN_NPMRC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc
+ nvm_npmrc_bad_news_bears /apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc
+ local NVM_NPMRC
+ NVM_NPMRC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc
+ '[' -n /apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc ']'
+ '[' -f /apps/svr/nvm-0.39.3/versions/node/v12.22.4/lib/node_modules/npm/npmrc ']'
+ return 1
+ local NVM_NPM_GLOBAL_NPMRC
+ NVM_NPM_GLOBAL_NPMRC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc
+ nvm_npmrc_bad_news_bears /apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc
+ local NVM_NPMRC
+ NVM_NPMRC=/apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc
+ '[' -n /apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc ']'
+ '[' -f /apps/svr/nvm-0.39.3/versions/node/v12.22.4/etc/npmrc ']'
+ return 1
+ local NVM_NPM_USER_NPMRC
+ NVM_NPM_USER_NPMRC=/root/.npmrc
+ nvm_npmrc_bad_news_bears /root/.npmrc
+ local NVM_NPMRC
+ NVM_NPMRC=/root/.npmrc
+ '[' -n /root/.npmrc ']'
+ '[' -f /root/.npmrc ']'
+ nvm_grep -Ee '^(prefix|globalconfig) *='
+ GREP_OPTIONS=
+ command grep -Ee '^(prefix|globalconfig) *='
+ grep -Ee '^(prefix|globalconfig) *='
+ return 1
+ local NVM_NPM_PROJECT_NPMRC
++ nvm_find_project_dir
++ local path_
++ path_=/apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend
++ '[' /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend '!=' '' ']'
++ '[' '!' -f /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/package.json ']'
++ nvm_echo /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend
++ command printf '%s\n' /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend
+ NVM_NPM_PROJECT_NPMRC=/apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc
+ nvm_npmrc_bad_news_bears /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc
+ local NVM_NPMRC
+ NVM_NPMRC=/apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc
+ '[' -n /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc ']'
+ '[' -f /apps/svr/jenkins/workspace/paas-project/mtclq/mtclq-uat/mtclq-uat-mtclq-frontend/.npmrc ']'
+ return 1
+ '[' -n 'Now using node v12.22.4 (npm v6.14.14)' ']'
+ '[' 0 -ne 1 ']'
+ nvm_echo 'Now using node v12.22.4 (npm v6.14.14)'
+ command printf '%s\n' 'Now using node v12.22.4 (npm v6.14.14)'
Now using node v12.22.4 (npm v6.14.14)
+ EXIT_CODE=0
+ set -e
+ return 0
+ yarn install
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.67s.
+ yarn uat
yarn run v1.22.22
$ vue-cli-service build --mode uat
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating

-  Building for uat...
 DONE  Compiled successfully in 31524ms8:33:35 ├F10: PM┤

  File                                      Size             Gzipped

  dist/luckySheet/expendPlugins/chart/ch    350.23 KiB       141.43 KiB
  artmix.umd.min.js
  dist/lib/vue.min.js                       104.28 KiB       37.35 KiB
  dist/lib/vue-router.min.js                28.53 KiB        9.80 KiB
  dist/lib/axios.min.js                     18.71 KiB        6.67 KiB
  dist/lib/vuex.min.js                      12.24 KiB        3.79 KiB
  dist/js/chunk-vendors.js                  10344.11 KiB     1703.19 KiB
  dist/js/28.js                             5039.39 KiB      813.41 KiB
  dist/luckySheet/luckysheet.umd.js         3113.86 KiB      587.95 KiB
  dist/js/app.js                            2361.24 KiB      189.62 KiB
  dist/js/29.js                             1458.36 KiB      270.18 KiB
  dist/js/62.js                             1023.41 KiB      268.25 KiB
  dist/js/30.js                             733.61 KiB       48.31 KiB
  dist/js/15.js                             721.61 KiB       165.90 KiB
  dist/js/31.js                             624.13 KiB       51.81 KiB
  dist/lib/element-ui.js                    574.10 KiB       146.28 KiB
  dist/luckySheet/plugins/js/plugin.js      516.45 KiB       171.01 KiB
  dist/js/39.js                             452.52 KiB       47.73 KiB
  dist/js/32.js                             374.41 KiB       30.16 KiB
  dist/luckySheet/demoData/getTargetData    356.94 KiB       108.96 KiB
  .js
  dist/js/17.js                             294.81 KiB       29.28 KiB
  dist/js/33.js                             291.94 KiB       21.63 KiB
  dist/js/44.js                             277.15 KiB       27.30 KiB
  dist/js/18.js                             252.92 KiB       29.83 KiB
  dist/js/45.js                             252.70 KiB       24.98 KiB
  dist/js/38.js                             247.51 KiB       22.10 KiB
  dist/js/42.js                             240.20 KiB       25.99 KiB
  dist/js/48.js                             239.69 KiB       27.27 KiB
  dist/js/46.js                             239.17 KiB       27.28 KiB
  dist/js/47.js                             238.35 KiB       27.25 KiB
  dist/js/50.js                             235.38 KiB       26.90 KiB
  dist/js/52.js                             234.55 KiB       26.80 KiB
  dist/js/41.js                             229.51 KiB       20.86 KiB
  dist/js/56.js                             227.10 KiB       24.90 KiB
  dist/js/49.js                             225.77 KiB       25.07 KiB
  dist/js/5.js                              223.73 KiB       21.89 KiB
  dist/js/60.js                             215.41 KiB       24.21 KiB
  dist/js/40.js                             209.04 KiB       18.75 KiB
  dist/js/57.js                             207.80 KiB       22.01 KiB
  dist/js/55.js                             207.69 KiB       21.99 KiB
  dist/js/35.js                             206.54 KiB       16.95 KiB
  dist/js/58.js                             204.46 KiB       23.30 KiB
  dist/js/51.js                             202.64 KiB       22.18 KiB
  dist/js/36.js                             198.37 KiB       19.40 KiB
  dist/js/54.js                             182.43 KiB       18.54 KiB
  dist/js/37.js                             179.95 KiB       19.30 KiB
  dist/js/65.js                             178.59 KiB       42.56 KiB
  dist/js/72.js                             176.26 KiB       20.67 KiB
  dist/js/34.js                             171.65 KiB       16.14 KiB
  dist/js/24.js                             153.64 KiB       22.00 KiB
  dist/js/59.js                             142.84 KiB       14.31 KiB
  dist/js/43.js                             139.18 KiB       10.53 KiB
  dist/js/53.js                             137.62 KiB       14.12 KiB
  dist/js/21.js                             128.26 KiB       13.89 KiB
  dist/js/89.js                             122.16 KiB       16.32 KiB
  dist/js/74.js                             114.47 KiB       16.35 KiB
  dist/js/105.js                            111.78 KiB       14.35 KiB
  dist/js/112.js                            109.17 KiB       14.21 KiB
  dist/js/108.js                            109.06 KiB       13.50 KiB
  dist/js/117.js                            108.12 KiB       14.92 KiB
  dist/js/71.js                             107.90 KiB       14.77 KiB
  dist/js/73.js                             107.83 KiB       13.85 KiB
  dist/js/114.js                            107.46 KiB       15.43 KiB
  dist/js/116.js                            107.16 KiB       15.13 KiB
  dist/js/82.js                             106.98 KiB       15.71 KiB
  dist/js/79.js                             105.19 KiB       16.12 KiB
  dist/js/88.js                             103.92 KiB       14.67 KiB
  dist/js/64.js                             102.49 KiB       13.64 KiB
  dist/js/80.js                             102.43 KiB       15.45 KiB
  dist/js/61.js                             101.45 KiB       8.83 KiB
  dist/js/110.js                            101.19 KiB       13.51 KiB
  dist/js/66.js                             99.70 KiB        12.23 KiB
  dist/js/130.js                            99.06 KiB        12.74 KiB
  dist/js/96.js                             99.01 KiB        13.95 KiB
  dist/js/145.js                            97.39 KiB        14.40 KiB
  dist/js/85.js                             96.09 KiB        14.37 KiB
  dist/luckySheet/demoData/sheetSparklin    95.09 KiB        8.20 KiB
  e.js
  dist/js/135.js                            94.51 KiB        13.02 KiB
  dist/js/83.js                             94.23 KiB        13.97 KiB
  dist/js/113.js                            93.12 KiB        13.38 KiB
  dist/js/122.js                            92.97 KiB        13.44 KiB
  dist/js/102.js                            92.47 KiB        12.89 KiB
  dist/js/90.js                             92.10 KiB        13.39 KiB
  dist/luckySheet/assets/iconfont/iconfo    91.09 KiB        18.01 KiB
  nt.js
  dist/js/115.js                            90.51 KiB        12.77 KiB
  dist/js/99.js                             90.09 KiB        12.73 KiB
  dist/js/111.js                            89.80 KiB        10.97 KiB
  dist/js/23.js                             89.48 KiB        9.63 KiB
  dist/js/100.js                            89.28 KiB        12.71 KiB
  dist/js/124.js                            89.24 KiB        12.68 KiB
  dist/js/129.js                            88.92 KiB        12.61 KiB
  dist/js/106.js                            88.89 KiB        11.91 KiB
  dist/js/91.js                             88.70 KiB        12.82 KiB
  dist/js/98.js                             88.60 KiB        12.68 KiB
  dist/js/97.js                             88.45 KiB        12.54 KiB
  dist/js/104.js                            87.51 KiB        11.58 KiB
  dist/js/0.js                              86.88 KiB        9.06 KiB
  dist/js/103.js                            85.11 KiB        12.37 KiB
  dist/js/87.js                             84.96 KiB        12.32 KiB
  dist/js/69.js                             84.71 KiB        11.45 KiB
  dist/js/144.js                            84.01 KiB        11.97 KiB
  dist/js/95.js                             83.77 KiB        12.10 KiB
  dist/js/107.js                            83.38 KiB        11.62 KiB
  dist/js/143.js                            82.99 KiB        11.91 KiB
  dist/js/70.js                             81.11 KiB        11.04 KiB
  dist/luckySheet/demoData/sheetConditio    80.66 KiB        3.73 KiB
  nFormat.js
  dist/luckySheet/demoData/sheetChart.js    79.98 KiB        4.88 KiB
  dist/js/121.js                            79.92 KiB        11.80 KiB
  dist/luckySheet/demoData/sheetCell.js     79.72 KiB        4.07 KiB
  dist/js/12.js                             79.71 KiB        11.39 KiB
  dist/js/128.js                            78.78 KiB        11.90 KiB
  dist/js/109.js                            78.67 KiB        11.31 KiB
  dist/luckySheet/demoData/sheetFormula.    78.66 KiB        4.25 KiB
  js
  dist/js/20.js                             78.25 KiB        11.87 KiB
  dist/js/63.js                             77.56 KiB        10.34 KiB
  dist/js/101.js                            77.28 KiB        11.14 KiB
  dist/js/118.js                            77.12 KiB        11.16 KiB
  dist/js/8.js                              76.89 KiB        11.65 KiB
  dist/js/68.js                             76.80 KiB        10.27 KiB
  dist/js/86.js                             75.50 KiB        10.75 KiB
  dist/js/84.js                             75.42 KiB        11.00 KiB
  dist/js/119.js                            75.07 KiB        11.29 KiB
  dist/js/133.js                            74.46 KiB        10.77 KiB
  dist/js/138.js                            74.46 KiB        10.42 KiB
  dist/js/164.js                            74.13 KiB        9.91 KiB
  dist/js/139.js                            73.14 KiB        10.49 KiB
  dist/js/120.js                            73.13 KiB        10.58 KiB
  dist/js/137.js                            72.26 KiB        10.40 KiB
  dist/js/140.js                            71.66 KiB        10.45 KiB
  dist/js/6.js                              71.49 KiB        9.19 KiB
  dist/js/136.js                            70.54 KiB        10.18 KiB
  dist/js/142.js                            70.19 KiB        10.11 KiB
  dist/js/81.js                             68.70 KiB        10.18 KiB
  dist/js/123.js                            67.79 KiB        9.90 KiB
  dist/js/1.js                              67.70 KiB        9.73 KiB
  dist/js/125.js                            67.45 KiB        9.83 KiB
  dist/js/67.js                             67.31 KiB        7.35 KiB
  dist/js/127.js                            66.63 KiB        9.48 KiB
  dist/js/146.js                            64.39 KiB        9.01 KiB
  dist/js/14.js                             64.34 KiB        9.68 KiB
  dist/js/147.js                            64.26 KiB        8.98 KiB
  dist/js/9.js                              64.07 KiB        10.27 KiB
  dist/js/141.js                            63.67 KiB        9.25 KiB
  dist/js/92.js                             63.56 KiB        9.20 KiB
  dist/js/166.js                            63.08 KiB        7.86 KiB
  dist/js/174.js                            62.38 KiB        8.94 KiB
  dist/js/19.js                             62.38 KiB        7.73 KiB
  dist/js/25.js                             62.31 KiB        9.12 KiB
  dist/js/10.js                             61.48 KiB        9.07 KiB
  dist/js/13.js                             60.21 KiB        9.93 KiB
  dist/js/94.js                             59.92 KiB        8.81 KiB
  dist/js/93.js                             59.71 KiB        8.72 KiB
  dist/js/3.js                              59.01 KiB        8.80 KiB
  dist/js/134.js                            58.11 KiB        8.29 KiB
  dist/js/126.js                            57.91 KiB        8.04 KiB
  dist/js/131.js                            56.83 KiB        8.27 KiB
  dist/js/4.js                              54.56 KiB        8.18 KiB
  dist/js/78.js                             54.52 KiB        6.94 KiB
  dist/js/132.js                            54.04 KiB        7.52 KiB
  dist/js/7.js                              53.98 KiB        7.81 KiB
  dist/js/2.js                              51.16 KiB        7.08 KiB
  dist/js/26.js                             49.14 KiB        6.70 KiB
  dist/js/16.js                             48.45 KiB        6.66 KiB
  dist/js/11.js                             48.04 KiB        6.56 KiB
  dist/js/152.js                            47.67 KiB        7.09 KiB
  dist/js/165.js                            46.09 KiB        6.75 KiB
  dist/js/160.js                            45.89 KiB        6.42 KiB
  dist/js/167.js                            44.62 KiB        4.99 KiB
  dist/js/161.js                            44.12 KiB        6.54 KiB
  dist/js/169.js                            43.94 KiB        6.76 KiB
  dist/luckySheet/demoData/sheetPicture.    43.79 KiB        8.74 KiB
  js
  dist/js/151.js                            42.85 KiB        5.95 KiB
  dist/js/148.js                            42.44 KiB        5.96 KiB
  dist/js/162.js                            42.37 KiB        6.38 KiB
  dist/js/77.js                             41.13 KiB        5.24 KiB
  dist/js/155.js                            40.46 KiB        6.39 KiB
  dist/js/76.js                             39.66 KiB        4.95 KiB
  dist/js/22.js                             39.55 KiB        5.04 KiB
  dist/js/168.js                            39.32 KiB        4.75 KiB
  dist/js/75.js                             38.59 KiB        4.83 KiB
  dist/js/149.js                            34.72 KiB        5.01 KiB
  dist/js/175.js                            33.84 KiB        5.43 KiB
  dist/js/154.js                            33.04 KiB        4.96 KiB
  dist/js/163.js                            32.92 KiB        5.06 KiB
  dist/js/171.js                            32.61 KiB        5.37 KiB
  dist/js/153.js                            32.15 KiB        4.82 KiB
  dist/js/159.js                            31.69 KiB        4.88 KiB
  dist/js/157.js                            31.48 KiB        4.80 KiB
  dist/js/158.js                            30.43 KiB        4.59 KiB
  dist/js/156.js                            30.36 KiB        4.60 KiB
  dist/js/150.js                            28.93 KiB        5.13 KiB
  dist/js/172.js                            26.00 KiB        4.27 KiB
  dist/js/27.js                             21.30 KiB        4.03 KiB
  dist/js/173.js                            20.56 KiB        3.53 KiB
  dist/luckySheet/demoData/sheetDataVeri    19.84 KiB        1.62 KiB
  fication.js
  dist/js/170.js                            16.21 KiB        2.94 KiB
  dist/js/185.js                            13.42 KiB        1.95 KiB
  dist/js/183.js                            13.24 KiB        1.96 KiB
  dist/js/188.js                            13.10 KiB        1.91 KiB
  dist/js/184.js                            12.91 KiB        1.77 KiB
  dist/js/180.js                            12.69 KiB        1.72 KiB
  dist/js/182.js                            12.63 KiB        1.75 KiB
  dist/js/181.js                            12.53 KiB        1.74 KiB
  dist/luckySheet/demoData/sheetTable.js    12.22 KiB        1.46 KiB
  dist/js/186.js                            11.46 KiB        1.47 KiB
  dist/js/187.js                            11.37 KiB        1.46 KiB
  dist/js/179.js                            11.34 KiB        1.72 KiB
  dist/js/176.js                            10.36 KiB        1.55 KiB
  dist/js/178.js                            10.35 KiB        1.53 KiB
  dist/js/177.js                            10.22 KiB        1.53 KiB
  dist/luckySheet/demoData/chat.js          9.79 KiB         2.92 KiB
  dist/luckySheet/demoData/sheetPivotTab    8.50 KiB         0.83 KiB
  leData.js
  dist/js/189.js                            6.99 KiB         1.21 KiB
  dist/js/190.js                            6.94 KiB         1.21 KiB
  dist/luckySheet/demoData/sheetPivotTab    2.45 KiB         0.72 KiB
  le.js
  dist/luckySheet/demoData/demoFeature.j    1.33 KiB         0.78 KiB
  s
  dist/luckySheet/demoData/sheetComment.    0.96 KiB         0.38 KiB
  js
  dist/luckySheet/expendPlugins/print/pr    0.00 KiB         0.02 KiB
  int.js
  dist/lib/element-ui.css                   233.38 KiB       35.76 KiB
  dist/luckySheet/css/luckysheet.css        141.87 KiB       26.59 KiB
  dist/luckySheet/plugins/plugins.css       66.08 KiB        11.61 KiB
  dist/luckySheet/assets/iconfont/iconfo    18.99 KiB        10.22 KiB
  nt.css
  dist/luckySheet/plugins/css/pluginsCss    10.25 KiB        2.90 KiB
  .css
  dist/luckySheet/assets/iconfont/demo.c    8.23 KiB         2.62 KiB
  ss
  dist/luckySheet/expendPlugins/chart/ch    2.69 KiB         0.83 KiB
  artmix.css
  dist/luckySheet/expendPlugins/print/pr    0.76 KiB         0.31 KiB
  int.css

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html

Done in 35.03s.
[Pipeline] }
[Pipeline] // nodejs
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (构建镜像)
[Pipeline] withCredentials
Masking supported pattern matches of $password
[Pipeline] {
[Pipeline] sh
+ echo '===================================================== Docker Build Start ====================================================='
===================================================== Docker Build Start =====================================================
+ sudo docker login -u zyuser -p **** harbor.mideazy.com
WARNING! Using --password via the CLI is insecure. Use --password-stdin.
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
+ sudo docker build -t harbor.mideazy.com/paas/mtclq/uat/mtclq:uat20240614203258 .
Sending build context to Docker daemon  88.76MB

Step 1/4 : FROM harbor.mideazy.com/library/nginx:1.21.4-mideazy
 ---> 711c353a67cc
Step 2/4 : WORKDIR /apps/svr/nginx/html
 ---> Running in 099256737eed
Removing intermediate container 099256737eed
 ---> 9c5b88e59345
Step 3/4 : COPY dist/. /apps/svr/nginx/html/
 ---> b2f99177f02d
Step 4/4 : EXPOSE 80
 ---> Running in be2b0837d005
Removing intermediate container be2b0837d005
 ---> b5783adbe87c
Successfully built b5783adbe87c
Successfully tagged harbor.mideazy.com/paas/mtclq/uat/mtclq:uat20240614203258
+ sudo docker push harbor.mideazy.com/paas/mtclq/uat/mtclq:uat20240614203258
The push refers to repository [harbor.mideazy.com/paas/mtclq/uat/mtclq]
9d5a8fab8597: Preparing
f05e0f93ef28: Preparing
9da61e36cc0f: Preparing
eaad21abc9c5: Preparing
174f56854903: Preparing
eaad21abc9c5: Layer already exists
f05e0f93ef28: Layer already exists
174f56854903: Layer already exists
9da61e36cc0f: Layer already exists
9d5a8fab8597: Pushed
uat20240614203258: digest: sha256:ed6689cb61a258c54a8f9820a84033eeafb287ca46add6b9d04f191769bf58a1 size: 1369
+ sudo docker rmi harbor.mideazy.com/paas/mtclq/uat/mtclq:uat20240614203258
Untagged: harbor.mideazy.com/paas/mtclq/uat/mtclq:uat20240614203258
Untagged: harbor.mideazy.com/paas/mtclq/uat/mtclq@sha256:ed6689cb61a258c54a8f9820a84033eeafb287ca46add6b9d04f191769bf58a1
Deleted: sha256:b5783adbe87c4e66e611a3a5ccc92db6c414c6b0660acb2c20ca6c5c36ddff8c
Deleted: sha256:b2f99177f02d110d57e6281865524ab37bd9ef7211016b26c9a20d1f872ad2cb
Deleted: sha256:b20aeb0a31adb93148872578e8e4cf831236c6e8d41c3bbd0de603702e21528d
Deleted: sha256:9c5b88e593457f2a94fbc13c1c6474177564a57e341dc9c9295e57d85a009844
+ echo '===================================================== Docker Build End ====================================================='
===================================================== Docker Build End =====================================================
[Pipeline] }
[Pipeline] // withCredentials
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (部署k8s或者上线)
[Pipeline] sh
+ sed -e 's#{DOCKER_IMAGE}#harbor.mideazy.com/paas/mtclq/uat/mtclq:uat20240614203258#g' k8s/k8s-uat.yml
[Pipeline] sshPublisher
[Pipeline] }
[Pipeline] // stage
SSH: Connecting from host [mvxl12679]
SSH: Connecting with configuration [k8s22-physical-test10.18.226.75] ...
SSH: EXEC: completed after 601 ms
SSH: Disconnecting configuration [k8s22-physical-test10.18.226.75] ...
SSH: Transferred 1 file(s)
[Pipeline] stage
[Pipeline] { (服务上线)
Stage "服务上线" skipped due to when conditional
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (服务下线)
Stage "服务下线" skipped due to when conditional
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
