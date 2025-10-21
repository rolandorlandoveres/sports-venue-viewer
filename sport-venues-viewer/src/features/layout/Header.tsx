import Image from 'next/image';

import { NavLink } from './NavLink';

export function Header() {
  return (
    <div className='mt-primary mb-primary ml-primary flex flex-wrap content-center items-center justify-items-center gap-16'>
      <Image
        src='/logo.jpg'
        width={200}
        height={160}
        alt='Logo image of the company'
      />

      <nav className='flex justify-items-center gap-9 align-middle'>
        <NavLink href='/sport-venues'>Sports Venues</NavLink>

        <NavLink href='/about-us'>About Us</NavLink>

        <NavLink href='/sign-up'>Sign up</NavLink>
      </nav>
    </div>
  );
}
