import express from 'express';
import { getAllContacts, addContact } from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/', getAllContacts);
router.post('/', addContact);

export default router;
