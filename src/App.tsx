// import {RecursiveComponent} from "./components/recursive.tsx";
// import {ErrorBoundry} from "./components/error-boundry.tsx";
import { StyledButton } from "./components/styled-elements";
import {useState, useTransition} from "react";
import Cover from "./components/cover.tsx";
import Reviews from "./components/reviews.tsx";
import Writer from "./components/writer.tsx";


function App() {
    // const mockObject = {
    //     id: 1,
    //     name: 'John Doe',
    //     email: 'john.doe@example.com',
    //     address: {
    //         street: '123 Main St',
    //         city: 'New York',
    //         state: 'NY',
    //         country: 'USA',
    //         zipCode: '10001',
    //         location: {
    //             latitude: 40.7128,
    //             longitude: -74.0060,
    //             timezone: 'America/New_York',
    //         },
    //     },
    // };
    const [section, setSection] = useState("Cover");

    const sectionHandler = (sec) => {
        setSection(sec);
    };
    return (
        <>
            <Button onClick={() => sectionHandler("Cover")}>Cover</Button>
            <Button onClick={() => sectionHandler("Reviews")}>Book Reviews</Button>
            <Button onClick={() => sectionHandler("Writer")}>Book's Writer</Button>

            {section === "Cover" ? (
                <Cover />
            ) : section === "Reviews" ? (
                <Reviews />
            ) : (
                <Writer />
            )}
        </>
    );
}


const Button = ({ onClick, ...props }) => {
    const [isPending, startTransition] = useTransition();

    return (
        <StyledButton
            onClick={() => {
                startTransition(() => {
                    onClick();
                });
            }}
            {...props}
        />
    );
  // return (
  //   <>
  //       <ErrorBoundry fallback={<h1>Error with component boundry</h1>}>
  //           <RecursiveComponent data={mockObject} />
  //       </ErrorBoundry>
  //
  //   </>
  //
  // )
}

export default App
