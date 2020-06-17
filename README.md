# Angular Cherry Pick

A set of angular config you can pick

## Add the remote repo to your project

Go on your local repository
`git remote add pick https://github.com/timothyalcaide/angular-cherry-pick.git`
`git fetch pick`

## Pick the config you want

`git log pick/master`
Select the <sha> of the commit you want to pick

### One commit

`git cherry-pick <sha>`

### Two commits

`git cherry-pick <shaA>..<shaB>`
A should be older than B

### Range of commits

`git cherry-pick <shaA>^..<shaB>`

## Conflict

In case you have a conflict, solve it and type
`git cherry-pick --continue`

## When you are picked commits you want

Instal package 
`npm i`

Delete pick remote
`git remote rm pick`

If you want to list the remote repo
`git remote -v`
