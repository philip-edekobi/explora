import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { 
    Box, Flex, Text, Input, FormControl, FormLabel, Button
} from '@chakra-ui/react';

import { useMediaQuery } from '@mui/material';

import styles from '../styles/layout.module.css';
import { folders, addFolder, getFolders } from '../utils';

import Folder from './Folder';
import AddFolder from './AddFolder';

const Layout = ({ children, activeFolderId, setActiveFolderId, currentFolder, setCurrentFolder }) => {
    const [newFolderName, setNewFolderName] = useState("");
    const isLarge = useMediaQuery("(min-width: 800px)");

    function onFolderClick(e){
        setActiveFolderId(parseInt(e.target.id));
        setCurrentFolder(folders.find(folder => folder.id === parseInt(e.target.id)));
        e.preventDefault();
    }
    async function addNewFolder(name){
        const response = await addFolder(name, nanoid());
        setNewFolderName('');
        const folders = await getFolders();
        //setFolders(folders);
    }

    function handleChange(){}

    return (
        <Flex w="100%" h="100%" bgColor="gray.100" >
            {
                !!isLarge
                    && 
                <Flex h="100vh" w="25%" flexDirection="column" 
                    className={styles.sideBar} bgColor="gray.200"
                    style={{borderTopRightRadius: "0.6em", borderBottomRightRadius: "0.6em"}}
                 >
                    <Box p="2" color="gray.100" bgColor="purple.600" className={styles.sideHeaderContainer}
                     >
                        <Link passHref href="/dashboard">
                            <Text fontWeight="500" style={{cursor: "pointer"}} fontSize="2xl" >
                                Files
                            </Text>
                        </Link>
                    </Box>
                    <Flex mb="6" py="1" />
                    <Flex flexDirection="column" bgColor="gray.100" >
                        {folders.map(folder => {
                            if (folder.parent_id) return; 
                            return <Folder id={folder.id} key={nanoid()} 
                                        folder={folder} onClick={onFolderClick} 
                                        active={folder.id === activeFolderId} 
                                        style={{width: "100%"}}
                                    />
                        })}
                    </Flex>
                    <Flex justify="center" align="center" py="4" px="4" >
                        <FormControl>
                            <FormLabel htmlFor="add folder">Add New Folder</FormLabel>
                            <Input type="text" w="80%" borderColor="blue" value={newFolderName}
                                onChange={(e) => setNewFolderName(e.target.value)}
                            />
                            <Button colorScheme="purple" my="4"
                                onClick={addNewFolder(newFolderName)}
                            >
                                Add
                            </Button>
                        </FormControl>
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