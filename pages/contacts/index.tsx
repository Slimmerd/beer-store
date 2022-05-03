import React from 'react'
import { Box, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoArrowBack, IoStorefront } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import ContactsDateCard from '../../components/contacts/datesCard'
import { motion } from 'framer-motion'

const ContactsPage = () => {
    return (
        <Box bgColor={'black'} as={'main'}>
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
                <Heading flex={2} as={'h1'} textAlign={'center'}>
                    Старый Причал
                </Heading>
                <Box flex={1} />
            </Flex>

            <Flex p={4} gap={2} direction={'column'}>
                <Flex
                    p={5}
                    bgColor={'yellow.500'}
                    rounded={36}
                    minH={380}
                    direction={'column'}
                >
                    <Heading size={'lg'} as={'h1'}>
                        Контакты
                    </Heading>
                    <Spacer />
                    <Flex my={5} gap={2} alignItems={'center'}>
                        <Heading
                            fontSize={{ base: 'lg', md: '3xl' }}
                            as={'h2'}
                            flex={1}
                        >
                            Оформить заказ в интернет-витрине можно в любое
                            время, выбрав сразу удобный способ получения или
                            согласовав его с менеджером позднее. Звоните и
                            приходите к нам.
                        </Heading>
                        <Box flex={1} textAlign={'center'}>
                            <IconContext.Provider
                                value={{
                                    style: { display: 'inline' }
                                }}
                            >
                                <IoStorefront color={'#ffffffeb'} size={150} />
                            </IconContext.Provider>
                        </Box>
                    </Flex>
                    <Spacer />
                </Flex>

                <Box
                    as={motion.div}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={'1s ease'}
                    whileHover={{
                        scale: 0.9
                    }}
                    p={5}
                    bgColor={'teal.500'}
                    rounded={36}
                >
                    <Heading as={'h1'} size={'lg'}>
                        Находимся здесь
                    </Heading>
                    <Box my={5}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3e3ab37fe04b899ee6c85a90a8fc91ab3fa09ac71fbefd33009de4582379b82c&amp;source=constructor"
                            width="100%"
                            height="600"
                            frameBorder="0"
                        />
                    </Box>
                </Box>

                <Flex gap={2} direction={{ base: 'column', md: 'row' }}>
                    <Box
                        as={motion.div}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={'1s ease'}
                        whileHover={{
                            scale: 0.9
                        }}
                        flex={1}
                        p={5}
                        bgColor={'purple.600'}
                        rounded={36}
                    >
                        <Heading size={'lg'}>Расписание</Heading>
                        <ContactsDateCard />
                    </Box>

                    <Box
                        as={motion.div}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={'1s ease'}
                        whileHover={{
                            scale: 0.9
                        }}
                        flex={1}
                        p={5}
                        bgColor={'blue.600'}
                        rounded={36}
                    >
                        <Heading size={'lg'}>Наши данные</Heading>
                        <Flex direction={'column'} gap={2} my={5}>
                            <Box>
                                <Heading size={'sm'}>
                                    Адрес: ул. Пламя Революции 161, Морозовск,
                                    Россия
                                </Heading>
                                <Heading size={'sm'}>
                                    Телефон: +7 988 572 79 44
                                </Heading>
                            </Box>
                            <Box>
                                <Heading size={'sm'}>
                                    ООО «Старый Причал»
                                </Heading>
                                <Heading size={'sm'}>
                                    ОГРН: 1027739484981
                                </Heading>
                                <Heading size={'sm'}>ИНН: 7711078582</Heading>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ContactsPage
