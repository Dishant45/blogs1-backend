const fs = require("fs");
const path = require("path");
const blogs = path.join(__dirname, "..", "data", "blogdata.json");
const blogData = JSON.parse(fs.readFileSync(blogs, "utf-8"));
const CreateBlog = require("./helpermodule/blogconstructor.js");

const getAllBlogs = (req, res) => {
  let blog = blogData.find((blogs) => {
    res.status(200).json({ blogData });
  });
};
const getBlogByID = (req, res) => {
  console.log(req.params);
  let blog = blogData.find((blog) => {
    return blog.id == req.params.id;
  });
  if (blog) {
    // res.status(200).json({
    //   status: "Successful",
    //   data: "User information",
    // });
    res.status(200).json({ blog });
  } else {
    res.status(200).json({
      status: "user not found",
    });
  }
};

const createNewBLog = (req, res) => {
  let blog = new CreateBlog(
    req.body.id,
    req.body.author,
    req.body.title,
    req.body.content,
    req.body.links,
    req.body.imageUrl
  );
  const blogdata = JSON.stringify(blog);
  fs.write(blogData, "utf-8");
};

const updateBLogById = (req, res) => {
  let blog = blogData.find((blog) => {
    return blog.id == req.params.id;
    blog.author = req.body.author;
    blog.save();
    fs.write(blogData, "utf-8");
    blogData.push(blog);
  });
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogByID = getBlogByID;
module.exports.createNewBLog = createNewBLog;
module.exports.updateBLogById = updateBLogById;
