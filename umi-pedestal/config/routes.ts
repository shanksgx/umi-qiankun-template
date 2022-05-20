export default [
  {
    path: '/',
    name: "demo",
    icon: 'QuestionCircleOutlined',
    component: '@/pages/index'
  },
  {
    path: '/child',
    microApp: 'child',
    // hideInMenu: true,
    menu: {
      name: '子应用',
      icon: 'dashboard',
    },
  }
]