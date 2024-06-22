import React from 'react'

const Documentation = () => {
    const command1 = 'mkdir src src/assets src/assets/scss';
    const command2 = 'touch src/main.jsx src/assets/scss/styles.scss vite.config.js';
    const viteConfig = `
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import path from 'path';
    
    export default defineConfig({
      plugins: [react()],
    
      resolve: {
        alias: {
          '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
          '@redux': path.resolve(__dirname, 'redux'),
        },
      },
    });
    `;
    const indexConfig = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="Responsive Bootstrap 5 admin dashboard template & web App ui kit.">
        <meta name="keyword" content="bootstrap admin template">
    
        <!--[ Favicon]-->
        <link rel="icon" type="image/x-icon" href="/src/assets/images/favicon.ico">
        <link rel="icon" type="image/png" sizes="16x16" href="/src/assets/images/favicon-16x16.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/src/assets/images/favicon-32x32.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/src/assets/images/apple-touch-icon.png">
    
        <title>: BVite : Admin Dashboard Template</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
        <script src="https://unpkg.com/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
    `;
    const viteScript = `
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
      },
      `;
    const bootstrapImport = `// Import all of Bootstrap's CSS
@import "~bootstrap/scss/bootstrap";
`;
    const customCssImport = `// Import our custom CSS
import '../src/assets/scss/styles.scss';
`;
    const themeCode = `//Theme color variable
