import React, {ReactNode} from 'react';
import NextLink from "next/link";
import { BackgroundProps, Box, chakra, Heading, LayoutProps } from '@chakra-ui/react'
import {isValidMotionProp, motion, useAnimation} from "framer-motion";

type MainCard = {
    children: ReactNode
    bgColor: BackgroundProps['bgColor'],
    url: string,
    flex: number,
    text: string,
    minH: LayoutProps["minH"]
}

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const MainCard: React.FC<MainCard> = ({minH, text, url, bgColor, children, flex}) => {

    const controls = useAnimation();

    const startAnimation = () => controls.start({
        x: ["0%", "-50%"],
        transition: {
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
        }
    });

    return (
        <NextLink href={url} passHref>
            <Box
                as={motion.div}
                whileHover={{
                    scale: 0.9,
                    transition: {duration: 0.8},
                }}
                onHoverStart={() => startAnimation()}
                onHoverEnd={() => {
                    controls.stop()
                }}
                minH={minH}
                flex={flex}
                bgColor={bgColor}
                p={5}
                style={{"cursor": "pointer"}}
                overflowX={"hidden"}
                rounded={36}
            >
                <Heading size={"lg"}>{children}</Heading>
                <Box
                    position={"absolute"}
                    top={"50%"}
                    zIndex={-99}
                >
                    <ChakraBox
                        position={"relative"}
                        whiteSpace={"nowrap"}
                        animate={controls}
                    >
                        <Heading size={"2xl"}>{text}</Heading>
                    </ChakraBox>
                </Box>
            </Box>
        </NextLink>
    );
};

export default MainCard;
