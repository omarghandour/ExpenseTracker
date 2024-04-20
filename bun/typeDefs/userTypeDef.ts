const userTypeDef = `#graphql
type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
}
type Query {
    users: [User!]
    authUser: User
    user(id: ID!): User
}
type Mutation {
    signUP(input: signUPInput!): User
    login(input: loginInput!): User
    logout: LogoutResponse
}
input signUPInput {
    username: String!
    name: String!
    password: String!
    gender: String!
}
input loginInput {
    username: String!
    password: String!
}
type LogoutResponse {
    # success: Boolean!
    message: String!
}
`;
export default userTypeDef;
