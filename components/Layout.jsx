import React, { useState } from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { 
    Box, Flex, Text, useMediaQuery 
} from '@chakra-ui/react';

import styles from '../styles/layout.module.css';
import { folders } from '../utils';

import Folder from './Folder';

const Layout = ({ children, activeFolderId, setActiveFolderId }) => {
    const [isLarge] = useMediaQuery('(min-width: 768px)');

    function onFolderClick(e){
        setActiveFolderId(parseInt(e.target.id));
        e.preventDefault();
    }
    function addFolder(){
        return null;
    }

    return (
        <Flex w="100%" h="100%" bgColor="gray.100" >
            {
                isLarge
                    && 
                <Flex h="100vh" w="25%" flexDirection="column" className={styles.sideBar} bgColor="gray.200"
                    style={{borderTopRightRadius: "0.6em", borderBottomRightRadius: "0.6em"}}
                 >
                    <Box p="2" color="gray.100" bgColor="purple.600" className={styles.sideHeaderContainer}
                     >
                        <Link passHref href="/dashboard">
                            <Text fontWeight="500" style={{cursor: "pointer"}} fontSize="2xl" >Directory</Text>
                        </Link>
                    </Box>
                    <Flex mb="6" py="1" />
                    <Flex flexDirection="column" bgColor="gray.100" >
                        {folders.map(folder => {
                            return <Folder id={folder.id} key={nanoid()} 
                                        folder={folder} onClick={onFolderClick} 
                                        active={folder.id === activeFolderId} 
                                    />
                        })}
                    </Flex>
                    <Flex justify="center" align="center" py="4" >
                            <Text fontSize="xl" className={styles.link} onClick={addFolder} >
                                Add Folder&nbsp;
                                <AiOutlinePlusCircle style={{display: "inline-flex"}} />
                            </Text>
                    </Flex>
                </Flex>
            }
            <Flex flexDirection="column" >
                {children}
            </Flex>
        </Flex>
    );
}

export default Layout;