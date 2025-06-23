import { useState } from "react";

const valves = [
    {
        id: "1A",
        imageURL:
            "https://c02.purpledshub.com/uploads/sites/62/2023/01/Were-dinosaurs-warm-blooded-8e96cd7.jpg",
    },
    {
        id: "1B",
        imageURL:
            "https://static.scientificamerican.com/sciam/cache/file/7C1857C2-6599-46D8-975D728A0439C784_source.jpg?w=1200",
    },
    {
        id: "3A",
        imageURL:
            "https://cdn.arstechnica.net/wp-content/uploads/2023/07/image-3-scaled.jpeg",
    },
    {
        id: "3B",
        imageURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_gtQbeuILPcCdT25gFyvO23aGAZeyJRRJQ&s",
    },
    {
        id: "3F",
        imageURL:
            "https://w5online.s3-assets.com/_1200x630_crop_center-center_82_none/Web-Header-1920x1080.jpg?mtime=1745763582",
    },
    {
        id: "3L",
        imageURL: "https://ichef.bbci.co.uk/images/ic/480xn/p0dnw01b.jpg.webp",
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
                        ? `${valve.imageURL}`
                        : "https://i.cbc.ca/1.7051962.1701966936!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/gorgosaurus-and-citipes.jpg?im="
                }
                className="image"
            ></img>
            <h2>{valve ? `Valve ${valve.id}` : ""}</h2>
        </div>
    );
}
