# How to get Aragon App name

The index.js script shows how to get the app name from the manifest.json file from ipfs.

### To run
```
npm install
npm test
```

#### Result:
```
appId 0x0abcd104777321a82b010357f20887d61247493d89d2e987ff57bcecbde00e1e
contentUri ipfs:QmQMdiiye14vYfrJwSYBPdnhejDobAxwXKrRNEf48sSpDM
{
  name: 'Voting',
  author: 'Aragon Association',
  description: 'Create and participate in votes',
  changelog_url: 'https://github.com/aragon/aragon-apps/releases',
  details_url: '/meta/details.md',
  source_url: 'https://github.com/aragon/aragon-apps/blob/master/apps/voting',
  icons: [ { src: '/meta/icon.svg', sizes: '56x56' } ],
  screenshots: [
    { src: '/meta/screenshot-1.png' },
    { src: '/meta/screenshot-2.png' },
    { src: '/meta/screenshot-3.png' }
  ],
  script: '/script.js',
  start_url: '/index.html'
}
end of script
```
