import { Request, Response } from "express";
import Project from "../models/project";

const updateProjectById = async (req: Request, res: Response) => {
    try {
        const projectId = req.params.projectId;
        const updatedData = req.body;

        console.log(projectId)
        console.log(updatedData)
        // Check if the project exists
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        // If newUser data is provided in the request body, add it to the project's users array
        if (updatedData.newUser) {
            project.users.push(updatedData.newUser._id);
        }

        // Save the updated project
        await project.save();

        // Use findByIdAndUpdate to find and update the project
        const updatedProject = await Project.findByIdAndUpdate(projectId, updatedData, {
            new: true, // Return the updated document
            runValidators: true // Run model validation on update
        });

        if (!updatedProject) {
            // If project with given ID doesn't exist, return 404
            return res.status(404).json({ error: "Project not found" });
        }

        // Project updated successfully, return it in the response
        return res.status(200).json(updatedProject);
    } catch (error) {
        // Handle any errors
        console.error("Error updating project:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export default updateProjectById;
