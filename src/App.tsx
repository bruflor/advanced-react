import {RecursiveComponent} from "./components/recursive.tsx";

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
        <RecursiveComponent data={mockObject} />
    </>
     
  )
}

export default App
