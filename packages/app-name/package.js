import { PROMPT } from "../../../src/utils/interactive.js"

const getContent = (params) => {
  return `
  {
  "name": "${params[PROMPT.APP_NAME]}",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "main": "src/main.ts",
  "scripts": {
    "dev": "ddd-cli dev",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.2",
    "vue": "^3.4.29",
    "vue-router": "^4.4.0",
    "ddd-web": "workspace:*",
    "ddd-cli": "workspace:*"
  },
  "devDependencies": {
    "@types/node": "^20.14.9",
    "@vitejs/plugin-vue": "^5.0.5",
    "typescript": "^5.2.2",
    "vite": "^5.3.2",
    "vue-tsc": "^2.0.21"
  }
}
  `
}


const getExt = () => {
  return "json";
};

export {getContent, getExt}