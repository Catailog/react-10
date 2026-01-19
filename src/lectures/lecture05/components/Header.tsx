import { NavLinkItem } from './NavLinkItem';

export function Header() {
  return (
    <header>
      <nav className="flex gap-2">
        <NavLinkItem to="/lecture05" end>
          Home
        </NavLinkItem>
        <NavLinkItem to="/lecture05/about">About</NavLinkItem>
        <NavLinkItem to="/lecture05/my-info">My Info</NavLinkItem>
        <NavLinkItem to="/lecture05/etc">Etc</NavLinkItem>
        <NavLinkItem to="/lecture05/concerts">Concerts</NavLinkItem>
      </nav>
    </header>
  );
}
