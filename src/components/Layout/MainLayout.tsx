import HeaderPage from "./Header";



function MainLayout() {
    return (
        <div>
            <div className="flex flex-col min-h-screen -z-0">

                <HeaderPage />
                <div className="flex-1">


                </div>

            </div>

        </div>
    );
}

export default MainLayout;