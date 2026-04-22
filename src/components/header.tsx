import Link from "next/link"


const Header = () => {
    return (
        <header className="border-b border-gray-200">
            <nav className="max-w-5xl mx-auto flex items-center justify-between py-4">
                <Link href="/" className="text-xl font-semibold">Devfolio</Link>
                <ul className="flex items-center gap-10">
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header