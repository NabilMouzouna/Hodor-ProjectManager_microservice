import { Request, Response } from "express"
import Project from "../models/project"

// getAll Projects 
const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find()

        // Send projects in the response
        return res.status(200).json(projects)
    } catch (error) {

        // Handle any errors
        console.error("Error retrieving projects:", error)
        return res.status(500).json({ error: "Internal server error" })
    }
};
// getUsers filtered by Developer ID
export const getFilteredProjects = async (req: Request, res: Response) => {


    try {
        let query = {}; // Default empty query

        // Check if developerId query parameter is provided
        if (req.query.developer) {
            query = { developer: req.query.developer };
        }

        const projects = await Project.find(query);

        // Send projects in the response
        return res.status(200).json(projects);
    } catch (error) {
        // Handle any errors
        console.error("Error retrieving projects:", error);
        return res.status(500).json({ error: "Internal server error" });
    }

}
export default getProjects;
