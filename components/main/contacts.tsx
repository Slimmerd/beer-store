import React from 'react';
import MainCard from "./mainCard";

const ContactsCard = () => {
    return (
        <MainCard
            url={"/contacts"}
            flex={1}
            bgColor={"yellow.500"}
            minH={190}
            text={"Наши контактные данные и адрес. Наши контактные данные и адрес."}
        >
            Контакты
        </MainCard>
    );
};

export default ContactsCard;
