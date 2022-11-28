import {
  InfoBox,
  InfoText,
  InfoHederTu,
  InfoHederTry,
} from './InfoMovie.styled';

export const InfoMovie = ({ info }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = info;

  const baseURL = 'https://image.tmdb.org/t/p/w300';

  const getYear = () => new Date(`${release_date}`).getFullYear();
  const getScor = () => Math.round(`${vote_average}` * 10);

  return (
    <InfoBox>
      <img
        src={
          poster_path
            ? `${baseURL}${poster_path}`
            : 'Sorry, i can not found... '
        }
        alt={original_title}
        width="300"
      />
      <div>
        <InfoHederTry>
          {original_title} ({getYear()})
        </InfoHederTry>
        <InfoText>User Score : {getScor()}%</InfoText>
        <InfoHederTu>Overview </InfoHederTu>
        <InfoText>{overview}</InfoText>
        <InfoHederTu>Genres</InfoHederTu>
        <InfoText>{genres.map(genre => genre.name).join(', ')}</InfoText>
      </div>
    </InfoBox>
  );
};
