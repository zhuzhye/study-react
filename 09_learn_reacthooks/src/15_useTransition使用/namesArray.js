import { faker } from '@faker-js/faker'
let namesArray = []
for (let i = 0; i < 10000; i++) {
    namesArray.push(faker.name.fullName())
}
console.log(namesArray);
export default namesArray