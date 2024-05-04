import { Request, Response } from "express";
import Project from "../models/project";
import { GetProjectsSuccessResponseType } from "../types/responseType";

// getUsers filtered by Developer ID
const getFilteredProjects = async (req: Request, res: Response) => {
    try {
        const { developer } = req.query;

        // Check if developer is provided and is a valid string
        if (!developer || typeof developer !== "string") {
            return res.status(400).json({ error: "Invalid or missing developer parameter" });
        }

        // Find projects for the specified developer
        const projects = await Project.find({ developer });

        const response: GetProjectsSuccessResponseType = {
            message: "Your Projects",
            totalProjects: projects.length,
            projects
        };

        // Send projects in the response
        return res.status(200).json(response);
    } catch (error) {
        // Handle any errors
        console.error("Error retrieving projects:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export default getFilteredProjects;
