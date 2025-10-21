'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathName = usePathname();

  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className={`after:bg-primary hover:after:bg-primary-hover relative pb-3 after:absolute after:bottom-0 after:left-1/2 after:h-[8px] after:-translate-x-1/2 after:transition-all after:duration-300 after:content-[''] hover:after:w-2/5 hover:after:after:-translate-x-1/2 hover:after:transition-all hover:after:duration-300 ${isActive ? 'after:w-2/5' : ''}`}
    >
      {children}
    </Link>
  );
}
