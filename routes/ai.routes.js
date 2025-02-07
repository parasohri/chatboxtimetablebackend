import { Router } from 'express';
import aiService from '../services/ai.service.js';

const router = Router();

// Example route for AI service
router.post('/process', async (req, res) => {
    try {
        const result = await aiService(req.query.da).then((result) => {
        res.status(201).json(result);})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;