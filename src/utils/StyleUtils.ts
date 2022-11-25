import React from 'react';

export const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
};

export type TcssClasses = { [key: string]: string };

export type TcssStyles = { [key: string]: React.CSSProperties };
