import profilePic from './img/steven_platt.webp';

function About() {
    return (
        <div class="main">
            <div class="about_container">
                <img src={profilePic} alt="Steven Platt, PhD" class="about_photo" />
            </div>

            <div>
                <h1>Steven Platt, PhD</h1><br />

                <p>Hi, I'm Steven, but you can call me telecomsteve!</p>

                <p>With over 16 years of experience spanning telecommunications, web3, software engineering, and entrepreneurship, 
                    I offer a unique combination of technical depth and leadership capabilities. 
                    My background includes earning a PhD in Blockchain Technologies from Pompeu Fabra University, 
                    designing stress testing infrastructure for the Mina blockchain protocol at O(1) Labs, 
                    developing an MVP for a pioneering "receptionist-as-a-service" platform as a founder, 
                    leading infrastructure deployments across five continents at Twitter, and teaching university-level smart contract programming curriculum. 
                    This diverse experience has equipped me with expertise in areas such as cloud infrastructure automation, network engineering, 
                    open-source contributions, and people management. 
                    I am well-versed in technologies like Python, Go, Kubernetes, Terraform, and possess a proven ability to launch products, 
                    optimize processes, and foster collaborative engineering cultures.</p><br />
                
                <div class="about_links">
                    <a class="about_links" target="blank" href="https://www.linkedin.com/in/telecomsteve">LinkedIn</a>
                    <a class="about_links" target="blank" href="https://github.com/stevenplatt">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default About;