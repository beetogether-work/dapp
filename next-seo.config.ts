const title = 'BeeTogether';
const description =
  'BeeTogether is an infrastructure to support use cases like private bounty and private payroll payments';
const url = 'https://www.beetogether.work';

export default {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'BeeTogether',
    title,
    description,
    images: [
      {
        url: `https://www.beetogether.work/images/cover.jpeg`,
        width: 2000,
        height: 1142,
        alt: 'BeeTogether profile',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@BeeTogether',
    site: '@BeeTogether',
    cardType: 'summary_large_image',
  },
};
