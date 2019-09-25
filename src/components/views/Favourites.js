import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { PlayerContext, SearchContext } from '../Context';
import tracks from '../../data/tracks.json';
import playlists from '../../data/playlists.json';
import youtube from '../../data/youtube.json';
import selectMediaById from '../../lib/search/selectMediaById';
import Video from '../miniature/Video';
import Pod from '../miniature/Pod';
import Line from '../players/Line';
import PageBanner from './Home/PageBanner';

let allMedia = [youtube, tracks, playlists].flat();

const StyledFavourites = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding: 0px 20px 80px 20px;
  height: 100vh;
  color: ${props => props.theme.colorLight};
`;
const StyledGrid = styled.div`
  position: relative;
  top: 50px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 10px;
  align-items: center;
  justify-items: center;
`;
const StyledButton = styled.button`
  width: 163px;
  height: 42px;
  margin-top: 60px;
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.colorLight};
  border-style: none;
`;

const Favourites = ({ match }) => {
  const { favourites, setNavPath, smallPlayer, setPlayerVisible } = useContext(PlayerContext);
  const { displaySearch, setDisplaySearch } = useContext(SearchContext);
  const [savedFavourites, setSavedFavourites] = useState({});

  const getFavourites = () => {
    return favourites.map(fav => {
      return selectMediaById(fav.id, allMedia);
    });
  };
  useEffect(() => {
    if (!smallPlayer) setPlayerVisible('none');
    setSavedFavourites(getFavourites);
    setNavPath(match.path);
  }, [favourites.length > savedFavourites.length]);

  if (savedFavourites.length > 0) {
    return (
      <StyledFavourites>
        <PageBanner />
        {savedFavourites.map((media, i) => {
          if (media.type === 'video') {
            return (
              <Video
                key={i}
                title={media.title}
                // description={media.description && `${media.description.substr(0, 70)}...`}
                thumbnail={media.thumbnail}
                saved={false}
                id={media.id}
              />
            );
          }
          if (media.type === 'playlist') {
            return (
              <Pod
                id={media.id}
                key={i}
                title={media.title}
                description={media.description && `${media.description.substr(0, 70)}...`}
                thumbnail={media.thumbnail}
                saved={false}
                playlistTracks={media.trackIds}
              />
            );
          }
          return <></>;
        })}
      </StyledFavourites>
    );
  }
  return (
    <StyledFavourites>
      <PageBanner margin />
      <h2>Favoriter</h2>
      <Line orange />
      <StyledGrid>
        <svg
          width="35"
          height="34"
          viewBox="0 0 35 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.2708 7.15334C33.7936 5.7544 33.0843 4.47805 32.1695 3.40361C30.3068 1.21145 27.7614 0 24.9905 0C22.9091 0 21.0066 0.713892 19.3362 2.12004C18.6733 2.67529 18.0634 3.3315 17.5066 4.08144C16.9498 3.33871 16.3333 2.6825 15.6771 2.12004C13.9934 0.713892 12.0909 0 10.0095 0C7.23864 0 4.69318 1.21145 2.83049 3.40361C1.00758 5.55249 0 8.49459 0 11.6747C0 14.9413 1.10701 17.9122 3.48674 21.0346C5.56818 23.7676 8.53788 26.515 11.9716 29.7022L12.0909 29.8104C13.2244 30.8632 14.5104 32.0602 15.8428 33.3222C16.3002 33.762 16.8902 34 17.5066 34C18.1165 34 18.7064 33.762 19.1705 33.3222C20.5095 32.053 21.8087 30.8416 23.0284 29.7094L23.0417 29.695C26.4754 26.515 29.4384 23.7676 31.5133 21.0346C33.893 17.9122 35 14.934 35 11.6747C35 10.081 34.7481 8.55228 34.2708 7.15334ZM5.07102 5.64624C6.35038 4.14634 8.10038 3.31707 10.0095 3.31707C11.3949 3.31707 12.6742 3.80021 13.8011 4.74486C14.8286 5.61018 15.5445 6.70626 15.9621 7.47063C16.2869 8.06193 16.8636 8.41527 17.4934 8.41527C18.1231 8.41527 18.6998 8.06193 19.0246 7.47063C19.4489 6.69905 20.1648 5.60297 21.1856 4.74486C22.3258 3.80021 23.5985 3.31707 24.9905 3.31707C26.8996 3.31707 28.6562 4.14634 29.929 5.64624C31.2348 7.1894 31.9508 9.32386 31.9508 11.6674C31.9508 12.9077 31.7386 14.0904 31.2812 15.273C30.8239 16.4556 30.1278 17.6526 29.1667 18.9145C27.2509 21.424 24.3741 24.092 21.0464 27.1784L21.0331 27.1928C19.9593 28.1951 18.7595 29.3056 17.5 30.4954C16.2472 29.3128 15.0473 28.1951 13.9801 27.2072L13.9669 27.1928L13.9536 27.1856C10.6259 24.0993 7.74905 21.4312 5.83333 18.9217C3.91098 16.3907 3.04924 14.1552 3.04924 11.6747C3.04924 9.33107 3.76515 7.1894 5.07102 5.64624Z"
            fill="#F1F1F1"
          />
        </svg>

        <h3>Du har inte sparat något ännu.</h3>
        <div>
          <p>Oroa dig inte, det är lätt. Klicka bara på hjärtat</p>
          <p> vid önskade spår så visas de här.</p>
        </div>
        <StyledButton onClick={() => setDisplaySearch(!displaySearch)}>
          <p>Sök video och podd</p>
        </StyledButton>
      </StyledGrid>
    </StyledFavourites>
  );
};

export default Favourites;
