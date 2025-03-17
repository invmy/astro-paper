---
title: Astro-Paper主题魔改
description: 本站修改Paper主题记录 最小程度修改
pubDatetime: 2025-03-16T18:56:00.000Z
tags:
  - Astro
---
抛弃花里胡哨特效、专注文章内容

这是我使用astro-paper的修改

## TOC

## 目录

未修改代码，

需要添加目录的文章添加 `## TOC` 会自动生成并折叠

```ts
astro.config.ts

remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
修改到
remarkPlugins: [remarkToc, [remarkCollapse, { test: "TOC" }]],
```

## 字体

貌似是BUG，除了英文其他字体根本没生效！中文全部都是宋体。修复代码只需要加入font-sans

```css
src\styles\global.css

  body {
    @apply flex min-h-svh flex-col bg-background font-mono text-foreground selection:bg-accent/75 selection:text-background;
  }

修改后

  body {
    @apply flex min-h-svh flex-col bg-background font-mono font-sans text-foreground selection:bg-accent/75 selection:text-background;
  }
```

## OGimage

修复中文生成错误

```ts
src\utils\loadGoogleFont.ts

  const fontsConfig = [
    {
      name: "Noto Sans SC",
      font: "Noto+Sans+SC",
      weight: 100,
      style: "thin",
    },
    {
      name: "Noto Sans SC",
      font: "Noto+Sans+SC",
      weight: 700,
      style: "bold",
    },
  ];
```

## 底栏 导航

需要注释掉 ShareLinks

src\layouts\PostDetails.astro

```html
<!-- Previous / Back to Top / Next Buttons -->
<div
  data-pagefind-ignore
  class="flex items-center justify-between gap-4"
>
  <!-- 上一篇文章 -->
  <div class="flex w-full max-w-[33%] justify-start items-center">
    {
      prevPost && (
        <a
          href={`/posts/${prevPost.slug}`}
          class="flex items-center gap-1 hover:opacity-75"
        >
          <IconChevronLeft class="inline-block flex-none self-center" />
          <div class="text-lg text-accent/85">{prevPost.title}</div>
        </a>
      )
    }
  </div>

  <!-- Back to Top（始终居中） -->
  <div class="flex w-full max-w-[33%] justify-center items-center">
    <button
      id="back-to-top"
      class="focus-outline py-1 whitespace-nowrap hover:opacity-75 flex items-center"
      onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
    >
      <IconChevronLeft class="inline-block rotate-90 self-center" />
      <!-- <span>Back to Top</span> -->
    </button>
  </div>

  <!-- 下一篇文章 -->
  <div class="flex w-full max-w-[33%] justify-end items-center">
    {
      nextPost && (
        <a
          href={`/posts/${nextPost.slug}`}
          class="flex items-center gap-1 hover:opacity-75"
        >
          <div class="text-lg text-accent/85">{nextPost.title}</div>
          <IconChevronRight class="inline-block flex-none self-center" />
        </a>
      )
    }
  </div>
</div>

```

## 配色

Chatgpt可以生成配色

`src\styles\global.css`

```css
1. Apple 风格（极简科技感） 🍏
适合极简、高端、优雅的 UI 设计。


html[data-theme="light"] {
  --background: #f5f5f7;
  --foreground: #1d1d1f;
  --accent: #0071e3;
  --muted: #e8e8ed;
  --border: #d2d2d7;
}

html[data-theme="dark"] {
  --background: #121212;
  --foreground: #f5f5f7;
  --accent: #2997ff;
  --muted: #1e1e1e;
  --border: #3a3a3c;
}

2. Google 风格（多彩现代感） 🎨
适合现代、开放、用户友好的 UI 设计。


html[data-theme="light"] {
  --background: #ffffff;
  --foreground: #202124;
  --accent: #4285f4;
  --muted: #f8f9fa;
  --border: #dadce0;
}

html[data-theme="dark"] {
  --background: #202124;
  --foreground: #e8eaed;
  --accent: #8ab4f8;
  --muted: #303134;
  --border: #5f6368;
}

3. Microsoft 风格（沉稳商务风） 🏢
适合正式、商务、生产力工具类的 UI 设计。


html[data-theme="light"] {
  --background: #f3f3f3;
  --foreground: #262626;
  --accent: #0067b8;
  --muted: #e1e1e1;
  --border: #c8c8c8;
}

html[data-theme="dark"] {
  --background: #1b1b1b;
  --foreground: #f3f3f3;
  --accent: #0078d4;
  --muted: #292929;
  --border: #3f3f3f;
}

4. Tesla 风格（未来工业感） 🚗
适合高科技、极简、未来主义 UI 设计。


html[data-theme="light"] {
  --background: #fdfdfd;
  --foreground: #171a20;
  --accent: #cc0000;
  --muted: #ebebeb;
  --border: #d6d6d6;
}

html[data-theme="dark"] {
  --background: #171a20;
  --foreground: #fdfdfd;
  --accent: #e82127;
  --muted: #22252b;
  --border: #3a3d42;
}

5. Meta 风格（社交蓝色调） 🔵
适合社交、科技、社区类的 UI 设计。


html[data-theme="light"] {
  --background: #ffffff;
  --foreground: #1c1e21;
  --accent: #1877f2;
  --muted: #e4e6eb;
  --border: #ccd0d5;
}

html[data-theme="dark"] {
  --background: #18191a;
  --foreground: #e4e6eb;
  --accent: #2e89ff;
  --muted: #242526;
  --border: #3a3b3c;
}
```

## 更多待续
