import { createGlobalStyle } from "styled-components";
// т.к. мы удалили нормалайз из css, то мы его устанавливаем через npm install, а потом добавляем сюда, через импорт
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
}

p {
  margin: 0;
}
ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;

// Добавляем Глобальные стили, при этом удалям index.css, и удаляем импорт index.css из index.js, так как мы использем теперь Глобальные стили
//  рендерим в App.js