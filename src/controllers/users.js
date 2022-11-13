import { request, response } from "express";

// No es necesario importar {response}, pero para poder visualizar las propiedades y métodos del res, se podría incluirlo.

const usersGet = (req = request, res = response)=> {
    console.log(req.query);
     res.json({msg:"Get API"});
};

const usersPost = (req, res)=>{
    const {fname = 'unknow', lname = 'unknow', age = 'unknow'} = req.body;

    res.status(201).json({msg:"Post API", body:{fname, lname, age}});
};

const usersPut = (req = request, res)=>{
    const { id } = req.params;

    res.json({msg:"Put API", id})
};

const usersPatch = (req, res)=> {
    res.json({msg:"Patch API"})
};

const usersDelete = (req, res)=> {
    res.json({msg:"Delete API"})
};


export{usersGet, usersPut, usersPost, usersDelete, usersPatch}