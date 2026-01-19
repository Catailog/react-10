import { NavLinkItem } from './NavLinkItem';

export function Header02() {
  return (
    <header>
      <nav className="flex gap-2">
        <NavLinkItem to="/lecture05/concerts" end>
          ConcertsHome
        </NavLinkItem>
        <NavLinkItem to="/lecture05/concerts/trending">Trending</NavLinkItem>
        <NavLinkItem to="/lecture05/concerts/city">City</NavLinkItem>
      </nav>
    </header>
  );
}
