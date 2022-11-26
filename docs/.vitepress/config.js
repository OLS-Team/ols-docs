export default {
  base: '/ols-docs/',
  title: 'OLS Documentation',
  description: 'Everything you need to know about Open Learning Server',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/OLS-Team/ols-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Developers', link: '/gs4/gs4-developers' },
          { text: 'Site Owners', link: '/gs4/gs4-owners' },
          { text: 'Trainers', link: '/gs4/gs4-trainers' }
        ]
      },
      { text: 'History', link: 'getting-started' }
    ],
    sidebar: [
      {
        text: 'GS (Getting Started)',
        collapsible: true,
        items: [
          { text: 'Developers', link: '/gs4/gs4-developers' },
          { text: 'Site Owners', link: '/gs4/gs4-owners' },
          { text: 'Trainers', link: '/gs4/gs4-trainers' }
        ]
      }
    ]
  }
}