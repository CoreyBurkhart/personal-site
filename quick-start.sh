#!/bin/bash
#syntax: command [-noserve]

# -noserve : run sript WITHOUT running the development web server
# I find myself always typing the same 3  commands when I need to work on a project so this is a script to do them for me!

#arguments come in the form $1 $2... so "-noserve" will be $1. $0 is the name of the script file?

#change to the project directory
#this changes the directory IN THE SUBSHELL if the script is executed in a normal way (./scriptname)
#since want to change to this directory in the current shell I have to run the script " . scriptname.sh"
cd ~/Documents/web-dev/personal-site;

# start my text editor in that directory
atom .;

#handle the argument if provided (-noserve)
if [[ ($1) ]]
  then
  #do something only if $1 equals "-noserve"
  if [[ $1 -eq -noserve ]]
    # they typed it right, tell the user that the development server will not begin
  then echo "not starting development server";
  #the user got the option wrong, dont do anything and tell the user they f'ed up
  else echo "option $1 not valid"; exit;
  fi
#they want the dev server, so run it
else npm run startDev;
fi


# for setting scripts to be executed as a command in the shell at any time...
#the .bashrc file is ran at startup so we to put the command there/
# set an alias in the ~/.bashrc file...   alias command_name=". /PATH_TO_SCRIPT"
  #what I did... alias personal-site=". $HOME/bin/quick-start-personal.sh"

# .bashrc actually looks for a file called .bash_aliases too, so if you want you can create that file, make it executable and put your alias in there. It just makes them more managable since all your custom commands are in one file
