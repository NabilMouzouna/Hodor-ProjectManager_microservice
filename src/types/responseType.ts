import { Document, Types } from "mongoose";
import projectType from "./projectType";
import { userType } from "./userType";


export type SuccessResponseType = {
    message : string,
    project : projectType
}

export type GetProjectsSuccessResponseType = {
    message : string,
    totalProjects : number,
    projects : Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        developer: Types.ObjectId;
        projectName: string;
        users: Types.ObjectId[];
        providers: string[];
    }>[]
}
export type getUsersType = {
    message : string,
    totalUsers : number,
    users : userType[]
}