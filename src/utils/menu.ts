const has = Object.prototype.hasOwnProperty;

export type MenuItem = {
  title: string;
  href: string;
};
export type MenuGroup = {
  title: string;
  items: MenuItem[];
};

export const menu = [
  {
    title: "チーム",
    items: [
      {
        title: "男子トップチーム",
        href: "/",
      },
      {
        title: "女子トップチーム",
        href: "/",
      },
      {
        title: "U-18 男子",
        href: "/",
      },
      {
        title: "U-18 女子",
        href: "/",
      },
      {
        title: "U-15 男子",
        href: "/",
      },
      {
        title: "U-15 女子",
        href: "/",
      },
    ],
  },
  {
    title: "クラブ",
    items: [
      {
        title: "会社概要",
        href: "/",
      },
      {
        title: "クラブの歩み",
        href: "/",
      },
      {
        title: "経営情報",
        href: "/",
      },
    ],
  },
] satisfies (MenuItem | MenuGroup)[];

export function isMenuGroup(item: MenuItem | MenuGroup): item is MenuGroup {
  return has.call(item, "items");
}

