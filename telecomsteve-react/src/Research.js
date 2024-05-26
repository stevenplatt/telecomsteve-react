function Research() {
    return (
        <div className="main">
            <h1>Research Activity</h1>
            <br />
            <p>telecomsteve research focuses on artificial intelligence and peer-to-peer applications.</p>

            <br /><br />

            <div className="main-content">
                <h2 className="research_accent">Publications</h2>
                    
                <h4>"Using Transition Learning to Enhance Mobile-Controlled Handover In Decentralized Future Networks"</h4>
                <p><i>S Platt, B Demirel, M Oliver. IEEE 4th 5G World Forum (5GWF), 424-429, 2021.</i></p>
                <p>Traditionally, resource management and capacity allocation has been controlled network-side in cellular deployment. 
                    As autonomicity has been added to network design, machine learning technologies have largely followed this paradigm, benefiting from the higher compute capacity and informational context available at the network core. 
                    However, when these network services are disaggregated or decentralized, models that rely on assumed levels of network or information availability may no longer function reliably. 
                    This paper presents an inverted view of the resource management paradigm; one in which the client device executes a learning algorithm and manages its own mobility under a scenario where the networks and their corresponding data underneath are not being centrally managed.</p>
                <p><a href="https://ieeexplore.ieee.org/abstract/document/9605015" target="_blank" rel="noreferrer">Download</a></p>
                <br />

                {/* Add each publication as a separate component or directly here */}
                {/* ... */}
                
                <h3 className="research_accent">Invited Talks</h3>
                
                {/* Add each talk as a separate component or directly here */}
                {/* ... */}
            </div>
        </div>
    );
}

export default Research;