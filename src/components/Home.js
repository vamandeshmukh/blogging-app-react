import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
        <>
    <div>
        <div
            style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/pw/AP1GczN7CSSq5g39nEXh7Xqu0JGLyXI1TFIXXlZhz0dONt7oSNiaw1gKL9QsNgD0oxhlmaFCn2uiTFNzodzNUkNUK5UxVnP7P_7P8Lt5NWeP9CwzG_34ITeGwunt-xOpdFCPGqtQ-fgTWPBrZPzO30HH3o5_=w1517-h998-s-no-gm?authuser=0")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '91vh',
                overflow: 'hidden',
            }}
        >
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-5 text-center">
                    <div className="container">
                        <div>
                            <p className="display-1 text-light">IBM React App</p>
                            {/* <Link className="lead text-white" style={{ textDecoration: 'none' }} to='/blog-list'>Enter...</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
{/* 
            <div>
                <div
                    style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/pw/AP1GczN7CSSq5g39nEXh7Xqu0JGLyXI1TFIXXlZhz0dONt7oSNiaw1gKL9QsNgD0oxhlmaFCn2uiTFNzodzNUkNUK5UxVnP7P_7P8Lt5NWeP9CwzG_34ITeGwunt-xOpdFCPGqtQ-fgTWPBrZPzO30HH3o5_=w1517-h998-s-no-gm?authuser=0")`,
                        backgroundRepeat: `no-repeat`,
                        // backgroundSize: 'contain',
                        backgroundPositionY: 'center',
                        backgroundPositionX: 'center'
                    }}
                >
                    <div className="d-flex flex-row-reverse">
                        <div className="col-5">
                            <div style={{ minHeight: "100vh" }} className="container">
                                <div>
                                    <p className="display-4 text-primary pt-5">IBM React App</p>
                                    <Link className="lead text-white" style={{ textDecoration: 'none' }} to='/blog-list'>Enter...</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div > */}
        </>

    );
}


export default Home;

