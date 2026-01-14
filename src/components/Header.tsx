import { NavLinkItem } from './NavLinkItem';

export function Header() {
  return (
    <header className="bg-amber-500">
      <nav className="container flex gap-2 mx-auto">
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/lecture01">lecture01</NavLinkItem>
        <NavLinkItem to="/lecture03Ex">lecture03Ex</NavLinkItem>
        <NavLinkItem to="/lecture06">lecture06</NavLinkItem>
        <NavLinkItem to="/lecture07">lecture07</NavLinkItem>
      </nav>
    </header>
  );
}
