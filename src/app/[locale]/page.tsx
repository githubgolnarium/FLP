import { useTranslations } from "next-intl";
import FlexiPolymerLogo from "@/components/layout/FlexiPolymerLogo";
import Slider from "@/components/Slider";
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import CustomerSlider from "@/components/CustomerSlider";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { SiGmail, SiTelegram, SiWhatsapp } from "react-icons/si";


export default function Home() {

    const t = useTranslations('Home');

    return (
        <>
            <Slider />

            <HomeSection>
                <FlexiPolymerLogo mode="light" className="size-16 md:size-[5vw]" />
                <h1 className="font-medium text-[4vw] text-sky-900">{t('miniabout.brand')}</h1>
                <p className="px-4 font-medium text-slate-600 text-center leading-relaxed">{t('miniabout.describe1')}</p>
                <p className="px-4 font-medium text-slate-600 text-center leading-relaxed">{t('miniabout.describe2')}</p>
            </HomeSection>

            <HomeSection>
                <h2 className="font-medium text-[2vw] text-sky-900">{t('navigation.products')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    <ProductCategoryCard>
                        <></>
                    </ProductCategoryCard>
                    <ProductCategoryCard>
                        <></>
                    </ProductCategoryCard>
                    <ProductCategoryCard>
                        <></>
                    </ProductCategoryCard>
                    <ProductCategoryCard>
                        <></>
                    </ProductCategoryCard>
                </div>
            </HomeSection>

            <MiniContact>
                <h2 className="font-medium text-[2vw] text-sky-50">{t('miniContact.title', { brand: t('miniabout.brand') })}</h2>
                <div className="font-medium text-cetner text-sky-50">
                    {t('miniContact.prideText')}
                </div>
                <div>
                    <button className="px-6 py-3 rounded shadow-sm border border-sky-50 text-sky-50 hover:bg-sky-600 active:bg-sky-700 transition-all duration-200 outline-none ">
                        {t('miniContact.contatctButton')}
                    </button>
                </div>
            </MiniContact>

            <section className="even:bg-sky-50 border-t first:border-t-0 py-20">
                <div className="container mx-auto flex flex-col items-center justify-center gap-4">
                    <h4 className="font-medium text-xl md:text-[2vw] text-sky-900">{t('customers.title')}</h4>
                    <div className="font-medium text-cetner text-slate-600">
                        {t('customers.prideText')}
                    </div>
                </div>
                <div className="container md:max-w-4xl mx-auto mt-4">
                    <CustomerSlider />
                </div>
            </section>

            <footer className="w-full py-20 bg-slate-800 text-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <FlexiPolymerLogo mode="dark" className="size-16" />
                            <div className="text-2xl font-medium">{t('miniabout.brand')}</div>
                        </div>
                        <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-10 mb-10 border-b border-slate-200">
                            <li>
                                <a className="text-200-800 hover:text-indigo-500">Pagedone</a>
                            </li>
                            <li>
                                <a className=" text-200-800 hover:text-indigo-500">Products</a>
                            </li>
                            <li>
                                <a className=" text-200-800 hover:text-indigo-500">Resources</a>
                            </li>
                            <li>
                                <a className=" text-200-800 hover:text-indigo-500">Blogs</a>
                            </li>
                            <li>
                                <a className=" text-200-800 hover:text-indigo-500">Support</a>
                            </li>
                        </ul>
                        <div className="flex space-x-10 text-2xl justify-center items-center mb-10">
                            <a className="block  text-slate-900 transition-all duration-500 hover:text-indigo-600 ">
                                <SiGmail />
                            </a>
                            <a className="block  text-slate-900 transition-all duration-500 hover:text-indigo-600 ">
                                <SiTelegram />
                            </a>
                            <a className="block  text-slate-900 transition-all duration-500 hover:text-indigo-600 ">
                                <SiWhatsapp />
                            </a>
                        </div>
                        <span className="text-lg text-slate-500 text-center block"><a href="/">FlexiPolymer</a> 2024, All rights reserved.</span>
                    </div>
                </div>
            </footer>

        </>
    );
}

const HomeSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="even:bg-sky-50 border-t first:border-t-0">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-20">
                {children}
            </div>
        </section>
    )
}

const ProductCategoryCard = ({ children }: { children: React.ReactNode }) => {

    const t = useTranslations('Home');

    return (
        <div className="group w-full">
            <div className="group-hover:scale-105 transition-all duration-200 w-full rounded border shadow-sm flex flex-col gap-2 bg-white p-4">
                <div className="w-full rounded border h-48 bg-emerald-400">

                </div>

                <h4 className="font-semibold">Title</h4>
                <div className="text-xs text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, rerum!</div>
                <div>
                    <button className="px-4 py-2 rounded bg-sky-600 hover:bg-sky-500 active:bg-sky-700 outline-none transition-all duration-200 text-sky-50 text-xs font-medium">
                        {t('products.productCardButtonText')}
                    </button>
                </div>
            </div>
        </div>
    )
}

const MiniContact = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="bg-sky-900 border-t first:border-t-0">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-20">
                {children}
            </div>
        </section>
    )
}