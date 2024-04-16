import express from "express";

import { createEmployeeController, getAllEmployeeController, deleteEmployeeController, getEmployeeByIdController} from "../dependency/DependenciesEmployee";

export const employeeRouter = express.Router();

employeeRouter.get("/", getAllEmployeeController.run.bind(getAllEmployeeController));
employeeRouter.post("/", createEmployeeController.run.bind(createEmployeeController));
employeeRouter.delete("/", deleteEmployeeController.run.bind(deleteEmployeeController));
employeeRouter.get("/:id",getEmployeeByIdController.run.bind(getEmployeeByIdController));