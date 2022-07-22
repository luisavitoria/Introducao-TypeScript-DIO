// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee: {code: number, name: string } = {
    code: 10,
    name: "John"
}

let employee2 = {
    code: 10,
    name: 'John'
}

//utilizando interfaces
interface Employee {
    code: number,
    name: string
}

let employeeObj = {} as Employee
employeeObj.code = 10
employeeObj.name = 'John'

let employee3: Employee = {
    code: 10,
    name: 'John'
}