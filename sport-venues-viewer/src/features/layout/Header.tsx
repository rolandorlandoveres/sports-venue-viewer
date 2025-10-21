import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <>
      <Image
        src='/logo.jpg'
        width={200}
        height={150}
        alt='Logo image of the company'
      />

      <nav className='flex'>
        <Link href='/sport-venues'>Sports-venues</Link>

        <Link href='/about-us'>About Us</Link>

        <Link href='/sign-up'>Sign up</Link>
      </nav>
    </>
  );
}
