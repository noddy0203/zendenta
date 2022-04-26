import React from 'react'

const Notes = () => {
    return (
        <>
            <div className="upper_right">
                <div className="notes_seeAll">
                    <p>Notes</p>
                    <p className='see_all'>See All</p>
                </div>
                <div className='notes_section'>
                  
                        <p className='noteli'>Lorem ipsum dolor sit amet.</p>
                        <p className='noteli'>Lorem ipsum dolor sit amet.</p>
                        <p className='noteli'>Lorem ipsum dolor sit.</p>
                   
                </div>
                <button className='view_all'>View All</button>
            </div>
            <div className="lower_right">
                <h4 className='other_h4'>Other Things -</h4>
                <p className='other_para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quis ut,
                    reiciendis sit suscipit molestias totam, illum aliquid porro facere pariatur
                    excepturi officia velit quod quidem ipsam recusandae quas voluptatem.
                    Iste iure fugit quibusdam accusantium enim amet doloribus, aut molestiae!</p>
            </div>
        </>
    )
}

export default Notes