[data-bvite="theme-ValenciaRed"] {

    --primary-color: 		#D63B38;
    --accent-color: 		#8467cb;

    --primary-rgb: 			214, 59, 56;
    --accent-rgb: 			132, 103, 203;

    --theme-color1:	 		#da3164;
    --theme-color2: 		#ce3c8d;
    --theme-color3: 		#b152b1;
    --theme-color4: 		#8467cb;
    --theme-color5: 		#9aa9e0;
    --theme-color6: 		#314674;

    --primary-gradient: linear-gradient(-45deg, var(--primary-color), var(--secondary-color));
}
[data-bvite="theme-SunOrange"] {

    --primary-color: 		#F7A614;
    --accent-color: 		#006b60;

    --primary-rgb: 			247, 166, 20;
    --accent-rgb: 			0, 107, 96;

    --theme-color1:	 		#F7A614;
    --theme-color2: 		#c25450;
    --theme-color3: 		#ff8982;
    --theme-color4: 		#9e7c50;
    --theme-color5: 		#ffc0b7;
    --theme-color6: 		#2f4858;

    --primary-gradient: linear-gradient(-45deg, var(--primary-color), var(--secondary-color));
}
[data-bvite="theme-AppleGreen"] {

    --primary-color: 		#5BC43A;
    --accent-color: 		#006b5f;

    --primary-rgb: 			91, 196, 58;
    --accent-rgb: 			0, 107, 95;

    --theme-color1:	 		#00b864;
    --theme-color2: 		#0097aa;
    --theme-color3: 		#0084bd;
    --theme-color4: 		#004e72;
    --theme-color5: 		#96b0b7;
    --theme-color6: 		#2f4858;

    --primary-gradient: linear-gradient(-45deg, var(--primary-color), var(--secondary-color));
}
[data-bvite="theme-CeruleanBlue"] {

    --primary-color: 		#00B8D6;
    --accent-color: 		#00a686;

    --primary-rgb: 			0, 184, 214;
    --accent-rgb: 			0, 166, 134;

    --theme-color1:	 		#00b8d6;
    --theme-color2: 		#8966a4;
    --theme-color3: 		#bf9adb;
    --theme-color4: 		#b2a8b8;
    --theme-color5: 		#96b0b7;
    --theme-color6: 		#00a686;

    --primary-gradient: linear-gradient(-45deg, var(--primary-color), var(--secondary-color));
}
[data-bvite="theme-Mariner"] {

    --primary-color: 		#0066FE;
    --accent-color: 		#DEAD00;

    --primary-rgb: 			0, 102, 254;
    --accent-rgb: 			222, 173, 0;

    --theme-color1:	 		#2561BE;
    --theme-color2: 		#d3a518;
    --theme-color3: 		#f26a7f;
    --theme-color4: 		#002878;
    --theme-color5: 		#858fbb;
    --theme-color6: 		#5b9591;

    --primary-gradient: linear-gradient(-45deg, var(--primary-color), var(--secondary-color));
}
[data-bvite="theme-PurpleHeart"] {
    --primary-color: 	#4C3575;
    --accent-color: 	#e05170;

    --primary-rgb: 		76, 53, 117;
    --accent-rgb: 		224, 81, 112;

    --theme-color1:	 	#4C3575;
    --theme-color2: 	#354175;
    --theme-color3: 	#98427e;
    --theme-color4: 	#d55a75;
    --theme-color5: 	#fb8665;
    --theme-color6: 	#d19a8b;

    --primary-gradient: linear-gradient(145deg, var(--primary-color), var(--accent-color));

    .page-header .header-right>li > a,
    .page-header .header-right>li > div > a{
    color: var(--white-color) !important;
    }
}
[data-bvite="theme-FrenchRose"] {

    --primary-color: 		#EB5393;
    --accent-color: 		#4d74c9;

    --primary-rgb: 			235, 83, 147;
    --accent-rgb: 			77, 116, 201;

    --theme-color1:	 		#c82f75;
    --theme-color2: 		#4d74c9;
    --theme-color3: 		#5bbab5;
    --theme-color4: 		#b861c2;
    --theme-color5: 		#ddd7c6;
    --theme-color6: 		#765a76;

    --primary-gradient: linear-gradient(-45deg, var(--primary-color), var(--secondary-color));
}
`;

  return (
        <>
        <div className="px-4 py-3 page-body">
            <div className="row g-4">
                <div className="col-12">
                    <h4 id="GettingStarted">Getting Started</h4>
                    <div className="py-3">
                        <p className="lead"><strong>bvite</strong> is carefully well thought UI frame work that is built on top of Bootstrap 5, This part of the doc will help you to quickly start your project and will you a basic idea about how <strong>bvite</strong> work.</p>
                        <p className="lead">bvite is a fully responsive and premium Bootstrap 5 Admin & Dashboard Template. Whether you're creating a Web App, Dashboards, Admin Panels, Project App, Analytics Admin, CRM, or SASS-based interface then you are at the right place to buy bvite admin dashboard template.</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="border-top pt-4 mt-4"></div>
                    <h4 id="Installation">Installation</h4>
                    <h3>React<a href="https://react.dev/" target="_blank">#</a> and Bootstrap<a href="https://getbootstrap.com/" target="_blank">#</a></h3>
                    <p className="lead">The official guide for how to include and bundle React Bootstrap’s CSS and in your project using Vite.</p>
                    <h5>Setup</h5>
                    <p>We’re building a React Vite project with Bootstrap from scratch, so there are some prerequisites and up front steps before we can really get started. This guide requires you to have Node.js installed and some familiarity with the terminal.</p>
                    <ol>
                        <li>
                            <p>Create a project folder and setup npm. We’ll create the my-project folder and initialize npm with the -y argument to avoid it asking us all the interactive questions.</p>

                        </li>
                        <li>
                            <p><strong>Install NPM </strong> Unlike our Webpack guide, there’s only a single build tool dependency here. We use --save-dev to signal that this dependency is only for development use and not for production.</p>
                                <pre className='h6 language-html text-primary'><code className="language-sh" data-lang="sh">npm i </code></pre>
                        </li>
                        <li>
                            <p><strong>Npm Run Dev</strong> Project Run In Local Apply command</p>
                            <pre className='h6 language-html text-primary'><code className="language-sh" data-lang="sh">npm run dev</code></pre>
                        </li>
                        <li>
                            <p><strong>Npm Run Build</strong> Project Code Build Apply this command and upload in to server to build folder code</p>
                            <pre className='h6 language-html text-primary'><code className="language-sh" data-lang="sh">npm run build</code></pre>
                        </li>
                        <li>Now that we have all the necessary dependencies installed and setup, we can get to work creating the project files and importing Bootstrap.</li>
                    </ol>
                </div>
                <div className="col-12">
                    <h4 id="FolderStructure">Project structure</h4>
                    <p>We’ve already created the my-project folder and initialized npm. Now we’ll also create our src folder, stylesheet, and JavaScript file to round out the project structure. Run the following from my-project, or manually create the folder and file structure shown below.</p>
                    <pre className='h6 language-html text-primary'>
                        <code>{command1}</code>
                    </pre>
                    <pre className='h6 language-html text-primary'>
                        <code>{command2}</code>
                    </pre>
                    <div className="py-3">
                        <ul className="list-unstyled">
                            <li className="text-danger"><span style={{minWidth: "120px", display: "inlineBlock"}}>node_modules</span> <small className="text-muted d-none d-lg-inline-block">( NPM dependencies (by default the folder is not included) <code>npm</code> installs dependencies. )</small></li>
                            <li>src
                                <ul className="border-start">
                                    <li>assets
                                        <ul className="border-start">
                                            <li>css</li>
                                            <li>images</li>
                                            <li>scss</li>
                                        </ul>
                                    </li>
                                    <li>Common</li>
                                    <li>Layout
                                        <ul className="border-start">
                                            <li>AdminLayout</li>
                                            <li>AuthLayout</li>
                                        </ul>
                                    </li>
                                    <li className="text-danger">Partials
                                        <ul className="border-start">
                                            <li className="text-primary">Workspace</li>
                                            <li className="text-primary">Apps</li>
                                            <li className="text-primary">Plugins</li>
                                            <li className="text-primary">Pages</li>
                                            <li className="text-primary">More Components</li>
                                        </ul>
                                    </li>
                                    <li className="text-primary"><a href="../index" target="_blank">main.jsx</a></li>
                                </ul>
                            </li>
                            <li>.gitignore</li>
                            <li>package.json</li>
                            <li>vite.config.js</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <h4 id="FolderStructure">Configure Vite</h4>
                    <p className="lead">With dependencies installed and our project folder ready for us to start coding, we can now configure Vite and run our project locally.</p>
                    <ol>
                        <li>
                            <p><strong>Open <code>vite.config.js</code> in your editor.</strong> Since it’s blank, we’ll need to add some boilerplate config to it so we can start our server. This part of the config tells Vite where to look for our project’s JavaScript and how the development server should behave (pulling from the <code>src</code> folder with hot reload).</p>
                                <div className="rounded-4 " data-lang="html">
                                    <pre className='h6 language-html text-primary'><code>{viteConfig}</code></pre>
                                </div>
                        </li>
                        <li>
                            <p><strong>Next we fill in</strong> <code>src/index.html.</code> This is the HTML page Vite will load in the browser to utilize the bundled CSS and JS we’ll add to it in later steps.</p>
                                <div className="rounded-4 " data-lang="html">
                                    <pre className='h6 language-html text-primary'><code>{indexConfig}</code></pre>
                                </div>      
                            <p>We’re including a little bit of Bootstrap styling here with the <code>div className="container"</code> and <code>button</code> so that we see when Bootstrap’s CSS is loaded by Vite.</p>
                        </li>
                        <li>
                            <p><strong>Now we need an npm script to run Vite.</strong> Open <code>package.json</code> and add the <code>start</code> script shown below (you should already have the test script). We’ll use this script to start our local Vite dev server.</p>
                                <div className="rounded-4 " data-lang="html">
                                    <pre className='h6 language-html text-primary'><code>{viteScript}</code></pre>
                                </div> 
                        </li>
                        <li>
                            <p><strong>And finally, we can start Vite.</strong> From the my-project folder in your terminal, run that newly added npm script:</p>
                            <pre className='h6 language-html text-primary'><code className="language-sh" data-lang="sh">npm run dev</code></pre>
                        </li>
                    </ol>
                </div>
                <div className="col-12">
                    <h4 id="FolderStructure">Import Bootstrap</h4>
                    <ol>
                        <li>
                            <p>Import Bootstrap’s CSS. Add the following to src/scss/styles.scss to import all of Bootstrap’s source Sass</p>
                            <pre className='h6 language-html text-primary'><code className="language-sh" data-lang="sh">{bootstrapImport}</code></pre>
                        </li>
                        <li>
                            <p>Next we load the CSS and import Bootstrap’s JavaScript. Add the following to src/js/main.js to load the CSS and import all of Bootstrap’s JS. Popper will be imported automatically through Bootstrap.</p>
                            <pre className='h6 language-html text-primary'><code className="language-sh" data-lang="sh">{customCssImport}</code></pre>
                        </li>
                    </ol>
                </div>
                <div className="col-12">
                    <div className="border-top pt-4 mt-4"></div>
                    <h4 id="Configurations">Theme Configurations</h4>
                    <div className="py-3">
                        <p>Theme color scss file path: <code>bvite/src/assets/scss/global/_themes.scss</code> you can change as per your project/client requirements.</p>
                        <p>Theme light/dark version you can changes in HTML tage <code>data-bs-theme="light"</code>, <code>data-bs-theme="dark"</code></p>
                        <ul className="list-unstyled d-flex flex-wrap">
                            <li className="bg-primary p-4 flex-grow-1 text-white">
                                .bg-primary
                            </li>
                            <li className="bg-accent p-4 flex-grow-1 text-white">
                                .bg-accent
                            </li>
                        </ul>
                        <ul className="list-unstyled d-flex flex-wrap">
                            <li className="theme-color1 p-4 text-white flex-fill">
                                .theme-color1
                            </li>
                            <li className="theme-color2 p-4 text-white flex-fill">
                                .theme-color2
                            </li>
                            <li className="theme-color3 p-4 text-white flex-fill">
                                .theme-color3
                            </li>
                            <li className="theme-color4 p-4 text-white flex-fill">
                                .theme-color4
                            </li>
                            <li className="theme-color5 p-4 text-white flex-fill">
                                .theme-color5
                            </li>
                            <li className="theme-color6 p-4 text-white flex-fill">
                                .theme-color6
                            </li>
                        </ul>
                        <pre className='h6 language-html text-primary'><code>{themeCode}</code></pre>
                    </div>
                </div>
                <div className="col-12">
                    <div className="border-top pt-4 mt-4"></div>
                    <h4 id="Thankyou">Thank you!</h4>
                    <div className="py-3">
                        <p className="lead">All the important stuff –&nbsp;compiling the source, file structure, build tools, file includes –&nbsp;is documented here, but should you have any questions, always feel free to reach out to <span className="text-primary fw-bold">pixelwibes@gmail.com</span></p>
                        <p className="lead">If you really like our work, design, performance and support then <a href="https://themeforest.net/downloads"> please don't forgot to rate us</a> on Themeforest, it really motivate us to provide something better. <span className="ms-2">
                            <i className="fa fa-star text-warning me-1"></i>
                            <i className="fa fa-star text-warning me-1"></i>
                            <i className="fa fa-star text-warning me-1"></i>
                            <i className="fa fa-star text-warning me-1"></i>
                            <i className="fa fa-star text-warning me-1"></i>
                        </span>
                        </p>
                    </div>
                </div>
            </div>
		</div>
        </>
    )
}

export default Documentation