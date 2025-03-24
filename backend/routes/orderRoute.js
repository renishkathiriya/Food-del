import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { placeOrder, userOrders, verifyOrder,listOrders } from '../controller/orderController.js'
const orderRouter = express.Router();

orderRouter
      .post("/place", authMiddleware, placeOrder)
      .post("/verify", verifyOrder)
      .post("/userorders", authMiddleware, userOrders)
      .get("/list",listOrders)

export default orderRouter;