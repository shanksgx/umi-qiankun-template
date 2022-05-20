import { defineConfig } from 'umi';
import routes from "./routes";

export default defineConfig({
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'child', // 唯一 id
          entry: '//localhost:8088', // html entry
          // props: {
          //   isQianKun: true
          // }
        },
      ],
      sandbox: true,
    }
  },  
  routes,
  fastRefresh: {},
  mfsu: {},
  layout: {
    title: "基座",
    // headerTheme: 'dark',
    navTheme: "dark",
    siderWidth: 180,
    waterMarkProps: {
      content: 'geeba-demo',
      gapX: 140,
      gapY: 120,
      fontSize: 14,
    },
    // "navTheme": "realDark",
    "primaryColor": "#52C41A",
    "layout": "top",
    "contentWidth": "Fluid",
    // "fixedHeader": true,
    "fixSiderbar": false,
    "pwa": false,
    "logo": "http://goduer.com/favicon.ico",
    "headerHeight": 48,
    "splitMenus": false,
    "footerRender": false
  },
});
