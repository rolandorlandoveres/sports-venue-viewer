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
      className={`p-1 text-xl font-[700] ${isActive ? 'border-b-primary border-b-4' : ''}`}
    >
      {children}
    </Link>
  );
}
