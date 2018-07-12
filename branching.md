# Git Branching Cheat Sheet

- [Common Tasks](#common-tasks)
- [Git Branching Workflow with Github Pull Requests](#git-branching-workflow-with-github-pull-requests)

## Common Tasks

- `git branch BRANCH-NAME` - Create a branch with the name of **BRANCH-NAME**
- `git branch` - Display the branch you're currently on
- `git branch -a` - Show all available branches that have been created
- `git checkout BRANCH-NAME` - Switch to the branch with name **BRANCH-NAME**
- `git merge --no-ff BRANCH-NAME` - Merge **BRANCH-NAME** into the current branch (use `git branch` to determine the current branch)
- `git pull origin BRANCH-NAME` - Pull down changes from the remote


## Git Branching Workflow with Github Pull Requests

GitHub Pull Requests allow others to review our code and approve the changes. It essentially replaces the final `merge` of the feature branch back into `master`.

### The first time (project setup)

On your github project repo. Click the `settings` tab and then click `collaborators` in the left-side menu. Add your team members.

After adding collaborators, click the `settings` tab and then click `branches` in the left-side menu. Click `Choose Branch` and select `master`. Select the following:

- [ ] Protect this branch
  - [ ] Require pull request reviews before merging
    - [ ] Dismiss stale pull request approvals when new commits are pushed
- [ ] Include administrators

### Every time

Make sure the code on your computer is up to the latest version on GitHub by switching to master and pulling down the changes.

```
git checkout master
git pull
```

Create a branch and switch to that branch.

```
git checkout master
git branch feature-NAME
git checkout feature-NAME
```

These three commands are the same as

```
git checkout -b feature-Name master
```

Git add, commit, and push as usual

```
git add .
git commit -m "MESSAGE"
git push
```

Repeat this until you are all done with your feature (probably a few commits). When you're done with the feature, it's time to create a Pull Request. First, it's important to make sure that your code is up to date with the `master` branch. You will do this by updating your local master branch with what is on GitHub

```
git checkout master
git pull
```

Resolve any conflicts (although, as long as you aren't committing to `master`, you shouldn't have conflicts). Then checkout your own branch and merge master into it with:

```
git checkout feature-NAME
git merge --no-ff master
```

If there are no conflicts, you will probably be thrown into `ViM` where you can type `:wq`. In the event of a merge conflict, look at any impacted files. Make the required changes to make the files look how you would like them to look, and commit them. (the `git commit` without the `-m` here will create a default message which you can accept in `ViM` with `:wq`)

```
git add .
git commit
git push origin master
```

This makes sure your code is all set to be merged into `master` without any conflicts.

On github, click the `New Pull Request` button. Make sure the `base` is `master` and `compare` is your feature branch.

Click `Create Pull Request` and add a `Reviewer` from your team.

If the reviewer approved the Pull Request, then you may merge the Pull Request into master.

To keep your code up to date on your computer, switch to master and pull down the changes.

```
git checkout master
git pull
```

Repeat.