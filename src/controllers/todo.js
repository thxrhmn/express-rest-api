let todos = [
  {
    id: 1,
    title: 'Cuci tangan',
    isDone: true,
  },
  {
    id: 2,
    title: 'Jaga jarak',
    isDone: false,
  },
  {
    id: 3,
    title: 'Gunakan maskaer',
    idDone: true,
  },
]

exports.getTodos = async (req, res) => {
  try {
    res.send({
      status: 'success',
      data: {
        todos,
      }
    });
  } catch (err) {
    console.log(err);

    res.send({
      status: 'failed',
      message: 'Server error'
    })
  }
}

exports.getTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const data = todos.find((todo) => todo.id == id);

    res.send({
      status: 'success',
      data: {
        todos: data
      }
    });
  } catch (err) {
    console.log(err);

    res.send({
      status: 'failed',
      message: 'Server error'
    })
  }
}

exports.addTodo = async (req, res) => {
  try {
    const data = req.body;
    todos.push(data);

    res.send({
      status: 'success',
      data: {
        todos,
      }
    });
  }catch (err) {
    console.log(err);

    res.send({
      status: 'failed',
      message: 'Server error'
    })
  }
}

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const todos = todos.map((todo) => {
      if (todo.id === id){
        return req.body;
      } else {
        return todo;
      }
    });

    const data = todos.find((todo) => todo.id == id);

    res.send({
      status: 'success',
      data: {
        todo: data,
      }
    });
  } catch (err) {
    console.log(err);

    res.send({
      status: 'failed',
      message: 'Server error'
    })
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    todos = todos.filter((todo) => todo.id != id);

    res.send({
      status: 'success',
      data: {
        todos,
      }
    })
  }catch (err) {
    console.log(err);

    res.send({
      status: 'failed',
      message: 'Server error'
    })
  }
}