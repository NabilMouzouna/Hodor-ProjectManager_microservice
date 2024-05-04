import { Request, Response } from "express";
import project from "../../models/project";

//TODO : add only if User is not added yet

export default async function saveUser(req : Request, res : Response) {
        const userId = req.body.userId
        const projectId = req.params.projectId
        const projectUsers = await project.findById(projectId)
        if(!projectUsers) return res.status(504).json({error: "Project not found"})
    
        projectUsers.users.push(userId)
        try {
            await projectUsers.save()
            return res.status(200).json({message: "User Is Registered to the Project Users List"})
        } catch (error) {
            return res.status(500).json({error: "User Is not Registered to the Project Users List"})
            
        }
}