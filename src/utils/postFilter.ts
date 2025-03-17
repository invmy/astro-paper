import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";

// const postFilter = ({ data }: CollectionEntry<"blog">) => {
//   const isPublishTimePassed =
//     Date.now() >
//     new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
//   return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
// };

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  return !data.draft; // 仅过滤 draft: true 的文章，不再考虑发布时间
};
export default postFilter;
