import Navs from "./Navbar"
export default function Home() {
    return (<>
        <Navs />
        <div className="header-div">
            <div className="container">
                {/* <h1 className="text-center h-div">Share Ride</h1> */}
                <div className="col-lg-6 head-div">
                    <h2>Rethink your ride.</h2>
                    <h3>Share to save.</h3>
                </div>
            </div>
        </div>

    </>)
}