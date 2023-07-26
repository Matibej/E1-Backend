import inquirer from "inquirer"
import { createList, getGastos } from "./helpers/getGastos"

const main = async () => {

    let run = true

    while(run){

        const answer = await inquirer.prompt([{

            type: "list",
            name: "chosenItem",
            message: "Elige una acción:",
            choices: [
                {
                    value: 1,
                    name: "Ver mis gastos"
                },
                {
                    value: 2,
                    name: "Guardar mis gastos"
                },
                {
                    value: 99,
                    name: "Salir"
                }
            ]
            
        }
    ])

    switch (answer.chosenItem) {
        case 1:
            await getGastos();
            break;
        case 2:
            await createList();
            break;
        case 99:
            run = false
            break;
        default:
            run = false
            break;
    }
    }    
} 


main();