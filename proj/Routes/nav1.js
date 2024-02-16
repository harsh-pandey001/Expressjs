const express = require("express");
const path = require("path");
const router = express.Router();

const blogs = require("../data/blogs");

router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../templates/index.html"));
res.render('home');
});


router.get("/blog", (req, res) => {
  res.render('blogHome',{
    blogs : blogs
  });
});


router.get("/blogs", (req, res) => {
    
//   blogs.forEach(e => {
//       console.log(e.title);
//   });
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});



//get Blogs Endpoint
router.get("/blogpost/:slug", (req, res) => {
   
  myBlog = blogs.filter((e) => {
   return e.slug == req.params.slug;

  });
 res.render("blogPage",{
  title : myBlog[0].title,
  content : myBlog[0].content
 })
  // res.sendFile(path.join(__dirname, "../templates/blogPage.html"));
});

module.exports = router;
