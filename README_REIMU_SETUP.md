# Rana 的 Hugo Reimu 主题设置说明

这个包已经把原来的 PaperMod 配置改成了官方 `hugo-theme-reimu` 的 Hugo Module 用法。

## 本地预览

第一次预览需要联网，因为 Hugo 会下载官方主题：

```bash
cd myblog
hugo mod get
hugo server --baseURL http://localhost:1313/myblog/ -D
```

浏览器打开：`http://localhost:1313/myblog/`

## 我改了什么

- `hugo.toml`：站点标题改成 `Rana的数学小屋`，主题改为 `github.com/D-Sketon/hugo-theme-reimu`。
- `go.mod`：把站点初始化为 Hugo Module，方便自动下载官方主题。
- `config/_default/params.yml`：设置 Reimu 的中文、左侧目录、蓝白主题色、头像、头图、字体、动画和样式注入。
- `content/post/my-first-post/index.md`：把原来的首篇文章移动到 Reimu 推荐的 `content/post` 结构，并开启 `toc: true` 与 `sidebar: left`。
- `static/images/rana-snow.jpg` 和 `static/avatar/avatar.webp`：使用你发的图片作为头图/封面/头像。
- `static/css/rana-reimu.css`：固定左侧目录，默认半透明，鼠标移动到目录上时变亮；同时重做了正文排版与蓝白风格。
- `static/js/rana-toc.js`：兜底保证文章页优先显示目录而不是普通侧边栏。
- `.github/workflows/hugo.yaml`：加入 Go 环境与 `hugo mod get`，让 GitHub Pages 自动构建时能下载官方主题。

## 如果你更想用 Git Submodule 下载主题

Hugo Module 是我在这个包里采用的方式。如果你想把主题实际下载到 `themes/reimu`，可以在项目根目录运行：

```bash
git submodule add https://github.com/D-Sketon/hugo-theme-reimu.git themes/reimu
```

然后把 `hugo.toml` 中这一行：

```toml
theme = ['github.com/D-Sketon/hugo-theme-reimu']
```

改成：

```toml
theme = 'reimu'
```

之后运行：

```bash
hugo server --baseURL http://localhost:1313/myblog/ -D
```

## 注意

我当前运行环境无法直接联网克隆 GitHub，也没有安装 `hugo` 命令，所以没有办法在这里完成真实渲染截图验证。这个包采用官方文档推荐的 Hugo Module 方式，等你本地或 GitHub Actions 联网构建时会自动拉取官方 Reimu 主题。
