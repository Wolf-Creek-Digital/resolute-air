import React from 'react';
import Link from "next/link";

const FooterCopyright = () => {
    return (
        <div className="bg-orange-600 py-6 text-white text-center">
            <div className="max-w-7xl mx-auto px-4">
                <p className="m-0">
                    Copyright@ {new Date().getFullYear()} <Link href="/" className="font-bold hover:underline">Resolute Air</Link>. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default FooterCopyright;
