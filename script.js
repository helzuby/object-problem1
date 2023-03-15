

const person = {
    name : 'Helen',
    age : 20,
    gender : 'female',
    occupation : 'student',
    Hobbies : {
        dancing : true,
        singing : true,
        reading : false,
        cooking: true,
    }
};

function removeProperty (object , property) {
    delete object[property];
    return object;
}

console.log(removeProperty(person, 'Hobbies'));



