import { Elysia } from "elysia";
import { baseRoutes } from "routes/base";
import { testRoutes } from "routes/test";

const app = new Elysia()
app.use(baseRoutes)
app.use(testRoutes)
app.listen(3000)

console.log(`
            Elysia is running at
            http://${app.server?.hostname}:${app.server?.port}
            `);
