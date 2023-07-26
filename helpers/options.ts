import fs from "fs"
import { IGastos } from "../interfaces/interfaces"


export const getList = ():Promise<IGastos[]> => {

    return new Promise((resolve, reject)=>{
        fs.readFile("pagos.json", "utf-8", (err, content) => {
            if (err) {
                reject(err)
            }
            resolve(JSON.parse(content))
        })
    })

}


export const saveList = (content: IGastos[]): Promise<void> =>{

    return new Promise((resolve, reject)=>{
        fs.writeFile("pagos.json", JSON.stringify(content), (err)=>{
            if (err) {
                reject(err)
            }
            resolve(console.log("Gasto agregado a la lista")
            )
        })
    })
}