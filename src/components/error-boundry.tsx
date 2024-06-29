import React from "react";

export class ErrorBoundry extends React.Component{
    state = {hasError:false}
    props = {fallback: <p>Testing error</p>}

    static getDerivedStateFromError(error: unknown): any {
        console.error(error)
        return {hasError:true};
    }
    render(){
        if(this.state.hasError){
            return this.props.fallback;
        }
        return this.props.children
    }
}