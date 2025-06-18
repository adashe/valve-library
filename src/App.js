import { useState } from "react";

const valves = [
    {
        id: "1A",
        imageURL: "1A.png",
    },
    {
        id: "1B",
        imageURL: "1B.png",
    },
    {
        id: "3A",
        imageURL: "3A.png",
    },
    {
        id: "3B",
        imageURL: "3B.png",
    },
    {
        id: "3F",
        imageURL: "3F.png",
    },
    {
        id: "3L",
        imageURL: "3L.png",
    },
];

export default function App() {
    const [current, setCurrent] = useState("");

    function handleValveClick(e) {
        e.preventDefault();
        const selected = valves.filter((valve) => valve.id === e.target.id);
        setCurrent(selected[0]);
    }

    return (
        <div className="App">
            <h1>Valve Library</h1>
            <div className="container">
                <ValveList handleValveClick={handleValveClick} />
                <Image valve={current} />
            </div>
        </div>
    );
}

function ValveList({ handleValveClick }) {
    return (
        <ul className="valve-list">
            {valves.map((valve) => (
                <Valve
                    valve={valve}
                    key={valve.id}
                    handleValveClick={handleValveClick}
                />
            ))}
        </ul>
    );
}

function Valve({ valve, handleValveClick }) {
    return (
        <li className="valve" onClick={handleValveClick} id={valve.id}>
            Valve {valve.id}
        </li>
    );
}

function Image({ valve }) {
    return (
        <div>
            <img
                src={
                    valve
                        ? "https://c02.purpledshub.com/uploads/sites/62/2023/01/Were-dinosaurs-warm-blooded-8e96cd7.jpg"
                        : "https://i.cbc.ca/1.7051962.1701966936!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/gorgosaurus-and-citipes.jpg?im="
                }
                className="image"
            ></img>
            <h2>{valve ? `Valve ${valve.id}` : ""}</h2>
        </div>
    );
}
