import express from 'express';
import cors from 'cors';

export const expressJSON = express.json();
export const corsOptions = cors();
export const httpForm = express.urlencoded({ extended: false });