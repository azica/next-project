import { gql, useMutation, useQuery } from "@apollo/client";

const CREATE_USER = gql`
  mutation ($name: String!, $email: String!, $password: String!, $avatar: String!) {
    addUser(data: { name: $name, email: $email, password: $password, avatar: $avatar }) {
      id
      name
      avatar
    }
  }
`;

export const useCreateUser = () => {
  return useMutation<Model.User, Omit<Model.User, "id">>(CREATE_USER);
};

const GET_USER = gql`
  query {
    user(id: 1) {
      id
      name
      avatar
    }
  }
`;

export const useGetUser = () => {
  return useQuery(GET_USER);
};
