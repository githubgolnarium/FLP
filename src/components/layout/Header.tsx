

import React from 'react'
import { MdMail } from 'react-icons/md'
import FlagIran from '../FlagIran'
import FlagUSA from '../FlagUSA'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import FlexiPolymerLogo from './FlexiPolymerLogo'

const Header = ({ locale }: { locale: string }) => {

    const t = useTranslations('Home')

    console.log(locale)

    return (
        <header className="w-full">
            <div className="bg-sky-800 hidden lg:flex items-center justify-between h-10">
                <div className="lg:container xl:max-w-6xl xl:w-full mx-auto flex items-center justify-between">

                    <div className="flex items-center justify-center gap-2 text-sky-50">
                        <div className="flex items-center gap-2">
                            <MdMail />
                            <a href="mailto:flexypolymer@gmail.com" className="text-xs outline-none">flexypolymer@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdMail />
                            <a href="tel:+982112345678" className="text-xs outline-none">+982112345678</a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <button aria-label='langShifter-Fa' className="outline-none">
                            <FlagIran className="size-8" />
                        </button>
                        <button aria-label='langShifter-En' className="outline-none">
                            <FlagUSA className="size-8" />
                        </button>
                    </div>
                </div>
            </div>

            <nav className="w-full h-16 text-sm bg-white shadow-sm border-b flex items-center">
                <div className="container mx-auto">
                    <div className="w-full flex flex-col gap-6 lg:flex-row">

                        <FlexiPolymerLogo mode='light' className='size-10' />
                        <div className="hidden w-full lg:flex" id="navbar-default-with-dropdown">
                            <ul className="flex lg:items-center flex-col lg:flex-row gap-4">
                                <li>
                                    <Link href={`/`} className="flex items-center justify-between text-slate-500 font-medium hover:text-sky-600 transition-all duration-200 ">{t('navigation.homePage')}</Link>
                                </li>
                                <li>
                                    <Link href={`/${locale}/products`} className="flex items-center justify-between text-slate-500 font-medium hover:text-sky-600 transition-all duration-200">{t('navigation.products')}</Link>
                                </li>
                                <li>
                                    <Link href={`/${locale}/about-us`} className="flex items-center justify-between text-slate-500 font-medium hover:text-sky-600 transition-all duration-200">{t('navigation.blogs')}</Link>
                                </li>
                                <li>
                                    <Link href={`/${locale}/about-us`} className="flex items-center justify-between text-slate-500 font-medium hover:text-sky-600 transition-all duration-200">{t('navigation.contactUS')}</Link>
                                </li>
                                <li>
                                    <Link href={`/${locale}/about-us`} className="flex items-center justify-between text-slate-500 font-medium hover:text-sky-600 transition-all duration-200">{t('navigation.aboutUS')}</Link>
                                </li>
                                {/* <li className="relative">
                                    <button data-target="dropdown-default" className="dropdown-toggle flex items-center lg:justify-between text-slate-500 font-medium hover:text-prime-blue-700 transition-all duration-500">{t('navigation.homePage')}</button>
                                    <div id="dropdown-default" className="dropdown-menu rounded-xl border text-[10px] lg:shadow-lg lg:bg-white relative lg:absolute top-full w-max mt-3 open" aria-labelledby="dropdown-default">
                                        <ul className="py-2">
                                            <li>
                                                <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium">{t('menu')}</a>
                                            </li>
                                            <li>
                                                <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium">{t('menu')}</a>
                                            </li>
                                            <li>
                                                <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium">{t('menu')}</a>
                                            </li>
                                            <li>
                                                <a className="block px-6 py-2 hover:bg-gray-100 text-red-500 font-medium">{t('menu')}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header


