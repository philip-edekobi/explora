import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Flex, Text, Button, Spacer, Select, useMediaQuery } from "@chakra-ui/react";
import { MdArrowDropDown, MdOutlineContentPaste } from 'react-icons/md';

import { Layout, File, Footer } from "../components";
import { folders } from '../utils';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => (
    <header style={{position: "sticky", top: 0, cursor: "pointer"}}>
        <Text ml="4" fontSize="3xl" fontWeight="600" >
            <Link passHref href="/">Explora</Link> 
        </Text>
    </header>
);

export default function Dashboard(){
    const [activeFolderId, setActiveFolderId] = useState(1);
    const [pasteCache, setCache] = useState(null);
    const [isSmall] = useMediaQuery('(max-width: 680px)');

    const router = useRouter();

    const cut = (file) => {
        setCache(file);
    }

    const paste = () => {
        if (pasteCache && !files.includes(pasteCache)){

        }
    }

    return (
        <div>
            <Layout activeFolderId={activeFolderId} setActiveFolderId={setActiveFolderId}>
                <Flex mx={ isSmall ? "" : "6" } display="flex"
                    mt={ isSmall ? "" : "3" }
                    height={ isSmall ? "3rem" : ""}
                    mb="7" bgColor={ isSmall ? "purple.300" : "" } 
                    color= { isSmall ? "gray.100" : "purple.600" }
                >
                    <Header />
                    {!!isSmall && <>
                        <Spacer />
                        <Select icon={<MdArrowDropDown />} 
                            ml="10" mt="1" bgColor="white"
                            color="gray.400"
                         >
                            {folders?.map(folder => (
                                <option key={folder.name} value={folder.name}>
                                    {folder.name}
                                </option>
                            ))}
                        </Select>
                    </>}
                </Flex>
                <Flex justify="center" align="center" py="3" fontSize="6xl">
                    <Button colorScheme="blue" mx="4" >New File</Button>
                    <Button variant={pasteCache ? "solid" : "outlined"} 
                        isDisabled={!pasteCache} colorScheme="teal" 
                        rightIcon={<MdOutlineContentPaste />} onClick={paste}
                    >
                        Paste File
                    </Button>
                </Flex>
                <Flex flexWrap="wrap" ml="5" justify={isSmall ? 'center' : "start"} align="center" >
                    {files.map(file => (<File key={nanoid()} cut={cut} file={file} />))}
                </Flex>
                <Spacer />
                <Footer />
            </Layout>
        </div>
    );
}

const files = [
    {name: "File 1.mp3", id: 1},
    {name: "File 2.mkv", id: 2},
    {name: "File 3.pdf", id: 3},
    {name: "File 4.jpg", id: 4},
    {name: "File 5.png", id: 5},
    {name: "File 6.3gp", id: 6},
    {name: "File 7", id: 7},
    {name: "File 8", id: 8},
    {name: "File 9", id: 9},
    {name: "File 10", id: 10}
];