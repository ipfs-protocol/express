import { Router } from 'express';
import RootPage from './routines/aroot'
const router = Router();

router
  .get('^/$|index(.html)?', RootPage.RootPage);

export default router;