import React from 'react';
import MainCard from "./mainCard";

const ProductsCard = () => {
    return (
        <MainCard
            url={"/products"}
            flex={1}
            bgColor={"purple.500"}
            minH={380}
            text={"Закуски к пенному, прохладительные напитки и многое другое. Закуски к пенному, прохладительные напитки и многое другое."}
        >
            Просмотреть ассортимент
        </MainCard>
    );
};

export default ProductsCard;
