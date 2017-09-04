# git learn


新建仓库
```
git init
```
添加文件到仓库
```
echo '# init' >> README.md
git add README.md
git commit -m '初始化'
```

添加到远程仓库

```
git remote add origin -u xxxxx
git push origin master
```

文件对比
```
git diff README.md
```
回退

```
git reset --hard HEAD^|commit id
```

撤销修改

```git
/**
 * 1.未添加到暂存区，回退至和版本库一致
 * 2.添加到暂存区，回退至和暂存区一致
 */
git checkout --<file>
```
文件删除

```
git rm <file>
```
分支创建

```
git branch <name>
```
分支切换

```
git checkout name
git checkout -b <name>//创建切换
```

分支删除

```
git branch -d <name>
```
查看分支

```
git branch
```

分支合并到当前分支
```
 git merge <branch>
 git merge --no-ff -m <commit message> <branch>
```

暂存
