import React, { useState } from 'react'
import FormMulti from './latihan/FormMulti';
import StickyNotes from './latihan/StickyNotes';
import Layout from './Layout'
import Widget1 from './Widget1';

export default function Dashboard() {
    const [title, setTitle] = useState("My Apps");

    return (
        <Layout title={title} >
            <div className="row">
                <div className="col-lg-4">
                    <Widget1 title={title} setTitle={setTitle} />
                </div>
                <div className="col-lg-8">
                    <FormMulti />
                </div>
                <div className="col-lg-12">
                    <StickyNotes />
                </div>
            </div>


        </Layout>
    )
}

