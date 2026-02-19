import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav({ setMobileToggle, isSticky }) {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/service', label: 'Services' },
        { href: '/emergency', label: 'Emergency' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center m-0 p-0 list-none font-medium text-[#010f34]">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <li key={item.href} className="group relative">
                        <Link 
                            href={item.href} 
                            onClick={() => setMobileToggle(false)}
                            className={`transition-colors uppercase tracking-wider text-sm lg:text-base py-2 block font-bold 
                                ${isActive ? 'text-orange-600' : 'text-[#010f34] hover:text-orange-600'}
                                ${isSticky 
                                    ? (isActive 
                                        ? 'lg:text-[#010f34]' 
                                        : 'lg:text-white lg:hover:text-[#010f34]'
                                      ) 
                                    : ''
                                }
                            `}
                        >
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
