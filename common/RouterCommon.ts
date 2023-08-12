/* eslint-disable @typescript-eslint/no-empty-function */
import { Router } from "express"

class RouterCommon<T>{
    public router: Router;
    public controller: T;

    constructor(TController: { new(): T }) {
        this.router = Router();
        this.controller = new TController;
        this.routes();
    }

    routes() { }
}

export default RouterCommon;