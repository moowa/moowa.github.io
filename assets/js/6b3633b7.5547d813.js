"use strict";(self.webpackChunkknowtes=self.webpackChunkknowtes||[]).push([[3467],{4803:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=n(4848),t=n(8453);const r={tags:["developer tools","git"],sidebar_class_name:"hidden"},l="Git",c={id:"knowtes/git",title:"Git",description:"Branch",source:"@site/docs/knowtes/git.md",sourceDirName:"knowtes",slug:"/knowtes/git",permalink:"/docs/knowtes/git",draft:!1,unlisted:!1,tags:[{inline:!0,label:"developer tools",permalink:"/docs/tags/developer-tools"},{inline:!0,label:"git",permalink:"/docs/tags/git"}],version:"current",frontMatter:{tags:["developer tools","git"],sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"f-strings",permalink:"/docs/knowtes/fstring"},next:{title:"GitHub Actions",permalink:"/docs/knowtes/github_actions"}},o={},h=[{value:"Branch",id:"branch",level:2},{value:"Push",id:"push",level:2},{value:"Commit",id:"commit",level:2},{value:"Rebase",id:"rebase",level:2},{value:"Edit previously pushed changes",id:"edit-previously-pushed-changes",level:3},{value:"Diff",id:"diff",level:2},{value:"Stash",id:"stash",level:2},{value:"Starting a new git repository",id:"starting-a-new-git-repository",level:2},{value:"Example Cherry-picking",id:"example-cherry-picking",level:2},{value:"Example git merge",id:"example-git-merge",level:2},{value:"Fetch vs Pull",id:"fetch-vs-pull",level:2},{value:"Deleting a branch",id:"deleting-a-branch",level:2},{value:"Others",id:"others",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"git",children:"Git"}),"\n",(0,s.jsx)(i.h2,{id:"branch",children:"Branch"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git checkout -b <branchname>"})," - create new branch"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git checkout <branchname>"})," - go to specific branch"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git branch -a"})," - list all branches including remote"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git branch"})," - list all local branches"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"push",children:"Push"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git push --set-upstream origin <branchname>"})," - when you have created a local branch and want to push the branch to remote"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"commit",children:"Commit"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git reset --soft HEAD~1"})," - undo last commit but local modifications remain in uncommitted state (i.e., your changes are still there)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git reset --hard HEAD~1"})," - undo last commit and remove local modifications (i.e., goodbye, changes)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git commit --amend"})," - edit last commit message (not yet pushed)"]}),"\n",(0,s.jsxs)(i.li,{children:["To amend pushed commit message:","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Do ",(0,s.jsx)(i.code,{children:"git commit --amend"})]}),"\n",(0,s.jsx)(i.li,{children:"This will open up the editor. Modify the commit message, save and exit."}),"\n",(0,s.jsxs)(i.li,{children:["Do ",(0,s.jsx)(i.code,{children:"git push --force-with-lease"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"rebase",children:"Rebase"}),"\n",(0,s.jsx)(i.p,{children:"Scenario: Performed CommitA but forgot to include some files."}),"\n",(0,s.jsx)(i.p,{children:"Solution:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Perform CommitB by including all files needeed. There is no need to put fancy commit message, since we will use the previous commit message."}),"\n",(0,s.jsxs)(i.li,{children:["Do ",(0,s.jsx)(i.code,{children:"git rebase -i HEAD~2"})]}),"\n",(0,s.jsx)(i.li,{children:"In the editor that will come out, indicate and save:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"pick CommitA\nfixup CommitB\n"})}),"\n",(0,s.jsx)(i.p,{children:"Scenario: Created a branch from main, someone else pushed changes to main, how to get those changes to current working branch."}),"\n",(0,s.jsx)(i.p,{children:"Solution:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"In working branch, stash all changes."}),"\n",(0,s.jsx)(i.li,{children:"Go to main branch and pull."}),"\n",(0,s.jsxs)(i.li,{children:["Go to working branch and do ",(0,s.jsx)(i.code,{children:"git rebase main"}),". Do this only if no changes have been pushed yet. Otherwise, use force with lease."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"edit-previously-pushed-changes",children:"Edit previously pushed changes"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"\u276f git commit -m 'f'\n[<branchname> 66312e1] f\n\u276f git rebase -i HEAD~2\nSuccessfully rebased and updated refs/heads/<branchname>.\n\u276f git log\n\u276f git show e00a7a1\n\u276f git push --force-with-lease\n"})}),"\n",(0,s.jsx)(i.h2,{id:"diff",children:"Diff"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Check diff between two branches ",(0,s.jsx)(i.a,{href:"https://devconnected.com/how-to-compare-two-git-branches/",children:"how to compare two branches"}),"\u2197\ufe0f"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git diff <branch1>..<branch2>"}),' - (two dots) compare "endpoints" of the two branches']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git diff <branch1>...<branch2>"}),' - (three dots) compare the "endpoint" of branch2 with the common ancestor (where branch2 was forked) of the 2 branches']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git diff --name-only"})," - list filenames of modified files, including mode changes"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git diff --name-only -G."})," - list filenames of modified files, ignoring mode changes"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git diff --sumary"})," - list filenames and mode changes (may include file modification)"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"stash",children:"Stash"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git stash pop stash@{stash_index}"})," - pop specific index"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git stash show -p stash@{stash_index} --name-only"})," - show filenames of modified files in stash_index"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git stash show -p stash@{stash_index}"})," -"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'git stash push -m "with mods for db retention"'})," - include a message/label during stashing"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git stash apply"})," - apply changes from latest stash stack, but do not remove from stack (not pop)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git stash clear"})," - remove everything from stash"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git stash drop stash@{stash_index}"})," - remove particular stash index from stash"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git stash list --name-status"})," - show list of stashes along with modified files and their status"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"starting-a-new-git-repository",children:"Starting a new git repository"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Inside project directory, do ",(0,s.jsx)(i.code,{children:"git init"}),", then add and commit. The files will now be in a local repository."]}),"\n",(0,s.jsx)(i.li,{children:"In github, create a new repo. Then locally, do"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"git remote add origin git@github.com:<user>/<repo_name>.git\ngit branch -M main\ngit push -u origin main \n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://kbroman.org/github_tutorial/pages/init.html",children:"tutorial for new git repo"}),"\u2197\ufe0f"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"example-cherry-picking",children:"Example Cherry-picking"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git log"})," to get commit hash"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git show"})," to check which hash to revert to"]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"git revert <hash>"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"git cherry-pick <hash>"})}),"\n",(0,s.jsx)(i.li,{children:"modify files as needed"}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git add"})," changed files"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git cherry-pick --continue"})," to continue cherry-picking"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"example-git-merge",children:"Example git merge"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Original branch: master"}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"git checkout -b <new_branch>"})}),"\n",(0,s.jsx)(i.li,{children:"Do modifications and commit."}),"\n",(0,s.jsxs)(i.li,{children:["Go to master: ",(0,s.jsx)(i.code,{children:"git checkout master"})]}),"\n",(0,s.jsxs)(i.li,{children:["Do merge: ",(0,s.jsx)(i.code,{children:"git merge <new_branch>"})]}),"\n",(0,s.jsxs)(i.li,{children:["If merge is okay, and ",(0,s.jsx)(i.code,{children:"<new_branch>"})," can be deleted, do ",(0,s.jsx)(i.code,{children:"git branch -d <new_branch>"})]}),"\n",(0,s.jsxs)(i.li,{children:["If there are conflicts, resolve them and ensure all have been resolved by finding ",(0,s.jsx)(i.code,{children:'"<<<<"'})," and ",(0,s.jsx)(i.code,{children:'">>>>"'}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Do ",(0,s.jsx)(i.code,{children:"git commit"}),'. This will have a default commit message of "Merge branch ',(0,s.jsx)(i.code,{children:"<new_branch>"}),'".']}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"fetch-vs-pull",children:"Fetch vs Pull"}),"\n",(0,s.jsxs)(i.p,{children:["Git Fetch gets all the changes from the remote repository to the local repository, without making any changes to the current working directory. This is done with ",(0,s.jsx)(i.code,{children:"git fetch"})," then to merge the changes to the current directory, do ",(0,s.jsx)(i.code,{children:"git merge origin/<branch name>"}),". Git Pull gets all the changes from the remote repository to the current working directory and automatically tries to merge or rebase them to the current working directory."]}),"\n",(0,s.jsx)(i.h2,{id:"deleting-a-branch",children:"Deleting a branch"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["To delete a local branch: ",(0,s.jsx)(i.code,{children:"git branch -d <branch name>"})]}),"\n",(0,s.jsxs)(i.li,{children:["To delete a remote branch: ",(0,s.jsx)(i.code,{children:"git push origin -d <branch name>"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"others",children:"Others"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git mv -f <source> <dest>"})," - move or rename files in git, use ",(0,s.jsx)(i.code,{children:"-f"})," if destination exists and you want to overwrite it"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git restore <filename>"})," - discard changes in working directory"]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var s=n(6540);const t={},r=s.createContext(t);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);