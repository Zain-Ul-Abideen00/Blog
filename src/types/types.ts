// Blog types
export interface Blog {
  title: string;
  description: string;
  slug: string;
  image: {
    src: string;
    blurDataURL: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  isPublished: boolean;
  tags: string[];
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  toc: TableOfContentsItem[];
  url: string;
  body: {
    code: string;
  };
}

// Type for JSON-LD
export interface BlogJsonLd {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string[];
  datePublished: string;
  dateModified: string;
  author: Array<{
    "@type": string;
    name: string | string[];
    url: string;
  }>;
}

export interface TableOfContentsItem {
  title: string;
  url: string;
  items: TableOfContentsItem[];
}

export interface BlogParams {
  params: Promise<{ slug: string }>;
}

export interface TagProps {
  link?: string;
  name: string;
  className?: string;
}


// Category types
export interface Category {
  name: string;
  slug: string;
}

export interface CategoryProps {
  link?: string;
  name: string;
  active: boolean;
  className?: string;
}

export interface CategoriesProps {
  categories: string[];
  currentSlug: string;
}

// ViewCounter types
export interface ViewCounterProps {
  slug: string;
  noCount?: boolean;
  showCount?: boolean;
}

// ContactForm types
export interface FormData {
  name: string;
  email: string;
  "phone number": string;
  "project details": string;
}

// Header types
export interface HeaderProps {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

// SiteMetadata types
export interface SiteMetadata {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  language: string;
  theme: "system" | "dark" | "light";
  siteUrl: string;
  siteLogo: string;
  socialBanner: string;
  email: string;
  github: string;
  twitter: string;
  facebook: string;
  youtube: string;
  linkedin: string;
  dribbble: string;
  locale: string;
}

// Base props interface for MDX components
interface MDXBaseProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

// MDX types
export interface MDXComponentProps {
  code: string;
  components?: Record<string, React.ComponentType<MDXBaseProps>>;
}
// Theme types
export type Theme = "light" | "dark";

export interface ThemeToggleOptions {
  theme: Theme;
}

export type UseThemeSwitchReturn = [
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>
];


export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}