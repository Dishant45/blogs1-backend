// id: req.body.id,
//     author: req.body.author,
//     title: req.body.title,
//     content: req.body.content,
//     links: req.body.links,
//     imageUrl: req.body.imageUrl,
//   });
class BlogClas {
  constructor(id, author, title, content, imageUrl) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.content = content;
    this.imageUrl = imageUrl;
  }
}
const blogclass = new BlogClas();
module.exports = { blogclass };
