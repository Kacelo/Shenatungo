import { Box } from '@chakra-ui/react';
import { navbarStyles } from './style';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
// import { Search } from '../Search/Search';
// import { DesktopNav } from './DesktopNav';
// import { MobileNav } from './MobileNav';

export const ENavbar = () => {
  return (
    <Box className="navbar-wrapper" h="110px">
    <Box {...navbarStyles}>
    <DesktopNav/>
    <MobileNav/>
    </Box>
    </Box>
    // <>
    //   <Box className="navbar-wrapper" h="120px">
    //     <Box pos="fixed" w="100%" bgColor="white" mb="1rem" zIndex={10}>
    //       {/* <DesktopNav /> */}
    //       {/* <MobileNav /> */}
    //       Navigation
    //     </Box>
    //   </Box>
    // </>
  );
};