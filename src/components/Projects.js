import '../App.css';

export default function Projects() {
    return (
        <section id="projects" class="projects sec-pad">
            <div class="main-container">
            <h2 class="heading heading-sec heading-sec__mb-bg">
                <span class="heading-sec__main">Projects</span>
                <span class="heading-sec__sub">
                Here you will find some of the personal and clients projects that I
                created with each project containing its own case study
                </span>
            </h2>

            <div class="projects__content">
                <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg" alt="Software Screenshot" class="projects__row-img"
                    loading="lazy" />
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">Image Recongnition</h3>
                    <p class="projects__row-content-desc">
                        A cool web application that identifies objects in user-uploaded images and provides descriptions, achieving 98% accuracy! 
                        Leverages AWS Rekognition's computer vision algorithm and S3 for storage.
                    </p>
                    <a class='btn btn--med btn--theme dynamicBgClr' href='/project-1' target='_blank'>GitHub</a>
                </div>
                </div>
                <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg" alt="Software Screenshot" class="projects__row-img"
                    loading="lazy" />
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">AWS CRUD App</h3>
                    <p class="projects__row-content-desc">
                        A React-based task management app, utilizing JavaScript and AWS (Lambda, API Gateway, DynamoDB, CloudFormation) 
                        for users to effectively manage their daily to-do lists.
                    </p>
                    <a class='btn btn--med btn--theme dynamicBgClr' href='/project-2' target='_blank'>GitHub</a>
                </div>
                </div>
                <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="https://d33wubrfki0l68.cloudfront.net/61fc288f39a306e3130c72643480ce015dec48ae/e3272/assets/jpeg/boreal-coffee-clone.jpeg" alt="Software Screenshot" class="projects__row-img"
                    loading="lazy" />
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">Chess</h3>
                    <p class="projects__row-content-desc">
                        Programmed a chess game with a responsive graphical user interface using Java and Java Swing. 
                        Incorporated a relational database to store the players moves and game state using MySQL and JDBC driver.
                    </p>
                    <a class='btn btn--med btn--theme dynamicBgClr' href='/project-3' target='_blank'>GitHub</a>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
};
