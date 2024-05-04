import { Request, Response } from "express";
import { getUsersType } from "../../types/responseType";
import project from "../../models/project";


export default async function getUsers(req : Request, res : Response){
        const projectId = req.params.projectId
        const projectUsers = await project.findById(projectId).populate("users")
        if(!projectUsers?.users) return res.status(504).json({error: "Project not found"})
    
        const response : getUsersType = {
            message : "these users signed in successfully to your application",
            totalUsers : projectUsers.users.length,
            // @ts-ignore 
            users : projectUsers.users.map((user) => { return {
                // @ts-ignore 
                userId : user.id, username : user.username, email : user.email, profilePicture : user.profilePicture} })
        }
        return res.status(200).json(response)
}