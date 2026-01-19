import { NavLink } from 'react-router';

export function NavLinkItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `px-4 py-2 text-blue-500 ${isActive ? 'font-bold' : ''}`}
    >
      {children}
    </NavLink>
  );
}
