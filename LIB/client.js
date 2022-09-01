import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import * as dotenv from 'dotenv'
// dotenv.config()

export const client = sanityClient({
  projectId: 'a2zcrptu',
  // projectId: (process.env.REACT_APP_SANITY_PROJECT_ID),
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  // token: (process.env.REACT_APP_SANITY_TOKEN)
  token: 'skE1YVtNuCDB4BB0h4fYpsH2VqJ1YLrop3Ykh4mjFjFXKilgGcdIkPFkH8jwYA6UfBwyBLAQaLDMJd86hAKgRGjTuw8TUrvZMd1f5M04weEAtQ1Rm4oBsgvVsecXLjD1FvR9sRCRzkO08otmS1EntEzZD8QgHSFtjq5hfckdbml82Tqz54HA'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
