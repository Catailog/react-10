import { NavLinkItem } from './NavLinkItem';

export function Header() {
  return (
    <header>
      <nav className="flex gap-2">
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/about">About</NavLinkItem>
        <NavLinkItem to="/my-info">My Info</NavLinkItem>
        <NavLinkItem to="/etc">Etc</NavLinkItem>
      </nav>
    </header>
  );
}
