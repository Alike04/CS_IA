import { Router, Request, Response } from "express";
import Board from "../models/board";

export default (app) => {
  app.get("/boards", async (req, res) => {
    const boards = await Board.find().exec();
  });
};
