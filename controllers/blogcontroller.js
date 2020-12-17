const fs = require("fs");
const path = require("path");
const blogs = path.join(__dirname, "..", "data", "blogdata.json");
const blogData = JSON.parse(fs.readFileSync(blogs, "utf-8"));

const getAllBlogs = (req, res) => {
  let blog = blogData.find((blogs) => {
    return Object.keys(req.query).every((property) => {
      return blog[property] == req.query[property];
    });
    // res.status(200).json({
    //   message:"Successful",
    //   blog:blog,
    // });
  });
  res.status(200).json(blogData);
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
  console.log("data to be ADDED", req.body);

  let data1 = req.body;
  blogData.push(data1);
  fs.writeFile(
    path.join(__dirname, "..", "data", "blogdata.json"),
    JSON.stringify(blogData, null, 2),
    (err, data) => {
      if (err) {
        console.log("file not written");
        console.log(err);
      } else {
        console.log(data + "wrriten in file");
        res.send("new blog created and added");
      }
    }
  );
};

// const updateBLogById = (req, res) => {
//   let blog = blogData.find((blog) => {
//     return blog.id == req.params.updateblogid;
//     blog.author = req.body.author;
//     blog.save();
//     fs.write(
//       path.join(__dirname, "..", "data", "blogdata.json"),
//       blogData,
//       (err, data) => {
//         if (err) {
//           console.log("data not written");
//         } else {
//           console.log("data is written");
//         }
//       }
//     );
//     blogData.push(blog);
//   });
// };
// const deleteById = (req, res) => {
//   const blog = blogData.find(blog)=>{
//     return blog.id=
//   }
// };

module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogByID = getBlogByID;
module.exports.createNewBLog = createNewBLog;
// module.exports.updateBLogById = updateBLogById;
