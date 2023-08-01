import Elysia from "elysia";
import html from "@elysiajs/html"
import * as elements from "typed-html"
import { BaseHTML } from "components/base";

export const baseRoutes = function baseRoutes(app: Elysia) {
    return app.use(html())
        .get("/", function serveBaseHTML({ html }): Response {
            return html(
                <BaseHTML>
                    <body>
                        <h1>Todo MVC</h1>
                        <button hx-post="/clicked"
                            hx-swap="outerHTML">
                            click
                        </button>
                    </body>
                </BaseHTML>
            )
        })
}
