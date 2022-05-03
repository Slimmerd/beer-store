import React from 'react'
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { IoArrowBack } from 'react-icons/io5'
import AboutLeftCard from '../../components/about/aboutLeftCard'
import AboutRightCard from '../../components/about/aboutRightCard'

const AboutPage = () => {
    return (
        <Box as={'main'} bgColor={'black'}>
            <Flex
                minH={'280px'}
                h={'40vh'}
                justifyContent={'center'}
                align={'center'}
            >
                <Box flex={1} textAlign={'center'}>
                    <NextLink href={'/'} passHref>
                        <IconButton
                            icon={<IoArrowBack />}
                            aria-label={'back'}
                        />
                    </NextLink>
                </Box>
                <Heading flex={2} as={'h1'}>
                    Старый Причал
                </Heading>
            </Flex>

            <Flex p={4} gap={2} direction={'column'}>
                <Box p={5} bgColor={'gray.500'} rounded={36}>
                    <Heading size={'lg'}>О нас</Heading>

                    <Flex my={5} gap={2} alignItems={'center'}>
                        <Heading flex={1} size={'xl'} as={'h2'}>
                            Мы небольшой пивной магазин в городе Морозовске
                        </Heading>
                        <Box flex={1} textAlign={'center'}>
                            <Image
                                src={'/beer.png'}
                                alt={'Кружка с пивом'}
                                width={100}
                                height={143.08}
                                layout={'fixed'}
                            />
                        </Box>
                    </Flex>
                </Box>

                <Flex>
                    <AboutLeftCard delay={0}>
                        В нашем ассортименте представлено более 10 разливных
                        напитков. Из десятков поставщиков и сортов мы отобрали
                        те напитки, за которые готовы поручиться
                    </AboutLeftCard>
                    <AboutRightCard delay={0}>Разливное</AboutRightCard>
                </Flex>

                <Flex>
                    <AboutLeftCard delay={0.1}>
                        Кроме того, мы продаем различные закуски. Рыба, чипсы,
                        сухарики и многое другое
                    </AboutLeftCard>
                    <AboutRightCard delay={0.1}>Закуски</AboutRightCard>
                </Flex>

                <Flex>
                    <AboutLeftCard delay={0.2}>
                        Еще у нас есть холодильник с различными прохладными
                        напитками. Кола, Пепси, Нести, Фьюзти и так далее
                    </AboutLeftCard>
                    <AboutRightCard delay={0.2}>
                        Прохладительные напитки
                    </AboutRightCard>
                </Flex>

                <Flex>
                    <AboutLeftCard delay={0.3}>
                        Старый Причал предлагает удобную возможность
                        бронирования заказа на вынос. Напоминаем, что в
                        соответствии с требованиями Федерального закона от 22
                        ноября 1995 г. № 171-ФЗ дистанционная продажа
                        алкогольной продукции запрещена. Интернет-витрина Старый
                        Причал не осуществляет дистанционную продажу алкоголя.
                        Вся информация на сайте носит информационный характер и
                        знакомит клиентов с ассортиментом магазина. Задать все
                        вопросы относительно приобретения товара в магазине или
                        заказа в интернет-витрине можно, позвонив по телефону +7
                        988 572 79 44
                    </AboutLeftCard>
                    <AboutRightCard delay={0.3}>Наши услуги</AboutRightCard>
                </Flex>
            </Flex>
        </Box>
    )
}

export default AboutPage
