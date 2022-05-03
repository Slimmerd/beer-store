import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

const ContactsDateCard = () => {
    const currentDay = new Date().getDay()

    return (
        <Flex my={5} justifyContent={'space-between'}>
            <Box>
                <Heading size={currentDay == 1 ? 'lg' : 'sm'}>
                    Понедельник
                </Heading>
                <Heading size={currentDay == 2 ? 'md' : 'sm'}>Вторник</Heading>
                <Heading size={currentDay == 3 ? 'lg' : 'sm'}>Среда</Heading>
                <Heading size={currentDay == 4 ? 'lg' : 'sm'}>Четверг</Heading>
                <Heading size={currentDay == 5 ? 'lg' : 'sm'}>Пятница</Heading>
                <Heading size={currentDay == 6 ? 'lg' : 'sm'}>Суббота</Heading>
                <Heading size={currentDay == 0 ? 'lg' : 'sm'}>
                    Воскресенье
                </Heading>
            </Box>
            <Box>
                <Heading size={currentDay == 1 ? 'lg' : 'sm'}>
                    09:00 – 22:00
                </Heading>
                <Heading size={currentDay == 2 ? 'md' : 'sm'}>
                    09:00 – 22:00
                </Heading>
                <Heading size={currentDay == 3 ? 'lg' : 'sm'}>
                    09:00 – 22:00
                </Heading>
                <Heading size={currentDay == 4 ? 'lg' : 'sm'}>
                    09:00 – 22:00
                </Heading>
                <Heading size={currentDay == 5 ? 'lg' : 'sm'}>
                    09:00 – 22:00
                </Heading>
                <Heading size={currentDay == 6 ? 'lg' : 'sm'}>
                    09:00 – 22:00
                </Heading>
                <Heading size={currentDay == 0 ? 'lg' : 'sm'}>
                    09:00 – 22:00
                </Heading>
            </Box>
        </Flex>
    )
}

export default ContactsDateCard
