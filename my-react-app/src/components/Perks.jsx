

function Perks() {
    const list = [
        "Extensive Receipe Collection",
        "Easy-to-Follow instructions",
        "Experiment with flavours",
        "Innovate your own Receipes",
        "Know Nutrition Facts",
        "Get Cooking Tips"
    ]

    return <div className="section perks">
        <div className="col img">
            <img src="/img/gallery/img_3.jpg" />
        </div>
        <div className="col typography">
            <h1 className="title">CookBook Perks</h1>
            <br />
            {list.map((item, index) =>
                <p className="benefits" key={index}>{item}</p>
            )}
        </div>
    </div>
}

export default Perks;