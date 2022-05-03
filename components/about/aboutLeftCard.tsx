import React, { ReactNode } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type aboutLeftT = {
    children: ReactNode
    delay: number
}

const AboutLeftCard: React.FC<aboutLeftT> = ({ children, delay }) => {
    return (
        <Box
            as={motion.div}
            initial={{ x: '50%' }}
            animate={{ x: '0%' }}
            transition={`4s ${delay}s`}
            flex={1}
            p={8}
            bgColor={'yellow.500'}
            rounded={36}
        >
            <Flex>
                <Heading size={'sm'}>{children}</Heading>
                <Box
                    display={{ base: 'none', md: 'block' }}
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={`1.5s ${1 + delay}s`}
                    position={'absolute'}
                    right={'-50px'}
                    top={0}
                    width={'200px'}
                    zIndex={-1}
                    h={'100%'}
                    bgColor={'yellow.500'}
                />
            </Flex>
        </Box>
    )
}

export default AboutLeftCard
