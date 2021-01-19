const fs = require("fs");

const postMethods = require("./posts");
const config = require("./config");
const addHomePage = require("./homepage");

const posts = fs
  .readdirSync(config.dev.postsdir)
  .map(post => post.slice(0, -3))
  .sort(function(a, b) {
    if (b === a) return 0;
    return b > a ? 1 : -1;
  })
  .map(post => postMethods.createPost(post)
);

// making sure the posts display in descending order
console.log(fs
  .readdirSync(config.dev.postsdir)
  .map(post => post.slice(0, -3))
  .sort(function(a, b) {
  if (b === a) return 0;
  return b > a ? 1 : -1;
  })  
);


if (!fs.existsSync(config.dev.outdir)) fs.mkdirSync(config.dev.outdir);

postMethods.createPosts(posts);
addHomePage(posts);
