import { defineConfig } from 'umi';
import routes from "./routes";

export default defineConfig({
  routes,
  fastRefresh: {},
  mfsu: {},
  layout: {
    title: "子应用",
    navTheme: "light",
    // navTheme: "dark",
    primaryColor: "#1890ff",
    logo: 'http://goduer.com/favicon.ico',
    headerHeight: 48,
    contentWidth: 'Fluid',
    splitMenus: false,
		footerRender: false,
    menuHeaderRender: false,
    fixedHeader: true,
    fixSiderbar: false,
    siderWidth: 180,
    waterMarkProps: {
      content: 'geeba-demo',
      gapX: 140,
      gapY: 120,
      fontSize: 14,
    },
    pwa: false,
    "contentStyle": {
      height: "calc(100vh - 48px)"
    }
  },
  devServer: {
    port: 8088
  },
  qiankun: {
    slave: {},
  },
});