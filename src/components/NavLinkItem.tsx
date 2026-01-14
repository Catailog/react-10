import { NavLink } from 'react-router';

export function NavLinkItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `text-blue-500 px-4 py-2 ${isActive ? 'font-bold' : ''}`}
    >
      {children}
    </NavLink>
  );
}
