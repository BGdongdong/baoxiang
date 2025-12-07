# AutoParts 汽车零部件官网

专业的汽车零部件制造企业官网，支持中英文切换、明暗主题切换、响应式布局、首页轮播等功能。

## 项目特点
- 响应式设计，适配移动端和桌面端
- 支持中英文双语切换
- 明暗主题自动切换（跟随系统+手动切换）
- 首页大图轮播展示
- 完整的二级页面导航
- 使用 Tailwind CSS 构建，Chart.js 数据可视化

## 部署说明
### Vercel 部署
1. Fork 本仓库到你的 GitHub 账号
2. 登录 Vercel 控制台
3. 点击 "New Project"，选择你的仓库
4. 点击 "Deploy"，等待部署完成
5. 访问分配的域名即可

### Cloudflare Pages 部署
1. Fork 本仓库到你的 GitHub 账号
2. 登录 Cloudflare 控制台，进入 Pages
3. 点击 "Create a project"，选择你的仓库
4. 配置构建设置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: 留空
5. 点击 "Save and Deploy"，等待部署完成
6. 访问分配的域名即可

## 自定义配置
1. 修改 `config.js` 中的公司信息和图片链接
2. 替换 `config.js` 中的占位图为实际图片
3. 在百度地图 API 处替换为你的 AK 密钥

## 技术栈
- HTML5 + CSS3
- Tailwind CSS
- JavaScript
- Chart.js (数据可视化)
- 百度地图 API