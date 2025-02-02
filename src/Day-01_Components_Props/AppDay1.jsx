// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "./Button";  
import Card from "./Card";

function AppDay1() {
    return (
        <div>
            <Button text="Click Me" color={"blue"} onClick={() => alert("Butto clicked!")} />
            <Card
                title="React Basics"
                description="Learn the basics of React"
                image="https://via.placeholder.com/250"
            />
        </div>
    );
}

export default AppDay1;