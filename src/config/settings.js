/** 
 *  Created By Muhammad Adriansyah
 *  CopyRight 2024 MIT License
 *  My Github : https://github.com/xyzencode
 *  My Instagram : https://instagram.com/xyzencode
 *  My Youtube : https://youtube.com/@xyzencode
*/

import { fileURLToPath } from "url";
import { watchFile, unwatchFile } from "fs";

export default {
    write_store: false,
    pairing_code: true,
    self: false,
    groupOnly: true,
    packName: "",
    packPublish: "© OLXYZ 2024 GEN 2"
}

let fileP = fileURLToPath(import.meta.url);
watchFile(fileP, () => {
    unwatchFile(fileP);
    console.log(`Successfully To Update File ${fileP}`)
})