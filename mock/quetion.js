const Mock = require("mockjs");
const Random = Mock.Random;
const getQuestionList = require("./data/getQuestionList");
const getComponentList = require("./data/getComponentList");

module.exports = [
  {
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: '问卷描述',
          js: '',
          css: '',
          isDeleted: false,
          isPublished: true,
          componentList: getComponentList(),
        },

        // errno: 1,
        // msg: "获取问卷失败",
      };
    },
  },
  {
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { url = "", query = {} } = ctx;
      const isStar = url.indexOf("isStar=true") >= 0;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const page = parseInt(query.page);
      const pageSize = parseInt(query.pageSize);
      return {
        errno: 0,
        data: {
          list: getQuestionList({ len: pageSize, isStar, isDeleted }),
          total: 100,
        },
      };
    },
  },
  // 更新问卷
  {
    url: "/api/question/:id",
    method: "patch",
    response() {
      return {
        errno: 0,
      };
    },
  },
  {
    url: "/api/question/duplicate/:id",
    method: "post",
    response() {
      return {
        errno: 0,
        id: Random.id(),
      };
    },
  },
  {
    url: "/api/delete",
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
