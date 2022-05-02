import React from 'react';
import MainCard from "./mainCard";

const NewsCard = () => {
    return (
        <MainCard
            url={"/news"}
            flex={1}
            bgColor={"whiteAlpha.500"}
            text={"Последние новости из нашего магазина. Последние новости из нашего магазина."}
            // minH={190}
        >
            Новости
        </MainCard>

    );
};

export default NewsCard;
