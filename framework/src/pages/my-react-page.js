import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

import '../css/mypage.css'

export default function MyReactPage() {

    const [toggle, setToggle] = useState(false)

    useEffect( () => {
        console.log("object");
    })

    return (
        <Layout>
            <h1 className={ `test ${toggle ? 'active':''}` } onClick={() => setToggle( !toggle )}>My React page</h1>
            <p>This is a React page</p>
        </Layout>
    );
}