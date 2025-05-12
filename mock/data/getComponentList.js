const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = function getComponentList() {
  return [
    {
      fe_id: "c0", // 由于左右侧组件的id要完全一致，这里的fe_id要固定，因为getComponentList执行了两次
      type: "questionInfo",
      title: "问卷信息",
      isHidden: false,
      isLocked: false,
      props: { title: "问卷标题", desc: "问卷描述" },
    },
    {
      fe_id: "c1", // 由于左右侧组件的id要完全一致，这里的fe_id要固定，因为getComponentList执行了两次
      type: "questionTitle",
      title: "标题",
      isHidden: false,
      isLocked: false,
      props: { text: "个人信息调研", level: 1, isCenter: false },
    },
    {
      fe_id: "c2",
      type: "questionInput",
      title: "输入框1",
      isHidden: false,
      isLocked: false,
      props: { title: "你的姓名", placeholder: "请输入姓名..." },
    },
    {
      fe_id: "c3",
      type: "questionInput",
      title: "输入框2",
      isHidden: false,
      isLocked: false,
      props: { title: "你的电话", placeholder: "请输入电话..." },
    },
    // TextArea
    {
      fe_id: "c4",
      type: "questionTextArea",
      title: "多行输入",
      isHidden: false,
      isLocked: false,
      props: { title: "你的爱好", placeholder: "请输入..." },
    },
    // Paragraph
    {
      fe_id: "c5",
      type: "questionParagraph",
      title: "段落",
      isHidden: false,
      isLocked: false,
      props: { text: "一行段落1\n一行段落2", placeholder: "请输入..." },
    },
    // Radio
    {
      fe_id: "c6",
      type: "questionRadio",
      title: "单选",
      isHidden: false,
      isLocked: false,
      props: {
        title: "单选标题",
        isVertical: false,
        options: [
          {
            value: "item1",
            text: "选项1",
          },
          {
            value: "item2",
            text: "选项2",
          },
          {
            value: "item3",
            text: "选项3",
          },
        ],
        value: "",
      },
    },
    // 多选
    {
      fe_id: "c7",
      type: "questionCheckbox",
      title: "多选",
      isHidden: false,
      isLocked: false,
      props: {
        title: "多选标题",
        isVertical: false,
        list: [
          {
            value: "item1",
            text: "选项1",
            checked: false,
          },
          {
            value: "item2",
            text: "选项2",
            checked: false,
          },
          {
            value: "item3",
            text: "选项3",
            checked: true,
          },
        ],
      },
    },
  ];
};
