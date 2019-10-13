import { gql } from 'apollo-boost'

export const UPDATE_TASK = gql`
  mutation updatetask($id: String!, $title: String!) {
    updatetask(id: $id, title: $title) {
      id
    }
  }
`;

export const ADD_TASK = gql`
  mutation addtask($title: String!) {
    addtask(title: $title) {
      id
    }
  }
`;


export const DELETE_TASK = gql`
  mutation deletetask($id: String!) {
    deletetask(id: $id) {
      id
    }
  }
`;
