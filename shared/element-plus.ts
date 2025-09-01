// shared/element-plus.ts
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// Цей файл містить налаштування для Element Plus, які можна буде використовувати в проєктах
export const setupElementPlus = (app: any) => {
  app.use(ElementPlus);
};