export type Menus = {
  name: string;
  description: string;
  submenus?: SubMenus[];
};
export type SubMenus = {
  title: string;
  href: string;
  content: string;
};

export const menus: Menus[] = [
  {
    name: "Personal",
    description:
      "Anim amet velit laboris excepteur nostrud occaecat cupidatat occaecat laboris veniam nostrud reprehenderit consectetur. Culpa do nostrud commodo culpa. Dolore laboris sint aliquip pariatur. Cupidatat cupidatat excepteur consequat sunt id. Cillum minim cillum labore est est. Do ad aute et laboris quis laboris. Nostrud dolore sunt veniam aliquip velit.",
    submenus: [
      {
        title: "About Us",
        href: "/about",
        content:
          "Sint tempor elit consequat tempor tempor minim sit id anim proident anim sit nostrud. Anim incididunt deserunt sunt incididunt ipsum incididunt aute ullamco et enim adipisicing aute. Qui qui adipisicing voluptate velit labore aliquip id cupidatat ad exercitation. Eu in officia labore sunt consequat sint occaecat non occaecat exercitation proident deserunt dolore in. Lorem consequat voluptate nostrud ex irure laboris eu est magna aliquip sit ut.",
      },
      {
        title: "Careers",
        href: "/careers",
        content:
          "Ut magna est minim et sint ut sint sunt ipsum sint non Lorem aliqua. Commodo officia irure commodo dolor elit exercitation sint aliquip. Cupidatat proident tempor excepteur in dolor ex in ea consectetur. Incididunt ad dolore ad in anim sint laborum nisi pariatur proident et. Laborum elit non non dolor officia cillum culpa non sunt aute et.",
      },
      {
        title: "Contact",
        href: "/contact",
        content:
          "Non dolore consequat Lorem esse. Officia ipsum excepteur in Lorem in excepteur ea anim. Nisi id reprehenderit anim magna voluptate nisi. Aliqua veniam ad irure ullamco cupidatat laboris consectetur aliquip. Lorem elit consequat excepteur pariatur nostrud veniam enim aliquip. Ea aute anim non excepteur officia enim consequat laborum irure cillum pariatur duis commodo commodo. Commodo tempor commodo officia ipsum quis dolore aliqua sit qui.",
      },
    ],
  },
  {
    name: "Small Business",
    description:
      "Velit ea duis id exercitation excepteur. Irure dolore et ullamco minim irure tempor proident et enim ea nisi. Magna duis anim est adipisicing voluptate esse amet aute sint est fugiat. Ipsum culpa ut non deserunt esse.",
    submenus: [
      {
        title: "Business Debit Card",
        href: "/about",
        content:
          "Sint tempor elit consequat tempor tempor minim sit id anim proident anim sit nostrud. Anim incididunt deserunt sunt incididunt ipsum incididunt aute ullamco et enim adipisicing aute. Qui qui adipisicing voluptate velit labore aliquip id cupidatat ad exercitation. Eu in officia labore sunt consequat sint occaecat non occaecat exercitation proident deserunt dolore in. Lorem consequat voluptate nostrud ex irure laboris eu est magna aliquip sit ut.",
      },
      {
        title: "Business Loan",
        href: "/careers",
        content:
          "Ut magna est minim et sint ut sint sunt ipsum sint non Lorem aliqua. Commodo officia irure commodo dolor elit exercitation sint aliquip. Cupidatat proident tempor excepteur in dolor ex in ea consectetur. Incididunt ad dolore ad in anim sint laborum nisi pariatur proident et. Laborum elit non non dolor officia cillum culpa non sunt aute et.",
      },
      {
        title: "Mass Payment",
        href: "/contact",
        content:
          "Non dolore consequat Lorem esse. Officia ipsum excepteur in Lorem in excepteur ea anim. Nisi id reprehenderit anim magna voluptate nisi. Aliqua veniam ad irure ullamco cupidatat laboris consectetur aliquip. Lorem elit consequat excepteur pariatur nostrud veniam enim aliquip. Ea aute anim non excepteur officia enim consequat laborum irure cillum pariatur duis commodo commodo. Commodo tempor commodo officia ipsum quis dolore aliqua sit qui.",
      },
    ],
  },

  {
    name: "Enterprise",
    description:
      "Velit ea duis id exercitation excepteur. Irure dolore et ullamco minim irure tempor proident et enim ea nisi. Magna duis anim est adipisicing voluptate esse amet aute sint est fugiat. Ipsum culpa ut non deserunt esse.",
    submenus: [
      {
        title: "About Us",
        href: "/about",
        content:
          "Sint tempor elit consequat tempor tempor minim sit id anim proident anim sit nostrud. Anim incididunt deserunt sunt incididunt ipsum incididunt aute ullamco et enim adipisicing aute. Qui qui adipisicing voluptate velit labore aliquip id cupidatat ad exercitation. Eu in officia labore sunt consequat sint occaecat non occaecat exercitation proident deserunt dolore in. Lorem consequat voluptate nostrud ex irure laboris eu est magna aliquip sit ut.",
      },
      {
        title: "Careers",
        href: "/careers",
        content:
          "Ut magna est minim et sint ut sint sunt ipsum sint non Lorem aliqua. Commodo officia irure commodo dolor elit exercitation sint aliquip. Cupidatat proident tempor excepteur in dolor ex in ea consectetur. Incididunt ad dolore ad in anim sint laborum nisi pariatur proident et. Laborum elit non non dolor officia cillum culpa non sunt aute et.",
      },
      {
        title: "Contact",
        href: "/contact",
        content:
          "Non dolore consequat Lorem esse. Officia ipsum excepteur in Lorem in excepteur ea anim. Nisi id reprehenderit anim magna voluptate nisi. Aliqua veniam ad irure ullamco cupidatat laboris consectetur aliquip. Lorem elit consequat excepteur pariatur nostrud veniam enim aliquip. Ea aute anim non excepteur officia enim consequat laborum irure cillum pariatur duis commodo commodo. Commodo tempor commodo officia ipsum quis dolore aliqua sit qui.",
      },
    ],
  },
  {
    name: "Agents",
    description:
      "Velit ea duis id exercitation excepteur. Irure dolore et ullamco minim irure tempor proident et enim ea nisi. Magna duis anim est adipisicing voluptate esse amet aute sint est fugiat. Ipsum culpa ut non deserunt esse.",
    submenus: [
      {
        title: "About Us",
        href: "/about",
        content:
          "Sint tempor elit consequat tempor tempor minim sit id anim proident anim sit nostrud. Anim incididunt deserunt sunt incididunt ipsum incididunt aute ullamco et enim adipisicing aute. Qui qui adipisicing voluptate velit labore aliquip id cupidatat ad exercitation. Eu in officia labore sunt consequat sint occaecat non occaecat exercitation proident deserunt dolore in. Lorem consequat voluptate nostrud ex irure laboris eu est magna aliquip sit ut.",
      },
      {
        title: "Careers",
        href: "/careers",
        content:
          "Ut magna est minim et sint ut sint sunt ipsum sint non Lorem aliqua. Commodo officia irure commodo dolor elit exercitation sint aliquip. Cupidatat proident tempor excepteur in dolor ex in ea consectetur. Incididunt ad dolore ad in anim sint laborum nisi pariatur proident et. Laborum elit non non dolor officia cillum culpa non sunt aute et.",
      },
      {
        title: "Contact",
        href: "/contact",
        content:
          "Non dolore consequat Lorem esse. Officia ipsum excepteur in Lorem in excepteur ea anim. Nisi id reprehenderit anim magna voluptate nisi. Aliqua veniam ad irure ullamco cupidatat laboris consectetur aliquip. Lorem elit consequat excepteur pariatur nostrud veniam enim aliquip. Ea aute anim non excepteur officia enim consequat laborum irure cillum pariatur duis commodo commodo. Commodo tempor commodo officia ipsum quis dolore aliqua sit qui.",
      },
    ],
  },
  {
    name: "Developer",
    description:
      "Velit ea duis id exercitation excepteur. Irure dolore et ullamco minim irure tempor proident et enim ea nisi. Magna duis anim est adipisicing voluptate esse amet aute sint est fugiat. Ipsum culpa ut non deserunt esse.",
  },
];
