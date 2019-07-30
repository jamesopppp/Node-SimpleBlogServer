const getList = (author, keyword) => {
  // 返回假数据 (格式保持正确)
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1564468438360,
      author: "superman"
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1564468498545,
      author: "supergirl"
    }
  ];
};

const getDetail = id => {
  // 返回假数据
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: 1564468438360,
    author: "superman"
  };
};

const newBlog = (blogData = {}) => {
  //  blogData 是一个博客对象，包含 title content 属性
  return {
    id: 3 // 表示新建博客，插入到数据表里面的 id
  };
};

const updateBlog = (id, blogData = {}) => {
  // id 是更新博客的 id
  // blogData 是一个博客对象，包含 title content 属性

  return true;
};

const delBlog = id => {
  // id 删除的博客 id

  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
