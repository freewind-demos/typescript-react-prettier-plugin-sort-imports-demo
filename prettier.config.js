module.exports = {
  importOrderParserPlugins: ['typescript', 'jsx', 'classProperties', 'decorators-legacy'],
  importOrder: [
    '^react.*$',
    '<THIRD_PARTY_MODULES>',
    '^[./][^.]*$', // exclude assets, e.g. ".pcss"
    '[.](p)css$', // includes assets, e.g. ".pcss"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
