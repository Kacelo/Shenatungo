import { BoxProps, FlexProps } from "@chakra-ui/react";

export const navbarStyles: BoxProps = {
    pos:'fixed',
    w: '100',
    bgColor: 'white',
    mb: '1rem',
    zIndex: 10,
}

export const desktopNavStyles: FlexProps = {
    justify: "space-between",
      align: "center",
      px:"2rem",
      py:"1rem",
      borderBottom: "1px",
      borderColor:"gray.200",
      display: { base: 'none', lg: 'flex' },
}