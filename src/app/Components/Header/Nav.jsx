import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link href="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileToggle(false)}>
                Home V1
              </Link>
            </li>
            <li>
              <Link href="/home3" onClick={() => setMobileToggle(false)}>
                Home V3
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>   
      <li className="menu-item-has-children">
        <Link href="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about3" onClick={() => setMobileToggle(false)}>
                About 3
              </Link>
            </li>
            <li>
              <Link href="/service3" onClick={() => setMobileToggle(false)}>
                Services 3
              </Link>
            </li>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
