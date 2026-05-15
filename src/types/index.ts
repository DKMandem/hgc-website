export interface NavItem {
  label: string;
  href: string;
}

export interface QuestionItem {
  text: string;
  bold?: boolean;
}

export interface HelpItem {
  text: string;
}

export interface BlogPost {
  title: string;
  href: string;
  date: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "podcast" | "youtube" | "linkedin" | "envelope";
}
