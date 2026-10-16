import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IBA Foundation',
    short_name: 'IBA Foundation',
    description:
      'We bring ambitious people together to think critically, experiment boldly, and build solutions to real-world problems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D0C0A',
    theme_color: '#0D0C0A',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
