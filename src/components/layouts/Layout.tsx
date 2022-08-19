import React from 'react';

export function Header ({showHeaderContent: boolean = true}) {
    return (
        <div>
            {/*Add meta tags and probably use Helmet*/}
            <head>
                <title> SDK (Stale Deployment Kit) </title>
            </head>
        </div>
    )

}