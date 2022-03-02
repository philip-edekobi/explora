import axios from "axios";

const mediaTypes =  new Map([
    ["audio", [ ".mp3", ".wav", ".ogg", ".aac" ]],
    ["video", [ ".mp4", ".3gp", ".mkv" ]],
    ["image", [ ".jpg", ".jpeg", ".gif", ".png" ]]
]);

export function getFileType(filename){
    var pattern = /\.[0-9a-z]+$/i;
    var match = filename.match(pattern);
    for (const [key, values] of mediaTypes) {
        if(match && values.includes(match[0])){ 
            return key;
        }
    }
    return "document";
}

export const folders = [
    {name: "Folder 1", id: 1},
    {name: "Folder 2", id: 2},
    {name: "Folder 3", id: 3},
    {name: "Folder 4", id: 4}
];

export const getFolders = async () => {
    const response = ""/*await axios.get("/api/folders/");
    const folders = await response.data;
    return folders;*/
}

export const addFolder = async (name, id, parentId = null) => {
    const response = ""/*await axios.post("/api/folders", {
        id,
        name,
        parent_id: parentId
    });
    return response.data;*/
}

export const renameFolder = async (folderId, newName) => {
    const response = ""/*await axios.put(`/api/folders/${folderId}`, {
        name: newName
    });
    if (response.status < 300 && response.status >=200) {
        const data = response.data;
        return data;
    }
    else window.alert("Sorry a problem occurred. Please try again");
    */
}

export const getFiles = async () => {
    const response = ""/*await axios.get("/api/files/");
    if (response.status < 300 && response.status >=200) {
        const files = response.data;
        return files;
    }
    else window.alert("Sorry a problem occurred. Please try again");*/
}

export const addFile = async (parentId, file) => {
    const response = ""/*await axios.post("/api/files/", {
        fn: file,
        folder_id: parentId 
    });
    if (response.status < 300 && response.status >=200) {
        const data = response.data;
        return data;
    }
    else window.alert("Sorry a problem occurred. Please try again");*/
}

export const deleteFile = async (fileId) => {
    const response = ""/*await axios.delete(`/api/files/${fileId}`);
    if (response.status < 300 && response.status >=200) {
        const data = response.data;
        return data;
    }
    else window.alert("Sorry a problem occurred. Please try again");*/
} 

export const renameFile = async (fileId, newName) => {
    const response = ""/*await axios.put(`/api/files/${fileId}`, {
        name: newName
    });
    if (response.status < 300 && response.status >=200) {
        const data = response.data;
        return data;
    }
    else window.alert("Sorry a problem occurred. Please try again");*/
}