const people = ['Chris', 'Anne', 'Colin',
'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let addmited, refused;
let newArr = [...people];
for(let i = 0; i < newArr.length; i++)
{   //addmited people
    if(newArr[i] != "Phil" && newArr[i] != "Lola")
    {

        addmited = document.querySelector("#admitted");
        if(addmited.textContent == "Admit:")
        {
        console.log(addmited.textContent = addmited.textContent + " " + newArr[i]);
        }
        else
        {
        console.log(addmited.textContent = addmited.textContent + ", " + newArr[i]);
        }
    }
    else{
        refused = document.querySelector(".refuse");
        if(refused.textContent == "Refuse:")
        {
        console.log(refused.textContent = refused.textContent + " " + newArr[i]);
        }
        else 
        {
            console.log(refused.textContent = refused.textContent + ", " + newArr[i]);
        }
    }
}