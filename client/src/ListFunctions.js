import { GET_TASKS } from './graphql/queries'
import { UPDATE_TASK, ADD_TASK, DELETE_TASK} from './graphql/mutations'



export const getList = async (client) => {
  const { data } = await client.query({
    query: GET_TASKS,
    fetchPolicy: 'network-only'
  })
  return data.tasks;
};

export const addToList = async(title, client) => {
    const { data } = await client.mutate({
      mutation: ADD_TASK,
      variables:{
        title
      },
      fetchPolicy: 'no-cache'
    })
    return data.tasks
};

export const deleteItem = async (id, client) => {
  const { data } = await client.mutate({
    mutation: DELETE_TASK,
    variables:{
      id
    },
    fetchPolicy: 'no-cache'
  })
  return data
}

export const updateTask = async (id, title, client) => {
  const { data } = await client.mutate({
    mutation: UPDATE_TASK,
    variables:{
      id,
      title
    },
    fetchPolicy: 'no-cache'
  })
  return data.tasks
};