import React, { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Container } from '@mantine/core';
import { CHeader } from './CHeader/CHeader';
import { CFooter } from './Footer/CFooter';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const links = [
    { label: 'Features', link: '#' },
    {
      label: 'Learn',
      link: '#',
      links: [
        { label: 'Terms of Use', link: '#' },
        { label: 'Privacy Policy', link: '#' },
        { label: 'HIPAA Notice', link: '#' },
      ],
    },
    { label: 'About', link: '#' },
    { label: 'Pricing', link: '#' },
    {
      label: 'Support',
      link: '#',
      links: [
        { label: 'Terms of Use', link: '#' },
        { label: 'Privacy Policy', link: '#' },
        { label: 'HIPAA Notice', link: '#' },
      ],
    },
  ];

  const footerLinks = [
    { label: 'Terms of Use', link: '#' },
    { label: 'Privacy Policy', link: '#' },
    { label: 'HIPAA Notice', link: '#' },
  ];

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <CHeader links={links} />
        <Container>{children}</Container>
        <CFooter links={footerLinks} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
