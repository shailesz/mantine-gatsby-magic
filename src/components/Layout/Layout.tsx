import React, { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { CNavbar } from './Navbar/CNavbar';
import { CFooter } from './Footer/CFooter';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <CNavbar />
        {children}
        <CFooter />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
