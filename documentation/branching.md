# Git Branching Workflow with Github Pull Requests

GitHub Pull Requests allow others to review our code and approve the changes. This is the process for how we write code at abamath.

- [Our Branches](#our-branches)
- [Our Process](#our-process)

## Our Branches

A branch is a version of code. This project has a few branches:

### master

The **master** branch contains fully tested and reviewed code that is deployed. Pushing to the master branch will be rejected, since all code needs to be tested and reviewed before it is deployed (otherwise we would accidentally be taking down the entire site on a regular basis).

### develop

The **develop** branch contains fully tested and reviewed code that is *ready to be* deployed. Pushing to the develop branch will be rejected. When you think your code is ready, you will *request* that your code be *pulled* into the develop branch. Once it is approved, and after the tests pass, then you may merge your code into the develop branch.

### feature-*

This is where the real work happens and where you will be pushing your code. When working on a task, you will create a brand new branch for the feature that you are working on. You will branch off of the develop branch, and when you believe your code is ready to be a part of the deployed code, you will make a Pull Request to let everyone know it is ready for review.

> Note on naming branches: This will not literally be a branch named `feature-*`. It will be named something like `feature-footer-image` or `feature-mailing-form` to match what is being done on that feature. It should be named after what is being done, and not who is doing the work. For example, if Luke is working on a feature to add a list of animals, `feature-luke` would be a bad name, `feature-animal-list` would be a good name. Luke could stop working on this branch and someone else could pick it up, it also helps to have a clear history of what was done. GitHub will automatically track who did the work.

## Our Process

For this example, let's say we are creating a brand new page that is all about penguins.

At a high level, we need to:

1. [Make sure your code is up to date with GitHub](#make-sure-your-code-is-up-to-date-with-gitHub)
2. [Create a new branch on your computer](#create-a-new-branch-on-your-computer)
3. [Make the changes and push to GitHub](#make-the-changes-and-push-to-github)
4. [Ask the team to review your code](#ask-the-team-to-review-your-code)
5. [Merge your code into the develop branch](#merge-your-code-into-the-develop-branch)

### Make sure your code is up to date with GitHub

Before creating a new branch, make sure the code on your computer is up to date with GitHub by pulling down the latest code. This can be confusing, because it also uses the word `pull`. Keep `git pull` and `Pull Request` separate in your mind as two completely different things.

It helps to remember that for a given feature, there are four different versions of the code you need to track.

1. `develop` branch on GitHub
2. `develop` branch on your computer
3. `feature-penguin-page` branch on GitHub
4. `feature-penguin-page` branch on your computer

```
git checkout develop
git pull
```

### Create a new branch on your computer

You need a place to make changes that won't interfere with everyone else. That is why you will create a branch.

```
git checkout -b feature-penguin-page develop
```

> Note: If you are already on the `develop` branch, you can just write `git checkout -b feature-penguin-page` instead.

### Make the changes and push to GitHub

Even if the task is not 100% complete, you should make commits often so that you don't lose your progress (it's like saving, but on a larger scale). After you make a few changes and things are working, you should make your first commit.

```
git add .
git commit -m "add page for penguins"
git push -u origin feature-penguin-page
```

> Note: commit messages should be meaningful. A commit message like "not working" or "ugh" is not helpful to the rest of the team. A good commit message should be able to have "This will..." put in front of it to make sense. For example "This will add page for penguins" makes sense, so `add page for penguins` is a good commit message.

The `-u origin feature-penguin-page` creates an identical branch on GitHub to the one on your computer. For all following commits, you will only need to do this.

```
git add .
git commit -m "add details about penguins"
git push
```

Repeat this until you are all done with your feature (probably a few commits).

### Ask the team to review your code

When you're done with the feature, and you think your code is looking pretty good, it's time to create a Pull Request. First, it's possible that while you were working on your feature, someone else made changes to the `develop` branch.

```
git checkout develop
git pull
```

> Note: You may get a merge conflict. Resolve any conflicts (although, as long as you aren't committing to `develop`, you shouldn't have conflicts). If you get a conflict at this point, ask for help.

If that went well, then checkout your own branch and merge master into it with:

```
git checkout feature-penguin-page
git merge --no-ff master
```

If there are no conflicts, you will probably be thrown into `ViM`. This can seem scary, but if things are going well, type `:wq`, and you will be brought back to your normal terminal.

> Note: You may also get a merge conflict here. In the event of a merge conflict, look at any impacted files. Make the required changes to make the files look how you would like them to look, and commit them. (the `git commit` without the `-m` here will create a default message which you can accept in `ViM` with `:wq`). Honestly, this part can be pretty intimidating when it doesn't go right, so it's probably a good idea to ask for help the first few times.

```
git add .
git commit
git push
```

This makes sure your code is all set to be merged into `master` without any conflicts.

On github, click the `New Pull Request` button. Make sure the `base` is `develop` and `compare` is your feature branch.

Click `Create Pull Request` and add a `Reviewer` from your team.

### Merge your code into the develop branch

If the reviewer approved the Pull Request, then you may click the big green button that allows you to merge the Pull Request into master.

Repeat.
