import {DataRow} from "../types/deployments.types";
import { faker } from '@faker-js/faker';


export let dummyData: Array<DataRow> = []
for (let i = 0; i < Math.random()*100; i++) {
    dummyData.push(
        {
            repo: faker.git.branch(),
            development: {
                deployed_by: faker.name.fullName(),
                approved_by: faker.name.fullName(),
                date: faker.date.past(1).toLocaleDateString(),
                url: faker.internet.url()
            },
            staging: {
                deployed_by: faker.name.fullName(),
                approved_by: faker.name.fullName(),
                date: faker.date.past(1).toLocaleDateString(),
                url: faker.internet.url()
            },
            production: {
                deployed_by: faker.name.fullName(),
                approved_by: faker.name.fullName(),
                date: faker.date.past(1).toLocaleDateString(),
                url: faker.internet.url()
            }
        }
    );
}
