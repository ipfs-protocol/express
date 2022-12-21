import { Router } from 'express';

const router = Router();

router
  .get('^/$|index(.html)?', (req, res)=>{
    res.send('Hello gogogodddddd')
  });

export default router;