import React, { useRef, useState } from 'react'
import './sortFunction.css'
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';


export default function SortContent() {
    const [open, setOpen] = useState(false);    
    const sortByContent = ['Sort by date', 'Sort by date modified'];
    
    const sortButtonRef = useRef()
    const sortMenuRef = useRef()

    window.addEventListener('click', (e) => {
        if (e.target !== sortButtonRef.current && e.target !== sortMenuRef.current) 
        {
            setOpen(false);
        }
    });
 
    return (
    <>  
        <div className="sortButtonContainer">
            <button ref={sortMenuRef} onClick={() => setOpen(!open)} className='sortButton'>
                <FilterAltRoundedIcon />
                    Sort By
                    </button>
                {open && (
                    <div ref={sortButtonRef} className="sortOptions">
                        <a>
                            {sortByContent.map((sortByContent => (
                                <li
                                onClick={() => setOpen(false)}
                                key={sortByContent}
                                className='textOption'
                                >
                                {sortByContent}
                                </li>
                            )))
                            }
                        </a>
                    </div>
                )}
        </div>
    </>
  )
}
