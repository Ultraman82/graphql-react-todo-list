import React, { Component } from "react"
import { getList, addToList, deleteItem, updateTask } from "./ListFunctions"

class List extends Component {
  constructor() {
    super()
    this.state = {
      id: "",
      title: "",
      editDisabled: false,
      items: []
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.getAll(this.props.client)
  }

  onChange = event => {
    this.setState({ title: event.target.value, editDisabled: "disabled" })
    console.log(this.state.editDisabled)
  }

  getAll = (client) => {
    getList(client).then(data => {
      this.setState(
        {
          title: "",
          items: [...data],
          editDisabled: false
        },
        () => {
          console.log(this.state.items)
        }
      )
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { client } = this.props
    const { title } = this.state
    addToList(title, client).then(() => {
      this.getAll(client)
    })
  }

  onUpdate = e => {
    e.preventDefault();
    const {client} = this.props
    updateTask(this.state.id, this.state.title, client).then(() => {
      this.getAll(client)
    })
  }

  onEdit = (id,title,e) => {
    e.preventDefault()
    this.setState({
      id,
      title
    })
  }

  onDelete = (id, e) => {
    e.preventDefault()
    const { client } = this.props
    deleteItem(id, client).then(() => {
      this.getAll(client)
    })
  }

  render() {
    const { title } = this.state
    return (
      <div className="col-md-12">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Task Name</label>
            <div className="row">
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={title || ""}
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-success"
                  onClick={this.onUpdate.bind(this)}
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={this.onSubmit.bind(this)}
            className="btn btn-outline-primary btn-block"
          >
            Submit
          </button>
        </form>
        <table className="table">
          <tbody>
            {this.state.items.map((item) => (
              <tr key={item.id}>
                <td className="text-left">{item.title}</td>
                <td className="text-right">
                  <button
                    href=""
                    className="btn btn-secondary mr-1"
                    disabled={this.state.editDisabled}
                    onClick={this.onEdit.bind(this, item.id, item.title)}
                  >
                    Edit
                  </button>
                  <button
                    href=""
                    className="btn btn-danger"
                    onClick={this.onDelete.bind(this, item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List