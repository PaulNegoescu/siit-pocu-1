# Using this repository

## Get the files in the first course

Open a command line, use `cd <dirname>` to navigate to a folder where you want to havbe this repo. `<dirname>` is the actual **folder name and full path to it**.

Go to the green button on github and copy the url from there.

Now type: `git clone <paste-url-here>` and wait for the command to complete.

You now have a new folder called `siit-pocu-1`.

Type these two commands in succession, wait for each to complete:

```
cd siit-pocu-1
code .
```

## Get subsequent course files

Type these commands in succession, wait for each to complete:

```
cd <dirname>/siit-pocu-1
git pull
git branch -a
```

You now see a list of branches with every course we have completed. Something like `origin/curs-css`.

Now type `git switch curs-css` where `curs-css` is the name of the branch after the `origin/` part.

You can now open the files in VSCode: `code .` These are the files for the respective course!

## Go to any course

`git switch <branch-name>`

For example, to switch to the first course: `git switch main`
For the CSS course: `git switch curs-css`

When you switch all files in the folder change and you can just see the apropriate files for the course.
