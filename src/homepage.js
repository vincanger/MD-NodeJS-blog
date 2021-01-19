const config = require("./config");
const fs = require("fs");

const homepage = posts => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${config.blogDescription}" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>${config.blogName}</title>
    </head>
    <div class="container pb-5 pl-5 pr-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Vince Canger 🐪</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" >
      <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
    </svg>

      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="https://vincanger.github.io">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/vincanger">GitHub</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://twitter.com/hot_town">Twitter</a>
          </li>
          
        </ul>
      </div>
   </nav>

    <body>
        
        <div class ="container mt-3">
          <p class="mt-3"> ✎ Posts >> </p>
          <div class="card">
              ${posts.map(post => `<div class="card-title m-2">
                  <a href="./${post.path}">${
                        post.attributes.title
                        } - 
                  </a>
                  <div class="card-subtitle text-muted font-italic mt-1">
                    ${post.attributes.date} - ${post.attributes.description}
                  </div> 
                </div>`
              )
              .join("")}
          </div>
        
          <footer class="mt-3 text-right">
            <<
          </footer>
        </div>
    </body>
  </div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</html>
`;

const addHomePage = posts => {
  fs.writeFile(`${config.dev.outdir}/index.html`, homepage(posts), e => {
    if (e) throw e;
    console.log(`index.html was created successfully`);
  });
};

module.exports = addHomePage;
