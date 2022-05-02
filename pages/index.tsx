import type {NextPage} from 'next'
import Head from 'next/head'
import {Box, Flex, Heading} from "@chakra-ui/react";
import ProductsCard from "../components/main/products";
import AboutCard from "../components/main/about";
import ContactsCard from "../components/main/contacts";
import NewsCard from "../components/main/news";

const Home: NextPage = () => {
    return (
        <Box
            bgColor={"black"}>
            <Head>
                <title>Старый Причал</title>
                <meta name="description" content="Магазин напитков и закусок к пенному"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Box as={"main"}>
                <Flex minH={"280px"} h={"40vh"} justifyContent={"center"} align={"center"}>
                    <Heading as={"h1"}>
                        Старый Причал
                    </Heading>
                </Flex>

                <Flex minHeight={{base: "60vh"}} gap={2} p={4} direction={{base: "column", lg: "row"}}>
                    <ProductsCard/>
                    <Flex direction={"column"} flex={1} gap={2}>
                        <Flex gap={2} flex={1}>
                            <AboutCard/>
                            <NewsCard/>
                        </Flex>
                        <ContactsCard/>
                    </Flex>
                </Flex>
            </Box>
            {/*<footer>*/}
            {/*  <a*/}
            {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Powered by{' '}*/}
            {/*    <span>*/}
            {/*      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
            {/*    </span>*/}
            {/*  </a>*/}
            {/*</footer>*/}
        </Box>
    )
}

export default Home
