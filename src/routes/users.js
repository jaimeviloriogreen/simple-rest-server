import { Router } from "express";
import { 
    usersGet, 
    usersPost, 
    usersDelete, 
    usersPut, 
    usersPatch 
} from "../controllers/users.js";

const router = Router();

router.get("/", usersGet);

router.post("/",usersPost);

router.patch("/", usersPatch);

router.put("/:id?", usersPut);

router.delete("/", usersDelete);








export default router;