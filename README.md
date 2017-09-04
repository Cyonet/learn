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
add err
