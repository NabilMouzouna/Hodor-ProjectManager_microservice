import { Request, Response } from "express"
import Project from "../models/project"

const deleteProjectById = async (req: Request, res: Response) => {
    try {
        const projectId = req.params.projectId // Assuming the project ID is in the request params

        // Use findByIdAndDelete to find and delete the project
        const deletedProject = await Project.findByIdAndDelete(projectId)

        if (!deletedProject) {
            // If project with given ID doesn't exist, return 404
            return res.status(404).json({ error: "Project not found" })
        }

        // Project deleted successfully, return a success message
        return res.status(200).json({ message: "Project deleted successfully" })
    } catch (error) {
        // Handle any errors
        console.error("Error deleting project:", error)
        return res.status(500).json({ error: "Internal server error" })
    }
};

export default deleteProjectById
