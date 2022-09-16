export const navbarLista = [
  {
    id: 1,
    label: 'navbar_home',
    path: '/',
  },
  {
    id: 2,
    label: 'navbar_apply',
    path: 'apply',
  },
  {
    id: 3,
    label: 'navbar_gallery',
    ostalo: [
      { id: 1, label: 'PHOTO', path: '/gallery' },
      { id: 2, label: 'VIDEO', path: '/video-gallery' },
    ],
  },
  {
    id: 4,
    label: 'navbar_tourguide',
    path: 'tour-guide',
  },
  {
    id: 5,
    label: 'navbar_book',
    path: 'guest-book',
  },
  {
    id: 6,
    label: 'navbar_contact',
    path: 'contact',
  },
  {
    id: 7,
    label: 'navbar_termine',
    path: 'dates-2023',
  },
  {
    id: 8,
    label: 'ADMIN',
    path: 'admin',
    ostalo: [
      { id: 1, label: 'ADMIN', path: '/admin' },
      { id: 2, label: 'LOGOUT', path: '/', logout: true },
    ],
  },
];
