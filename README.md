# Personal Web

罗仕展的个人主页项目。

当前状态：生产实现已完成，通过 GitHub Actions 验收后发布到 GitHub Pages。

- 产品规格：[`docs/specs/0001-personal-homepage.md`](docs/specs/0001-personal-homepage.md)
- 视觉原型：`prototype/homepage-directions` 分支
- 线上地址：<https://azhan12138.github.io/personal_web/>

## Local development

```bash
pnpm install
pnpm dev
```

运行完整发布验收：

```bash
pnpm typecheck
pnpm test:e2e
pnpm verify:privacy
```
