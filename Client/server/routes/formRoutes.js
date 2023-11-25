import express from 'express';
import { submitForm } from '../controller/programController.js'; // Update the path accordingly

const router = express.Router();

router.post('/', submitForm);

export default router;
