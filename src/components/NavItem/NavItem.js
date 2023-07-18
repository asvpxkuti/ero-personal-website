import { Link } from '@chakra-ui/react';

const NavItem = ({ children, href, ...props }) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavItem;
