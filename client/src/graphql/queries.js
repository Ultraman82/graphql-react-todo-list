import { gql } from 'apollo-boost'

export const GET_TASKS = gql`
  {
    tasks{
      id
      title
    }
  }
`