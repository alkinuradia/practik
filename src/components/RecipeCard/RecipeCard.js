import PropTypes from 'prop-types';
import { CiStopwatch } from "react-icons/ci";
// CiStopwatch -импортируем из сайта с иконками https://react-icons.github.io/react-icons/icons?name=ci
import { AiOutlinePieChart } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { RecipeInfo, InfoBlock, BadgeList, Badge, Name } from './RecipeCard.styled';

export const RecipeCard = ({
  item: { image, name, time, servings, calories, difficulty },
}) => {
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <Name>{name}</Name>

      <RecipeInfo>
        <InfoBlock>
          <CiStopwatch size="24" />
          <span>{time} min</span>
        </InfoBlock>
        <InfoBlock>
          <AiOutlinePieChart size="24" />
          <span>{servings} servings</span>
        </InfoBlock>
        <InfoBlock>
          <BsBarChartFill size="24" />
          <span>{calories} calories</span>
        </InfoBlock>
      </RecipeInfo>

      <div>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge active={difficulty === 'easy'} type="easy">Easy</Badge>
          <Badge active={difficulty === 'medium'} type="medium">Medium</Badge>
          <Badge active={difficulty === 'hard'} type="hard">Hard</Badge>
        </BadgeList>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
