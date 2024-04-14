import { Request, Response } from "express"
import Project from "../models/project"

const getProjectById = async (req: Request, res: Response) => {
    try {
        const projectId = req.params.projectId

        const project = await Project.findById(projectId)

        if (!project) {
            // Project not found
            return res.status(404).json({ error: "Project not found" });
        }

        // Project found, send it in the response
        return res.status(200).json(project)
    } catch (error) {
        // Handle any errors
        console.error("Error retrieving project:", error)
        return res.status(500).json({ error: "Internal server error" })
    }
};

export default getProjectById
