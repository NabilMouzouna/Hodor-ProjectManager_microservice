import { Request, Response } from "express";
import Project from "../models/project";
import { SuccessResponseType } from "../types/responseType";
import projectType from "../types/projectType";
import { userType } from "../types/userType";
import user from "../models/user";
import { sign } from "jsonwebtoken"


const createProject = async (req: Request, res: Response) => {
    try {
        const projectInfo : projectType = req.body;

        // Check if project with the same name already exists
        const existingProject = await Project.findOne({ projectName : projectInfo.projectName });
        if (existingProject) return res.status(400).json({ error: "Project with this name already exists" });
        
        // Retrieve the user document corresponding to the provided username
        const developer: userType | null = await user.findById(projectInfo.developer);
        
        // check first if the creator of the project exists in the database
        if(!developer) return res.status(504).json({ error: "this Developer does not exist please login/sign up" })
        
        // Create the project
        const project = await Project.create(projectInfo);

        // Sign an API Key
        const API_KEY = sign({projectId: projectInfo.projectId , developer : projectInfo.developer.userId}, process.env.API_SECRET_KEY! )
        // Prepare success response
        const response: SuccessResponseType = {
            message: "Project created successfully",

            project: {
                projectId: project.id,
                projectName: project.projectName,
                developer : {
                    userId : developer.userId,
                    username : developer.username,
                    email : developer.email,
                    profilePicture: developer.profilePicture
                },
                providers: project.providers,
                API_KEY
            },
        };

        // Send success response
        res.status(200).json(response);
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default createProject
