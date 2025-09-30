import HeaderPage from "./Header";



function MainLayout() {
    return (
        <div>
            <div className="flex flex-col -z-20">

                <HeaderPage />
                <div className="flex-1">


                </div>

            </div>

        </div>
    );
}

export default MainLayout;