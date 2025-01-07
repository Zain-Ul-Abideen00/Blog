import { compareDesc, parseISO } from "date-fns";
import { Blog } from "../../.velite/generated";

export const cx = (...classNames: (string | boolean | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs:Blog[]) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
