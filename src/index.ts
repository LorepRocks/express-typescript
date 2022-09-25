import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json()) // middleware to transform req.body to json obj

const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('someone pinged here!' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
