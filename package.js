import { PROMPT } from "../src/utils/interactive.js"
const getContent = (params) => {
  return  `
  {
  "name": "${params[PROMPT.PROJECT_NAME]}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
  `
}

const getExt = () => {
  return "json";
};

export {getContent, getExt}