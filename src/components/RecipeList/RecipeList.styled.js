import styled from 'styled-components';

export const List = styled.ul `
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
// 1) используем js функцию для использования темы. возвращаем цвет, через пропс (детей) из index.js, где мы дали названия цветам

// export const List = styled.ul`
//    background-color: ${props => {
//         console.log(props);
//         return props.theme.colors.accent;
//       }};
// `;      

// 2) или можно без ретерна

// export const List = styled.ul`
//   background-color: ${props => props.theme.colors.accent};
// `;  