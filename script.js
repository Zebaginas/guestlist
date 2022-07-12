const people = ['Chris', 'Anne', 'Colin',
'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let addmited, refused;
let newArr = [...people];
for(let i = 0; i < newArr.length; i++)
{   //addmited people
    if(newArr[i] != "Phil" && newArr[i] != "Lola")
    {
        addmited = document.querySelector("#admitted");
        console.log(addmited.textContent = addmited.textContent + newArr[i] + ", ");
    }
    else{
        refused = document.querySelector(".refuse");
        console.log(refused.textContent = refused.textContent + newArr[i] + ", ");
    }
}