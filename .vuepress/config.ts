import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Netaxe",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "netaxe",
    authorAvatar: "/head.png",
    autoSetSeries:true,
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
      "/docs/manual/": [
        {
          text: "快速入门",
          children: ["readme","start"],
          
        },
        {
          text: "平台支持",
          children: ["page_show"],
          
        },
        {
          text: "平台迭代",
          children: ["our_plan"],
          
        },
        {
          text: "产品手册",
          children: ["cmdb","rbac","ipam"],
          
        },
        
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: "用户手册", link: "/docs/manual/" },
      { text: "提问", link: "https://gitee.com/iflytek/NetAxe/issues" },
      { text: "演示环境", link: "http://47.99.86.164:9980/" },
      {
        text: "源码下载",
        children: [
          { text: "gitee", link: "https://gitee.com/iflytek/NetAxe" },
          { text: "github", link: "https://github.com/iflytek/NetAxe" },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 Netaxe 即将发布微服务版本，在发布 微服务版本之后不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 微信 群和 GitHub、Gitee 踊跃反馈使用体验，我们会在第一时间响应。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "先添加微信...再加入交流群...",
        },
        {
          type: "text",
          content: `
          <ul>
            <img src='/wechat.png'>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "Git仓库",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://gitee.com/iflytek/NetAxe">Gitee<a/></li>
            <li><a href="https://github.com/iflytek/NetAxe">Github<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              // link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
