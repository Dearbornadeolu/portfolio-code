
import Link from 'next/link';

const Nav = () => {

  return (
    <nav className=' p-3 md:px-[90px] flex justify-center sticky top-0  bg-white shadow-lg items-center z-50'>
      
      <ul className={` flex justify-center gap-2 items-center align-middle md:gap-10 `}>
        <li>
          <Link href="#about">
            About 
          </Link>
        </li>
        <li>
          <Link href="#recents">
            Showcase
          </Link>
        </li>
        <li>
          <Link href="Pricing">
            Pricing
          </Link>
        </li>
        <li>

          <button className='' >
            Contact 
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
