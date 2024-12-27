const has = Object.prototype.hasOwnProperty;

export type MenuItem = {
  title: string;
  href: string;
};
export type MenuGroup = {
  title: string;
  href: string;
  items: MenuItem[];
};
export type MenuListItem = MenuItem | MenuGroup;
export type MenuList = MenuListItem[];

export function isMenuGroup(item: MenuListItem): item is MenuGroup {
  return has.call(item, "items");
}

export function defineMenu(menu: MenuList): MenuList {
  return menu;
}
