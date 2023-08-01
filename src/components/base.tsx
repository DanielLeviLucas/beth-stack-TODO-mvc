import * as elements from "typed-html"

export const BaseHTML = function getBaseHTML({ children }: elements.Children){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="todo mvc using BETH stack">
    <title>Todo MVC | BETH stack</title>
    <script src="https://unpkg.com/htmx.org@1.9.3" defer></script>
</head>
${children} 
`;
} 
