import { Router } from 'express';
import RootView from './routines/aroot'
const router = Router();

router
  .get('^/$|index(.html)?', RootView.RootView);

export default router;