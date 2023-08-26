import Link from 'next/link'

export default function LanguageSwitcher() {
    return (
        <Link href="/another" locale="fr">
            To /fr/another
        </Link>
    )
}