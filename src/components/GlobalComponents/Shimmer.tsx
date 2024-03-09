import { FC } from "react";

type TShimmerTypes = {
    type: string;
};

const Shimmer: FC<TShimmerTypes> = (props) => {
    const { type } = props;
    return (
        <>
            {type === "tokenList" && (
                <>
                    {[...Array(3).keys()].map((_item, key) => {
                        return (
                            <div
                                key={key}
                                className="animate-pulse flex justify-between pt-4 mb-2 pb-2"
                            >
                                <div className="flex items-start gap-2 pb-2">
                                    <div className="h-10 w-10 rounded-full bg-neutral-700" />
                                    <div>
                                        <div className="w-24 h-5 rounded mb-2 bg-neutral-700"></div>
                                        <div className="w-10 h-4 rounded bg-neutral-700"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-24 h-5 rounded mb-2 bg-neutral-700"></div>
                                    <div className="w-10 h-4 float-right rounded bg-neutral-700"></div>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
            {type === "username" && (
                <>
                    <div
                        className="animate-pulse"
                    >
                        <div className="w-24 h-5 rounded bg-neutral-700"></div>
                    </div>


                </>
            )}
            {type === "totalAssets" && (
                <>
                    <div
                        className="animate-pulse"
                    >
                        <div className="w-24 h-8 rounded bg-neutral-700"></div>
                    </div>


                </>
            )}
        </>
    );
};

export default Shimmer;
