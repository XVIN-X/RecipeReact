import Customimage from "./Customimage";

function About(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_10.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_11.jpg",
        "/img/gallery/img_12.jpg",
        "/img/gallery/img_13.jpg",
        "/img/gallery/img_14.jpg",
        "/img/gallery/img_15.jpg",
        "/img/gallery/img_16.jpg",
        "/img/gallery/img_17.jpg",
        "/img/gallery/img_18.jpg",
    ]
    return <div className="section about">
        <div className="col typography">
            <h1 className="title">Welcome to CookBook</h1>
            <br />
            <p className="infos">Your ultimate destination for culinary inspiration! Whether you're a seasoned chef or a kitchen novice, join us on a delicious journey through a treasure trove of recipes crafted to tantalize your taste buds. Get ready to explore, cook, and savor the magic of homemade goodness with us!</p>
            <br />
            <button className="btn">Explore Now</button>
        </div>
        <div className="col gallery">
            {images.map((src,index) => (
            <Customimage key={index} imgsrc={src} pt={"85%"} />
            ))}
        </div>
    </div>
}

export default About;