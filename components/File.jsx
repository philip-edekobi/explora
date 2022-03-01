import React from 'react';
import Link from 'next/link';

import { 
    Box, Flex, Text, Spacer, Menu, MenuItem, MenuButton, MenuList, IconButton 
} from '@chakra-ui/react';

import { CgSoftwareDownload } from "react-icons/cg";
import { FiScissors } from "react-icons/fi";
import { MdEditNote, MdDelete } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FcMusic, FcDocument, FcVideoFile, FcImageFile } from 'react-icons/fc';

import { getFileType } from "../utils";
import styles from '../styles/File.module.css';

const File = ({ file, cut }) => {
    const icon = iconise(file.name);

    return (
        <Flex flexDirection="column" justify="center" align="center" >
            <Spacer />    
            <Flex flexDirection="column"  m="4" w="8rem" h="9rem" className={styles.file} >
                <Flex bgColor="gray.100">
                    <Box></Box>
                    <Spacer />
                    <Menu size="sm" color="gray.200">
                        <MenuButton as={IconButton} aria-label="Menu" icon={<BsThreeDotsVertical />} />
                        <MenuList w="8px">
                                <MenuItem 
                                    icon={<FiScissors />}
                                    onClick={() => cut(file)}
                                >
                                    Cut File
                                </MenuItem>
                                <MenuItem icon={<CgSoftwareDownload />}>Download</MenuItem>
                                <MenuItem icon={<MdEditNote />}>Rename</MenuItem>
                                <MenuItem icon={<MdDelete />}>Delete</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex mt="5" justify="center" align="center" fontSize="5xl" >
                    {icon}
                </Flex>
                <Spacer />
                <Flex justify="center" align="center" bgColor="gray.200" >
                    <Text fontWeight="200" fontSize="sm">{file.name}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

function iconise(filename){
    const type = getFileType(filename);

    if (type === "image") return <FcImageFile />;
    if (type === "audio") return <FcMusic />;
    if (type === "video") return <FcVideoFile />;
    return <FcDocument />
}

export default File;