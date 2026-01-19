'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Loader from '@/app/components/Loader';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}

            <AnimatePresence mode="wait">
                {!isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
