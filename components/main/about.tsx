import React from 'react';
import MainCard from "./mainCard";

const AboutCard = () => {
    return (
            <MainCard
                url={"/about"}
                flex={1}
                bgColor={"gray.500"}
                // minH={190}
                text={"Информация о нашем пивном магазине. Информация о нашем пивном магазине."}
            >
            О нас
            </MainCard>
    );
};

export default AboutCard;
