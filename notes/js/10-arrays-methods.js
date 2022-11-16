//.push añadir al final del array
//.unshift añadir al principio de un array

let newArray = (array,first,last) => {
    array.unshift(first);
    array.push(last);
    return(array);
}


console.log(newArray([1,2,3,4,5],666,999));
