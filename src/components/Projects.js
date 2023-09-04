import '../App.css';

export default function Projects() {

    const projects = [
        { name: "Image Recognition",
          description: "A cool web application that identifies objects in user-uploaded images and provides descriptions, achieving 98% accuracy! Leverages AWS Rekognition's computer vision algorithm and S3 for storage.",
          link: "GitHub",
          url: "https://github.com/TaranGilll/image-recognition-app"
        },
        { name: "AWS CRUD App",
          description: "A React-based task management app, utilizing JavaScript and AWS (Lambda, API Gateway, DynamoDB, CloudFormation) for users to effectively manage their daily to-do lists.",
          link: "GitHub",
          url: "https://github.com/TaranGilll/aws-crud-app"
        },
        { name: "Chess",
          description: "Programmed a chess game with a responsive graphical user interface using Java and Java Swing. Incorporated a relational database to store the players moves and game state using MySQL and JDBC driver.",
          link: "GitHub",
          url: "https://github.com/TaranGilll/chess-engine"
        }
    ];


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
                    {projects.map(element => 
                        <div class="projects__row">
                            <div class="projects__row-img-cont">
                                <img src="https://d33wubrfki0l68.cloudfront.net/61fc288f39a306e3130c72643480ce015dec48ae/e3272/assets/jpeg/boreal-coffee-clone.jpeg" alt="Software Screenshot" class="projects__row-img"
                                loading="lazy" />
                            </div>
                            <div class="projects__row-content">
                                <h3 class="projects__row-content-title">{element.name}</h3>
                                <p class="projects__row-content-desc">{element.description}</p>
                                <a class='btn btn--med btn--theme dynamicBgClr' href={element.url} target='_blank'>GitHub</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
};
