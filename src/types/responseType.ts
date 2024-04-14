import projectType from "./projectType";


export type SuccessResponseType = {
    message : string,
    project : projectType,
    accessToken? : string
}