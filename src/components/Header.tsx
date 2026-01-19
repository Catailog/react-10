import { NavLinkItem } from './NavLinkItem';

export function Header() {
  return (
    <header className="bg-amber-500">
      <nav className="container mx-auto flex gap-2 overflow-x-scroll">
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/lecture01">lecture01</NavLinkItem>
        <NavLinkItem to="/lecture03Ex">lecture03Ex</NavLinkItem>
        <NavLinkItem to="/lecture04">lecture04</NavLinkItem>
        <NavLinkItem to="/lecture05">lecture05</NavLinkItem>
        <NavLinkItem to="/lecture06">lecture06</NavLinkItem>
        <NavLinkItem to="/lecture07">lecture07</NavLinkItem>
        <NavLinkItem to="/lecture09">lecture09</NavLinkItem>
        <NavLinkItem to="/lecture09Ex">lecture09Ex</NavLinkItem>
        <NavLinkItem to="/lecture15">lecture15</NavLinkItem>
        <NavLinkItem to="/lecture15Ex">lecture15Ex</NavLinkItem>
        <NavLinkItem to="/lecture15Ex02">lecture15Ex02</NavLinkItem>
      </nav>
    </header>
  );
}
