import { faker } from '@faker-js/faker';

const generateFormValues = () => ({
    personalInformation: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        desc: faker.person.bio(),
        phoneNumber: faker.phone.number('##########'), // Numéro de téléphone
        birthday: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0],
    },
    experience: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
        jobTitle: faker.person.jobTitle(),
        businessOrClient: faker.company.name(),
        location: faker.location.streetAddress(),
        typeOfContract: faker.helpers.arrayElement(["Stage", "Alternance", "CDI", "CDD"]),
        startDay: faker.date.past(5).toISOString().split('T')[0],
        endDay: faker.date.future(1).toISOString().split('T')[0],
        description: faker.lorem.sentences(2),
    })),
    skills: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
        skillName: faker.hacker.ingverb(),
        skillLevel: faker.helpers.arrayElement(["Débutant", "Intermédiaire", "Pro"]),
    })),
    cvFile: {
        name: faker.system.fileName(),
        url: "/doc/cv_doc.jpg",
    },
});
function GeneratorOfFormValues(){
    return Array.from({ length: 10 }, generateFormValues)
}
export const Data = GeneratorOfFormValues();