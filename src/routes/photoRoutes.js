import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multerConfig';
import photoController from '../controllers/PhotoController';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('photo'), photoController.store);

export default router;
