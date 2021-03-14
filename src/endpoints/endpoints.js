//Endpoints for the get-actions, fetching info from wp headless api
export const endpoints = [
  {
    type: 'post type',
    url:
      'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/main',
  },
  {
    type: 'post type',
    url:
      'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/studios',
  },
  {
    type: 'post type',
    url:
      'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/contact',
  },
  {
    type: 'navigation menu',
    url:
      'http://localhost/developement/springstudio.se/wp-json/wp/v2/menus/primary-menu',
  },
  {
    type: 'contact & booking form',
    url:
      'http://localhost/developement/springstudio.se/wp-json/contact-form-7/v1/contact-forms/96/feedback',
  },
  {
    type: 'logo inverted',
    url:
      'http://localhost/developement/springstudio.se/wp-content/uploads/2021/02/logo-inverted-1.png',
  },
]
