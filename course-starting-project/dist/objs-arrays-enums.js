var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "200";
})(Role || (Role = {}));
;
const person = {
    name: 'Jihye',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
let favoriteActivies;
favoriteActivies = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
//# sourceMappingURL=objs-arrays-enums.js.map