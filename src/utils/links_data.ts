export interface NavLink {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];
