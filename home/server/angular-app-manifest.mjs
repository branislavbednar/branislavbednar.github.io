
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6174, hash: '7fbb12f772d47cf201e01cc878f51f696aa3dec9e153e01d9385407039a3e7dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6520, hash: '839a46b2929f4188598735c7ddf8ce4e9a04bc868dffe7376399bf5d69f38537', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15574, hash: '1b7cbcfae3d4f8b387bccf77b0ba555e9310c1d64ee3f297c370fcfcb16a1525', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5EENFCEK.css': {size: 1078, hash: 'npjb1NGqbkY', text: () => import('./assets-chunks/styles-5EENFCEK_css.mjs').then(m => m.default)}
  },
};
