# 图片文件需求说明

本项目需要以下图片文件放置在 `public/` 目录中：

## 必需的图片文件

### 1. **background.png**
- 用途：网站主背景图
- 位置：`public/background.png`
- 引用位置：`src/index.css` (body background)
- 建议尺寸：1920x1080px 或更大
- 格式：PNG（支持透明）或 JPG
- 描述：网站的主背景图片，显示在页面顶部

### 2. **button.png**
- 用途：按钮组件背景
- 位置：`public/button.png`
- 引用位置：`src/components/PulsingButton.tsx`
- 建议尺寸：适应按钮大小
- 格式：PNG（支持透明）
- 描述：脉冲按钮的背景纹理

### 3. **stock.png**
- 用途：股票卡片背景
- 位置：`public/stock.png`
- 引用位置：`src/components/SplitStockCard.tsx`
- 建议尺寸：卡片尺寸
- 格式：PNG
- 描述：股票信息卡片的背景图

### 4. **top.png.png**
- 用途：股票卡片顶部图标
- 位置：`public/top.png.png`
- 引用位置：`src/components/SplitStockCard.tsx`
- 建议尺寸：小图标 (64x64px 或类似)
- 格式：PNG（支持透明）
- 描述：显示在股票卡片顶部的装饰图标

### 5. **slider.png**
- 用途：滚动历史数据组件背景
- 位置：`public/slider.png`
- 引用位置：`src/components/ScrollingHistoryData.tsx`
- 建议尺寸：适应滑块区域
- 格式：PNG
- 描述：历史数据滚动区域的背景

### 6. **back.png** (可选)
- 用途：现代背景组件
- 位置：`public/back.png`
- 引用位置：`src/components/ModernBackground.tsx`
- 格式：PNG
- 描述：备用背景图（如果使用 ModernBackground 组件）

## 如何添加图片

1. 将真实的图片文件放置到 `public/` 目录
2. 确保文件名完全匹配上面列出的名称
3. 图片将自动被 Vite 复制到构建输出的 `dist/` 目录

## 临时解决方案

如果暂时没有图片，可以：
- 使用纯色背景替代
- 使用渐变色替代
- 使用占位图服务（如 placeholder.com）

## Google Ads 安全提示

⚠️ **重要**: 确保所有图片文件是真实的图片格式（PNG、JPG等），而不是文本文件。
Google Ads 会检测假冒的图片文件（文本伪装成图片），这会导致网站被标记为恶意。

检查方法：
```bash
file public/*.png
```

应该显示：
```
public/background.png: PNG image data, ...
```

而不是：
```
public/background.png: ASCII text, ...
```
