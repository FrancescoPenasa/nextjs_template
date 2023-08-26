import Image from 'next/image'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                {/* <Image src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <a
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            {t('aboutus')}
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            {t('licese')}
                            License
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            {t('contribute')}
                            Contribute
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            {t('contactus')}
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            {t('language')}
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <a color="blue-gray" className="text-center font-normal">
                &copy; 2023 Bed & Breakfast Sotto Le Stelle
            </a>
        </footer>
    );
}