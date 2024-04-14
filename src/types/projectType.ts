import { userType } from "./userType"

 type projectType = {
    projectId : string | number,
    projectName: string,
    developer: userType,
    users?: userType[],
    providers: string[],
    API_KEY : string,
  }
  export default projectType