使用方法：

1. 解压这个 zip。
2. 把里面的 config.toml、hugo.toml、content 文件夹、layouts 文件夹复制到 D:\myblog，选择覆盖同名文件。
3. 在 D:\myblog 运行：

   hugo server -D --disableFastRender

4. 打开本地页面后按 Ctrl + F5 强制刷新。
5. 确认公式渲染后再提交：

   git add .
   git commit -m "fix math rendering"
   git push

这次修复的关键点：
- 修复了被 PowerShell 批量替换破坏的 Markdown 数学语法。
- 使用 UTF-8 保存中文 Markdown，避免乱码。
- 在 hugo.toml/config.toml 里开启 Goldmark passthrough，防止 Hugo 把 \( ... \) 和 \[ ... \] 里的 LaTeX 先吃掉。
- 在 PaperMod 的 extend_head.html 中强制加载 MathJax。
