import { User } from "./User";

export class WorkItem {
    title: string;
    description: string;
    createDate: Date;
    createdBy: User;
    lastModifiedDate: Date;
    lastModifiedBy: User;
}