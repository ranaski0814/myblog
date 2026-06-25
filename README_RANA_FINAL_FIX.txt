Rana 博客修复版使用说明
========================

我这版主要修了部署和配置容易出错的地方：

1. 删除了 public/、resources/、.git/、.gitmodules 和旧 PaperMod，压缩包里只保留 Hugo 源码和 vendored 的官方 Reimu 主题文件。
2. themes/reimu 已经作为普通文件夹包含在项目里，不再需要 git submodule，也不需要 Go / hugo mod get。
3. 修复 .github/workflows/hugo.yaml 的 YAML 缩进，并移除了会要求 Go 的 hugo mod get。
4. 修复 CSS 里的 `width: 15 em` 语法错误，保留你要的循环打字副标题。
5. 删除重复文章，只保留 Reimu 推荐结构：content/post/my-first-post/index.md。
6. 图片路径改成 `images/...`，让 GitHub Pages 的 /myblog/ 子路径下也能正常引用图片。
7. 添加 static/favicon.ico。
8. 修掉 Hugo v0.158+ 的 languageCode / languageName 废弃警告，改用 locale / label。

本地预览：

    cd D:\myblog
    hugo server -D --baseURL http://localhost:1313/myblog/

部署到 GitHub：

    git add .
    git commit -m "fix blog deploy"
    git push

GitHub 网页端还要确认：

    Settings -> Pages -> Build and deployment -> Source = GitHub Actions

不要选择 Deploy from a branch -> main / root，否则 GitHub 会把 Hugo 源码当网页发布，可能继续看到 XML 页面。

如果你把这个压缩包覆盖到原来的 D:\myblog，请保留你原来的 .git 文件夹；也可以先解压到一个新文件夹确认内容，再复制除 .git 以外的文件到原仓库。
