import { Request, Response } from "express";
import Project from "../../models/project";

export default async function deleteUser(req: Request, res: Response) {
    try {
        const { userId } = req.query;
        const projectId = req.params.projectId;

        // Find the project by ID
        const projectUsers = await Project.findById(projectId);

        if (!projectUsers) {
            return res.status(404).json({ error: "Project not found" });
        }

        // Remove the user from the users array
        projectUsers.users = projectUsers.users.filter(user => user.toString() !== userId);

        // Save the updated project
        await projectUsers.save();

        return res.status(200).json({ message: "User is deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ error: "User is not deleted" });
    }
}
