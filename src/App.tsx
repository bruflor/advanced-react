import {RecursiveComponent} from "./components/recursive.tsx";
import {ErrorBoundry} from "./components/error-boundry.tsx";

function App() {
    const mockObject = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            country: 'USA',
            zipCode: '10001',
            location: {
                latitude: 40.7128,
                longitude: -74.0060,
                timezone: 'America/New_York',
            },
        },
    };
  return (
    <>
        <ErrorBoundry fallback={<h1>Error with component boundry</h1>}>
            <RecursiveComponent data={mockObject} />
        </ErrorBoundry>

    </>
     
  )
}

export default App
