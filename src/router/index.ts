import * as express from 'express'

const router = express.Router()

router.use('/', (req: express.Request, res: express.Response) => {
	res.json('')
})

export default router
