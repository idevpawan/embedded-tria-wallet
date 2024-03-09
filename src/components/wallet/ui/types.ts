export type TSubTokenDetail = {
    id: number,
    img: string | undefined,
    token_value: number,
    symbol: string,
    usd_price: number,
}

export type TTokenItem = {
    id: number;
    img: string | undefined;
    token_name: string,
    token_value: number,
    symbol: string,
    usd_price: number,
    subDetails: TSubTokenDetail[];
}