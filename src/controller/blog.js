const { exec, escape } = require("../db/mysql");

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    author = escape(author);
    sql += `and author=${author} `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createtime desc`;

  // 返回 promise
  return exec(sql);
};

const getDetail = id => {
  id = escape(id);
  const sql = `select * from blogs where id=${id}`;
  return exec(sql).then(rows => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  //  blogData 是一个博客对象，包含 title content author 属性
  let { title, content, author } = blogData;
  const createTime = Date.now();

  title = escape(title);
  content = escape(content);
  author = escape(author);

  const sql = `
  insert into blogs (title,content,createtime,author)
   values (${title},${content},${createTime},${author})`;

  return exec(sql).then(insertData => {
    // console.log("insertData is ", insertData);
    return {
      id: insertData.insertId
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  // id 是更新博客的 id
  // blogData 是一个博客对象，包含 title content 属性

  let { title, content } = blogData;

  id = escape(id);
  title = escape(title);
  // content = escape(content);

  const sql = `update blogs set title=${title},content=${content} where id=${id};`;

  return exec(sql).then(updateData => {
    // console.log("updateData is ", updateData);
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

const delBlog = (id, author) => {
  // id 删除的博客 id
  id = escape(id);
  author = escape(author);
  
  const sql = `delete from blogs where id=${id} and author=${author};`;
  return exec(sql).then(delData => {
    // console.log("delData is ", delData);
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
