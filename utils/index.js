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