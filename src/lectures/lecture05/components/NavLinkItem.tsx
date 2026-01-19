import { NavLink } from 'react-router';

import type NavLinkItemProps from '../types/navLinkItemProps';

export function NavLinkItem({ to, end, children }: NavLinkItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `text-blue-500 ${isActive ? 'font-bold' : ''}`}
    >
      {children}
    </NavLink>
  );
}
