//Endpoints for the get-actions, fetching info from wp headless api

/* PRODUCTION */

export const endpoints = [
  {
    type: 'post type - main pages',
    url: 'https://dev.springstudio.se/index.php/wp-json/wp/v2/main',
  },
  {
    type: 'post type - studios',
    url: 'https://dev.springstudio.se/index.php/wp-json/wp/v2/studios',
  },
  {
    type: 'post type - contact',
    url: 'https://dev.springstudio.se/index.php/wp-json/wp/v2/contact',
  },
  {
    type: 'navigation menu',
    url: 'https://dev.springstudio.se/wp-json/wp/v2/menus/primary-menu',
  },
  {
    type: 'contact & booking form',
    url: 'https://dev.springstudio.se/wp-json/contact-form-7/v1/contact-forms/96/feedback',
  },
  {
    type: 'logo inverted',
    url: 'https://dev.springstudio.se/wp-content/uploads/2021/02/logo-inverted-1.png',
  },
  {
    type: 'post type',
    url: 'https://dev.springstudio.se/wp-json/wp/v2/studio_single/',
  },
  {
    type: 'single post - studio 1',
    url: 'https://dev.springstudio.se/wp-json/wp/v2/studio_single/156',
  },
  {
    type: 'single post - studio 2',
    url: 'https://dev.springstudio.se/wp-json/wp/v2/studio_single/331',
  },
  {
    type: 'single post - studio 3',
    url: 'https://dev.springstudio.se/wp-json/wp/v2/studio_single/332',
  },
  {
    type: 'single post - Kitchen & Lounge areas',
    url: 'https://dev.springstudio.se/wp-json/wp/v2/studio_single/507',
  },
]

/* DEVELOPMENT */

/* export const endpoints = [
  {
    type: 'post type - main pages',
    url: 'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/main',
  },
  {
    type: 'post type - studios',
    url: 'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/studios',
  },
  {
    type: 'post type - contact',
    url: 'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/contact',
  },
  {
    type: 'navigation menu',
    url: 'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/menus/primary-menu',
  },
  {
    type: 'contact & booking form',
    url: 'http://localhost/developement/springstudio.se/index.php/wp-json/contact-form-7/v1/contact-forms/96/feedback',
  },
  {
    type: 'logo inverted',
    url: 'http://localhost/developement/springstudio.se/wp-content/uploads/2021/02/logo-inverted-1.png',
  },
  {
    type: 'post type',
    url: 'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/studio_single/',
  },
  {
    type: 'single post - studio 1',
    url: 'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/studio_single/156',
  },
  {
    type: 'single post - studio 2',
    url: 'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/studio_single/331',
  },
  {
    type: 'single post - studio 3',
    url: 'http://localhost/developement/springstudio.se/index.php/wp-json/wp/v2/studio_single/332',
  },
] */
