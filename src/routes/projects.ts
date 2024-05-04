import { Router } from "express"
import getFilteredProjects from "../controllers/getProjects"
import getProjectById from "../controllers/getProjectById"
import createProject from "../controllers/createProject"
import updateProjectById from "../controllers/updateProjectById"
import deleteProjectById from "../controllers/deleteProjectById"
import getUsers from "../controllers/manipulateUsers/getUsers"
import saveUser from "../controllers/manipulateUsers/saveUser"
import deleteUser from "../controllers/manipulateUsers/deleteUser"


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

// get Users of particular Project
router.get("/:projectId/users",getUsers)

// push a user to particular Project
router.post("/:projectId/users",saveUser)

// delete a user from particular Project
router.delete("/:projectId/users",deleteUser)

export default router