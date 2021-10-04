function getOldestMember(numbers){
    let oldestMember = numbers[0];
    for(let i = 0; i < numbers.length; i++ ) {
        if(numbers[i] > oldestMember) {
            oldestMember = numbers[i];
        }
    }
    return oldestMember;
}

function getYoungestMember(numbers){
    let youngestMember = numbers[0];
    for(let i = 0; i < numbers.length; i++ ){
        if(numbers[i] < youngestMember) {
            youngestMember = numbers[i];
        }
    } 
    return youngestMember;
}

function getAverageAges(numbers){
    let counter = 0;
    for(let i = 0; i < numbers.length; i++){
        counter += numbers[i]
    }
    return (counter / numbers.length).toFixed(1);
}
/*function getAverageAge(number) {

}

*/