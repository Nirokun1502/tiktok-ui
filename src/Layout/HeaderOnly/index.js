import Header from "../components/Header";

function DefaultLayout({children}) {
    return ( 
        <div >
            <Header/>
            <div className='container'>
                
                <div className='content'></div>
                    {children}
            </div>
        </div>
     );
}

export default DefaultLayout;
