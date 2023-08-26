import Link from 'next/link'
import Image from 'next/image'

import Button from './Button';

export default function Header() {
    const navigation = [
        { name: "About", href: "#" },
        { name: "Services", href: "#" },
        { name: "Our Work", href: "#" },
    ];

    return <header>
        <div className="container mx-auto">
            <div className="flex py-5 justify-between items-center">
                <div className="flex flex-row gap-8 items-center">
                    <Link href="/">
                        <Image src="/favicon.ico" className="Logo"
                            width={40}
                            height={40}
                            alt="Bed & Breakfast Sotto le Stelle" />
                    </Link>
                </div>
                <div className="flex flex-row gap-6">
                    <div className="md:flex hidden flex-row gap-4 items-center">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <Button label="CONTACT US" link="#" />
                </div>
            </div>
        </div>
    </header>



}

{/* <nav className='Nav'>
<Link href="/">Home</Link>
<Link href="/rooms">Rooms</Link>
<Link href="/contact">Contact</Link>
<LanguageSwitcher />
</nav> */}