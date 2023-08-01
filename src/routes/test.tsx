import Elysia from "elysia";
import { gotClicked } from "controllers/test-controllers";

export const testRoutes = function testRoutes(app: Elysia){
    return app.post("/clicked", gotClicked)
}
