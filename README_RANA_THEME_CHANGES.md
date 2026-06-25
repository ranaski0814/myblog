# Rana 的博客美化改动说明

已完成：

1. 将站点标题从“我的技术博客”改为“Rana的数学小屋”。
2. 加入上传的二次元雪景图片：
   - `static/images/rana-snow.jpg`
   - 作为首页视觉背景、文章封面和淡化页面装饰使用。
3. 将博客主题入口切换为 `theme = 'reimu'`，并放入本地可构建主题目录 `themes/reimu`。
4. 增加蓝白色调样式覆盖文件：`assets/css/extended/rana-blue-reimu.css`。
5. 全局字体改为：英文优先 Times New Roman，中文优先华文楷体/STKaiti/KaiTi。
6. 给文章开启目录：`ShowToc = true`、`TocOpen = true`、`UseHugoToc = true`。
7. 将目录改成右侧悬浮目录，默认淡化并缩到侧边，鼠标悬停或聚焦时展开；移动端自动恢复为普通目录。
8. 保留 MathJax 与 Goldmark passthrough 配置，避免数学公式被 Hugo 预处理破坏。

需要注意：当前环境无法访问 GitHub，也没有 Hugo 命令，因此没有办法在这里下载官方 `D-Sketon/hugo-theme-reimu` 或执行 `hugo --gc --minify` 重新生成整站。为了让项目不因缺少主题而构建失败，我用现有主题文件创建了本地 `themes/reimu` 主题并做了 Reimu/二次元蓝白风格改造。

如果之后你想替换为官方主题，可以在本地有网络的环境中执行：

```bash
rm -rf themes/reimu
git submodule add https://github.com/D-Sketon/hugo-theme-reimu.git themes/reimu
hugo server -D --disableFastRender
```

如果使用官方主题，可能还需要按照官方主题文档调整 `config/_default/params.yml`。现在这个压缩包里的版本不依赖外网下载主题即可尝试构建。
