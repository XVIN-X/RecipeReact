function Customimage({ imgsrc, pt }) {
    return <div className="custom-image" style={{ paddingTop: pt }}>
        <img src={imgsrc} />
    </div>
}

export default Customimage;