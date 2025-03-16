---
title: Astro-Paper主题魔改
description: 本站修改Paper主题记录 最小程度修改
pubDatetime: 2025-03-16T18:56:00.000Z
tags:
  - Astro
---
抛弃花里胡哨专注内容，使用astro-paper的修改

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

貌似是BUG，除了英文其他字体根本没生效！修复代码只需要加入font-sans

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
      <div class="flex w-full max-w-[33%] justify-start">
        {
          prevPost && (
            <a
              href={`/posts/${prevPost.slug}`}
              class="flex gap-1 hover:opacity-75"
            >
              <IconChevronLeft class="inline-block flex-none" />
              <div class="text-sm text-accent/85">{prevPost.title}</div>
            </a>
          )
        }
      </div>

      <!-- Back to Top（始终居中） -->
      <div class="flex w-full max-w-[33%] justify-center">
        <button
          id="back-to-top"
          class="focus-outline py-1 whitespace-nowrap hover:opacity-75"
          onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
        >
          <IconChevronLeft class="inline-block rotate-90" />
          <!-- <span>Back to Top</span> -->
        </button>
      </div>

      <!-- 下一篇文章 -->
      <div class="flex w-full max-w-[33%] justify-end">
        {
          nextPost && (
            <a
              href={`/posts/${nextPost.slug}`}
              class="flex gap-1 hover:opacity-75"
            >
              <div class="text-sm text-accent/85">{nextPost.title}</div>
              <IconChevronRight class="inline-block flex-none" />
            </a>
          )
        }
      </div>
    </div>
```

## 配色

本站配色，更多可以自己找chatgpt生成一套

`src\styles\global.css`

```css
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
```

## 更多待续
