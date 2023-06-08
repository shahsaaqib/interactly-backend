import express from 'express';
const router = express.Router();

import {
  createContact,
  getContact,
  updateContact,
  deleteContact,
} from './handler';

router.post('/', async (request, response) => {
  try {
    const result = await createContact(request.body);
    response.status(200).json(result);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
});

router.get('/', async (request, response) => {
  try {
    const result = await getContact(request.params.id);
    response.status(200).json(result);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
});

router.put('/', async (request, response) => {
  try {
    const result = await updateContact(request.body);
    response.status(200).json(result);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
});

router.delete('/', async (request, response) => {
  try {
    const result = await deleteContact(request.params.id);
    response.status(200).json(result);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
});
export default router;
