

export const menuItems = [
  {
    id: 1,
    label: 'navbar_home',
    url: '/',
  },
  {
    id: 2,
    label: 'navbar_apply',
    url: 'apply',
  },
  {
    id: 3,
    label: 'navbar_gallery',
    url: '/',
    submenu: [
      { id: 1, label: 'PHOTO', url: '/gallery' },
      { id: 2, label: 'VIDEO', url: '/video-gallery' },
    ],
  },
  {
    id: 4,
    label: 'navbar_tourguide',
    url: 'tour-guide',
  },
  {
    id: 5,
    label: 'navbar_book',
    url: 'guest-book',
  },
  {
    id: 6,
    label: 'navbar_contact',
    url: 'contact',
  },
  {
    id: 7,
    label: 'navbar_termine',
    url: 'dates-2023',
  },
  /*{
    id: 8,
    label: 'ADMIN',
    url: 'admin',
    submenu: [
      { id: 1, label: 'ADMIN', url: '/admin' },
      { id: 2, label: 'LOGOUT', url: '/', logout: true },
    ],
  },*/
];
