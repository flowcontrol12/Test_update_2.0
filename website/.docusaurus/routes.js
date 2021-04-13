
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','7fd'),
  exact: true,
},
{
  path: '/docs/__docusaurus/debug',
  component: ComponentCreator('/docs/__docusaurus/debug','208'),
  exact: true,
},
{
  path: '/docs/__docusaurus/debug/config',
  component: ComponentCreator('/docs/__docusaurus/debug/config','a96'),
  exact: true,
},
{
  path: '/docs/__docusaurus/debug/content',
  component: ComponentCreator('/docs/__docusaurus/debug/content','551'),
  exact: true,
},
{
  path: '/docs/__docusaurus/debug/globalData',
  component: ComponentCreator('/docs/__docusaurus/debug/globalData','8b6'),
  exact: true,
},
{
  path: '/docs/__docusaurus/debug/metadata',
  component: ComponentCreator('/docs/__docusaurus/debug/metadata','af3'),
  exact: true,
},
{
  path: '/docs/__docusaurus/debug/registry',
  component: ComponentCreator('/docs/__docusaurus/debug/registry','0b9'),
  exact: true,
},
{
  path: '/docs/__docusaurus/debug/routes',
  component: ComponentCreator('/docs/__docusaurus/debug/routes','d11'),
  exact: true,
},
{
  path: '/docs/blog',
  component: ComponentCreator('/docs/blog','3e0'),
  exact: true,
},
{
  path: '/docs/blog/2016/03/11/blog-post',
  component: ComponentCreator('/docs/blog/2016/03/11/blog-post','e5f'),
  exact: true,
},
{
  path: '/docs/blog/2017/04/10/blog-post-two',
  component: ComponentCreator('/docs/blog/2017/04/10/blog-post-two','158'),
  exact: true,
},
{
  path: '/docs/blog/2017/09/25/testing-rss',
  component: ComponentCreator('/docs/blog/2017/09/25/testing-rss','2f2'),
  exact: true,
},
{
  path: '/docs/blog/2017/09/26/adding-rss',
  component: ComponentCreator('/docs/blog/2017/09/26/adding-rss','03c'),
  exact: true,
},
{
  path: '/docs/blog/2017/10/24/new-version-1.0.0',
  component: ComponentCreator('/docs/blog/2017/10/24/new-version-1.0.0','e99'),
  exact: true,
},
{
  path: '/docs/search',
  component: ComponentCreator('/docs/search','651'),
  exact: true,
},
{
  path: '/docs/docs',
  component: ComponentCreator('/docs/docs','04c'),
  
  routes: [
{
  path: '/docs/docs/',
  component: ComponentCreator('/docs/docs/','e5b'),
  exact: true,
},
{
  path: '/docs/docs/CLI',
  component: ComponentCreator('/docs/docs/CLI','6f2'),
  exact: true,
},
{
  path: '/docs/docs/Feedy',
  component: ComponentCreator('/docs/docs/Feedy','475'),
  exact: true,
},
{
  path: '/docs/docs/Inst_g',
  component: ComponentCreator('/docs/docs/Inst_g','b40'),
  exact: true,
},
{
  path: '/docs/docs/Rel',
  component: ComponentCreator('/docs/docs/Rel','74c'),
  exact: true,
},
{
  path: '/docs/docs/Req',
  component: ComponentCreator('/docs/docs/Req','a83'),
  exact: true,
},
{
  path: '/docs/docs/XND',
  component: ComponentCreator('/docs/docs/XND','d45'),
  exact: true,
},
{
  path: '/docs/docs/XNS',
  component: ComponentCreator('/docs/docs/XNS','363'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
