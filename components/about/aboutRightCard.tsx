import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Box, Heading } from '@chakra-ui/react'

type aboutRightT = {
    children: ReactNode
    delay: number
}

const AboutRightCard: React.FC<aboutRightT> = ({ children, delay }) => {
    return (
        <Box
            display={{ base: 'none', md: 'block' }}
            as={motion.div}
            initial={{ x: '-50%' }}
            animate={{ x: '0%' }}
            transition={`2s ${delay}s`}
            flex={1}
            p={8}
            bgColor={'teal.500'}
            rounded={36}
        >
            <Heading>{children}</Heading>
        </Box>
    )
}

export default AboutRightCard
