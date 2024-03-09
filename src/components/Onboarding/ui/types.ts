import { ReactNode } from "react";

export type IButton = {
    isGoogle?: boolean;
    title: string;
    icon?: ReactNode,
    onClick?: () => void;
    isLoading?: boolean;
}

export type IInput = {
    input?: string;
    setInput: (val: string) => void;
}

export type IUsernameSelection = {
    setStep: (val: number) => void;
}

export type TAuthPage = {
    setStep: (val: number) => void;
}