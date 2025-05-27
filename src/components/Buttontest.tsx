import React from 'react'

type ButtontestProps = {
    children: React.ReactNode;
    href?: string;
};

const Buttontest = ({ children, href }: ButtontestProps) => {
    return (
        <a
            href={href}
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-sky-500/30"
        >
            {children}
        </a>
    )
}

export default Buttontest