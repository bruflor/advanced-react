import React from "react";

export class ErrorBoundry extends React.Component{
    state = {hasError:false}
    props = {fallback: <p>Testing error</p>, children:<></>}

    static getDerivedStateFromError(error: unknown): any {
        console.error(error)
        return {hasError:true};
    }

    componentDidCatch(error: Error) {
        console.error(error)
    }

    render(){
        if(this.state.hasError){
            return this.props.fallback;
        }
        return this.props.children
    }
}