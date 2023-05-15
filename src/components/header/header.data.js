export const menuData = [
  {
    title: "Home",
    isMenu: false,
    link: "/home",
  },
  {
    title: "Call for Papers",
    isMenu: true,
    menuItems: [
      {
        title: "Main Track",
        link: "/main-track",
      },
      {
        title: "Call for Special Sessions",
        link: "/call-for-special-session",
      },
      {
        title: "Special Sessions",
        link: "/special-sessions",
      },
    ],
  },
  {
    title: "Important Dates",
    link: "/important-dates",
  },
  {
    title: "Committee",
    isMenu: true,
    menuItems: [
      {
        title: "Committee",
        link: "/committee",
      },
      {
        title: "Call for reviewers",
        link: "/call-for-reviewers",
      },
    ],
  },
  {
    title: "Schedule",
    link: "schedule",
    isMenu: false,
  },
  {
    title: "Speakers",
    link: "/speakers",
    isMenu: false,
  },
  {
    title: "Contact Us",
    link: "/contact",
    isMenu: false,
  },
];
