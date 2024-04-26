import { Router }  from "express";
import usuarioController from "./controller/usuarioController.js";

const router = Router();
router.get("/status", (req, res) => {
  res.json("ok");
});

router.get('/usuario', usuarioController.getUsers);
router.get('/usuariosFiltro', usuarioController.getUsersFilter);
router.get('/getActiveUsersByType', usuarioController.getActiveUsersByType);

export default router;
