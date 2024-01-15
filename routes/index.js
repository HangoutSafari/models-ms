import express, { Router } from 'express';
import cors from 'cors';
import { getModel, getModels } from '../controllers/modelsViaSupabase.js';

const router = express.Router();

router.options('/models', (req, res, next) => {
  try {
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });

    // response
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.get('/models', cors(), getModels);
router.get('/models/:id', cors(), getModel);

export default router;
