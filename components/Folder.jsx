import React from 'react';

import { Box, Text } from '@chakra-ui/react';
import styles from '../styles/Folder.module.css';
import { FcFolder } from 'react-icons/fc';

const Folder = ({ folder, onClick, active, id }) => {

    return (
        <Box px="4" id={id} onClick={(e) => { return onClick(e)}} py="4" my="0.2" className={`${active ? "" : styles.folder} ${active ? styles.selected : ""}`} >
            <FcFolder className={styles.folderIcon} />&nbsp;
            <Text id={id}style={{display: "inline"}} >
                {folder.name}
            </Text>
        </Box>
    );
}

export default Folder;