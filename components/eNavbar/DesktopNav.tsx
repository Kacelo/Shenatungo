import { navItems } from '../../app/helpers';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { AppLogo } from '../AppLogo';
import { desktopNavStyles } from './style';
import { Search } from '../Search/Search';
// import { AppLogo } from '../AppLogo';
// import { Cart } from '../Cart/Cart';
// import { Wishlist } from '../Wishlist/Wishlist';
// import { Search } from '../Search/Search';

export function DesktopNav() {
  return (
    <Flex {...desktopNavStyles}>
      <Stack direction="row" gap={6} flex={1} alignItems="center">
        <Box mr="1rem">
          <AppLogo/>
        </Box>

        {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}

        {/* <Search /> */}
        <Search/>
      </Stack>

      <Stack direction="row" spacing={2}>
        {/* <Wishlist /> */}
        {/* <Cart /> */}
      </Stack>
    </Flex>
  );
}
