import React from 'react'
import sublinks from '../data'
const Navbar = () => {
    return (
        <>
            <div className="sidebarContainer">
                <div className='logoContainer'>
                    <h2>Zendenta</h2>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div className='listContainer'>
                    <ul>
                        {
                            sublinks.map((item, index) => {
                                const { path, icon, page } = item
                                return (
                                    <li key={index}>{icon} {page}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar