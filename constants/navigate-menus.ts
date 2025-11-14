export interface INavigateItem {
  id: string;
  label: string;
  path?: string;
  children?: INavigateItem[];
}

export const NAVIGATE_MENUS: INavigateItem[] = [
  {
    id: "1",
    label: "About",

  },
  {
    id: "2",
    label: "Features",

  },
  {
    id: "3",
    label: "Support",

  },
  {
    id: "4",
    label: "Community",
    children: [
      { id: "1.1", label: "Sản phẩm", path: "/san-pham" },
      { id: "1.1", label: "Khuyến mãi", path: "/khuyen-mai" },
    ],
  },
 
];