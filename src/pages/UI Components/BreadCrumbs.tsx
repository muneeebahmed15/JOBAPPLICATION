import React from 'react';
import { MENU_ITEMS } from '../../constants/menu';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ path }: { path: string }) => {
    const pathname = path.includes("hiring-management") ? "hiring-management" : path.includes("staff-management") ? "staff-management" : "";

    return (
        <>
            <ul className='d-md-flex d-none list-unstyled mt-2 rounded-3 p-2' style={{ backgroundColor : "#c4c5c9" }}>
                {MENU_ITEMS.map(y => {
                    if (y.key === pathname) {
                        return y.children?.map(x => (
                            <li className='rounded-3' style={{ padding: "5px 10px", backgroundColor: path && path === x?.url ? "#f3f4f7" : "" }} key={x.key}>
                                <Link to={x?.url ?? '/'} style={{color: path && path === x?.url ? "#5369f8" : "black" }}>{x.label}</Link>
                            </li>
                        ));
                    }
                    return null;
                })}
            </ul>
        </>
    );
    
};

export default BreadCrumbs;
