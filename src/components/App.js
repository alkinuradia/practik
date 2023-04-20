import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  // таким способом рендерим, порядок ренедера не имеет значения
  return (
    // все, что находится между открывающим и закрывающим js тэгом-компонентом - это его дети, т.е. RecipeList, GlobalStyle. Для того, чтобы это все отрендерить, необходимо указать, место, где вы будете его рендерить, т.е. в Layout.js
    <Layout>
      <RecipeList items={recipes} />
      <GlobalStyle/>   
    </Layout>
  );
};
