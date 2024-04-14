import { Router } from "express"
import getProjects, { getFilteredProjects } from "../controllers/getProjects"
import getProjectById from "../controllers/getProjectById"
import createProject from "../controllers/createProject"
import updateProjectById from "../controllers/updateProjectById"
import deleteProjectById from "../controllers/deleteProjectById"


const router = Router()


// get Filtered Projects by DevloperId
router.get('/'  , getFilteredProjects)

// get a Project by Id
router.get('/:projectId'  , getProjectById)

// create a new Project
router.post('/', createProject)

// update Project information by its Id
router.put('/:projectId'  , updateProjectById)

// delete Project
router.delete('/:projectId' , deleteProjectById)

export default router