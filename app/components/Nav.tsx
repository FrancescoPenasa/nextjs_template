import Link from 'next/link'

export default function Nav() {
    return <nav>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">setings</Link>
    </nav>
}
