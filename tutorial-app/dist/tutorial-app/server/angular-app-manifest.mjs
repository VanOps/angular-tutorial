
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://vanops.github.io/angular-tutorial/tutorial-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://vanops.github.io/angular-tutorial/tutorial-app"
  }
],
  assets: {
    'index.csr.html': {size: 4851, hash: '3bf5740265663b715997cd836cea8ac7bf392ee1f2df5e9ea047b136b94aba04', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '20a808ef472e0e7280a141f189d568a7d733a2a558388ff01533b573acdc6056', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33583, hash: '4f3265625f71c84ed127b17866b01846b52868491033916ea4c50dc154589024', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
