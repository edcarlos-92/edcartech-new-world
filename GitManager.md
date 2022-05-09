# Git Links

https://ohshitgit.com/
https://i.redd.it/8341g68g1v7y.png
https://about.gitlab.com/images/press/git-cheat-sheet.pdf
https://devconnected.com/how-to-git-add-all-files/
https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl

git init -- Creates the git folder in the directory
git status -- Checks the files that are ready and gives information
git add --all -- :!.next -- Prepares files that will be added
git commit -m "first commit" -- Adds files to the .git folder created from git init
git branch -M master
git remote add origin https://github.com/edcarlos-92/dees-kreation.git
`git remote -v`
git push -u origin master
`git push` -- for subsequent local commit

`------Git Updates--------- `
git status -- Optional
git add .
git commit -m "first commit"
git push

`After every change Remember to Add & commit `

# Rmove from Git online

git rm -r --cached myFolder

# Switch to Another Repo

git remote set-url origin https://github.com/edcarlos-92/dees-kreation.git

# Check if Repo Changed

git remote -v

# Another Way to add

git remote add upstream https://github.com/edcarlos-92/dees-kreation.git

# Force Replace

git push -f origin master

# Full Guide

https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories

# Delete Everything and re-add

1.) Delete everything in your repository folder

2.) run `git rm *` to tell git to remove all files (check with `git status` whether there are any unstaged files left)

3.) do a `git commit -a -m "commitmessage"` a git push origin master to delete all files on the remote git server

4.) check if you have an empty remote repository now

5.) copy all new files to the local repository folder

6.) run `git add *` to tell git to add all new files (check with `git status` whether there are any unstaged files left)

7.) commit and push the new files

Now you should have the version on your remote git repository.
