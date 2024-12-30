import { type ClientSchema, a, defineData } from '@aws-amplify/backend';


const schema = a.schema({
  Customer: a
    .model({
      creditScore: a.integer(),
      geography: a.string(),
      gender: a.string(),
      age: a.integer(),
      tenure: a.integer(),
      balance: a.float(),
      numProducts: a.integer(),
      hasCreditCard: a.boolean(),
      isActiveMember: a.boolean(),
      estimatedSalary: a.float(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});