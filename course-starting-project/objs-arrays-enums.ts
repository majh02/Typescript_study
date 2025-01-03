// Important: Often, you'll see enums with all-uppercase values
// but that's not a "must-do". You can go with Any value names.
enum Role { ADMIN = 5, READ_ONLY = 'READ_ONLY', AUTHOR = '200' };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // tuple (정확히 2개의 요소를 가진 배열)
// } = {
const person = {
    name: 'Jihye',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    // role: [2, 'author'], // union 타입 -> 튜플
    role: Role.ADMIN,
}

// person.role.push('admin');
// person.role[1] = 10; // 1번 인덱스는 string

// person.role = [0, 'admin', 'user'];

let favoriteActivies: string[]; // any[];
favoriteActivies = ['Sports'];

console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !! ERROR !!
}

if(person.role === Role.ADMIN) {
    console.log('is Admin');
}
