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

                <h4>"CoNTe: A Core Network Temporal Blockchain for 5G"</h4>
                <p><i>S Platt, L Sanabria-Russo, M Oliver. Sensors 2020, 20, 5281.</i></p>
                <p>Virtual Network Functions allow the effective separation between hardware and network functionality, a strong paradigm shift from previously tightly integrated monolithic, vendor, and technology dependent deployments. 
                    In this virtualized paradigm, all aspects of network operations can be made to deploy on demand, dynamically scale, as well as be shared and interworked in ways that mirror behaviors of general cloud computing. 
                    To date, although seeing rising demand, distributed ledger technology remains largely incompatible in such elastic deployments, by its nature as functioning as an immutable record store. 
                    This work focuses on the structural incompatibility of current blockchain designs and proposes a novel, temporal blockchain design built atop federated byzantine agreement, which has the ability to dynamically scale and be packaged as a Virtual Network Function (VNF) for the 5G Core.</p>
                <p><a href="https://www.mdpi.com/1424-8220/20/18/5281/htm" target="_blank" rel="noreferrer">Download</a></p>
                <br /><br />

                <h4>"Towards Blockchain for Decentralized Self-Organizing Wireless Networks"</h4>
                <p><i>S Platt, M Oliver. IEEE Globecom Workshops (GC Wkshps), 1-5, 2019.</i></p>
                <p>Distributed consensus mechanisms have been widely researched and made popular with a number of blockchain-based token applications, such as Bitcoin, and Ethereum. 
                    Although these general-purpose platforms have matured for scale and security, they are designed for human incentive and continue to require currency reward and contract functions that are not requisite in machine communications.
                    Redes Chain is a custom designed blockchain, built to support fully decentralized self-organization in wireless networks - without a cryptocurrency or contract dependency.</p>
                <p><a href="https://arxiv.org/pdf/2004.12438.pdf" target="_blank" rel="noreferrer">Download</a></p>
                <br />
    
            <h4>"A Distributed Ledger-Enabled Interworking Model for the Wireless Air Interface"</h4>
                <p><i>S Platt, M Oliver. IEEE 5th World Forum on Internet of Things (WF-IoT), 402-407, 2019.</i></p>
                <p>While direct allocation of spectrum and evolved medium access protocols provide a base for ubiquitous wireless connectivity, the existing TCP/IP and OSI models were designed for wired networks and do not address open interconnection of air interfaces. 
                    Without an interconnection model for the air interface, existing network designs continue to tie wireless medium access to that of the backhaul provider for ownership of access and identity trust, resulting in limitations on functionality and coverage. 
                    In this paper, we propose a novel solution to access ownership and identity trust by extending the TCP network standard, under a new model we propose, named TCP-Air which integrates distributed ledger technologies directly at the air interface. 
                    Further, we present two use cases of the TCP-Air model, demonstrating applications not feasible under existing permissioned-access network designs.</p>
                <p><a href="https://arxiv.org/pdf/2004.12435.pdf" target="_blank" rel="noreferrer">Download</a></p>
                <br />
    
            <h4>"Application Layer Modeling in Vehicle Networks"</h4>
                <p><i>S Platt. M.Sc. Thesis, Barcelona School of Telecommunications and Engineering, Polytechnic University of Catalonia, Barcelona, Spain, 2018.</i></p>
                <p>In recent years, network function virtualization and a software defined focus has allowed networks to become flexible and extensible in ways not possible previously. 
                    Although network modeling tools such as NS-2, NS-3, and OMNet++ have been extended with modules and code to support the absolute latest wireless protocols and medium access standards - there has been a growing gap in simulation of the layers above medium access which recent 5G use cases are designed to support. 
                    In this thesis, I measure the qualitative performance of application layer modeling in vehicle networks, taking the cooperative maneuver use case presented under "Project 5GCar" to design and simulate an autonomous merge algorithm using the VSimRTI network simulation stack.</p>
                <p><a href="https://arxiv.org/pdf/2101.10816.pdf" target="_blank" rel="noreferrer">Download</a></p>
                <br /><br />
                
            <h3 className="research_accent">Invited Talks</h3>
                
                <p> "Blockchain for Decentralized 5G Public Utility Overlay Networks", 
                    <i>3rd Workshop on 5G Technologies for First Responder and Tactical Networks</i>, New York, US, December 2020.</p>
    
                <p>"Towards Blockchain for Decentralized Self-Organizing Wireless Networks", 
                    <i>IEEE Globecom, Workshop on Blockchain in Telecommunications</i>, Hawaii, US, December 2019.</p>
                
                <p>"A Distributed Ledger-Enabled Interworking Model for the Wireless Air Interface", 
                    <i>IEEE 5th World Forum on the Internet of Things</i>, Limerick, Ireland, April 2019.</p>
                
                <p>"Enterprise SIP Trunking, Lessons Learned", 
                    <i>Enterprise Connect Conference</i>, Orlando, US, March 2017.</p>
                
                <p>"Enterprise SIP Trunking", 
                    <i>Twilio Signal Conference</i>, San Francisco, US, May 2016.</p>
            </div>
        </div>
    );
}

export default Research;