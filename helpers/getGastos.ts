import inquirer from "inquirer";
import ListPrompt from "inquirer/lib/prompts/list";
import { getList, saveList } from "./options"


export const getGastos = async () => {

    const list = await getList();

    console.log(list);
};

export const createList = async () =>{
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Ingrese su gasto"
        },
        {
            type: "input",
            name: "amount",
            message: "Ingrese el monto de su gasto"
        }
    ])

    const list = await getList();

    list.push(data)

    await saveList(list)
}