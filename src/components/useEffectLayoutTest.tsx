import {useLayoutEffect, useRef, useState} from "react";

export const UseEffectLayoutTest = () => {
    const [show, setShow] = useState(false);
    const [top, setTop] = useState(0);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        if (buttonRef.current === null || !show) return setTop(0);
        const  bottom = 250;
        setTop(bottom + 30);
    }, [show]);

    const now = performance.now();
    while (now > performance.now() - 200) {
        //Do something
    }

    return (
        <>
            <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
                Show
            </button>
            {show && (
                <div
                    className="tooltip"
                    style={{
                        top: `${top}px`,
                    }}
                >
                    Some text ...
                </div>
            )}
        </>
    );
}