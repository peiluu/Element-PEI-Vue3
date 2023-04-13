
# 确保脚本抛出遇到的错误
set -e
# 构建
npm run docs:build

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f https://github.com/peiluu/Element-PEI-Vue3.git master:gh-pages
