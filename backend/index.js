import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

let todos = []
let currentId = 1

app.get('/todos', (req, res) => {
  res.json(todos)
})

app.post('/todos', (req, res) => {
  const { text } = req.body
  const newTodo = { id: currentId++, text }
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  todos = todos.filter(todo => todo.id !== id)
  res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`)
})
