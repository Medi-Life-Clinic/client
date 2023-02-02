import { render } from "@testing-library/react"
import App from "./src/App.jsx"



describe("App Component", () => {
    it('Renders the app',  () => {
        render((<App />))
})
})