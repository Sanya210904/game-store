import React, { useEffect, useState } from 'react';
import cls from './GameDetailsPage.module.scss';
import { Game } from '../../types/Game';
import $api from '../../api';
import StarImage from '../../assets/images/Star 2.svg';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addToCart } from '../../feature/CartFeature/store/cartSlice';

const GameDetailsPage = () => {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const dispatch = useAppDispatch();

  //@ts-ignore
  const { gameId }: { gameId: string } = useParams();
  console.log(gameId);

  useEffect(() => {
    getCurrentGame();
  }, []);

  const getCurrentGame = async () => {
    await $api.get(`games/${gameId}`).then((data) => setCurrentGame(data.data));
  };

  const handleAddToCart = (packageTitle: string, packagePrice: number) => {
    const gameToBuy = currentGame;

    if (!gameToBuy) return;

    gameToBuy.name = packageTitle;
    gameToBuy.price = packagePrice;

    dispatch(addToCart(gameToBuy));
  };

  console.log(currentGame);

  if (!currentGame) {
    return <></>;
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.topBar}>
        <div className={cls.topbarContainer}>
          <div className={cls.topbarNameBlock}>
            <img
              src={currentGame.header_image}
              className={cls.topbarIcon}
            ></img>
            <span className={cls.topbarGameTitle}>
              {currentGame.name}
              {/* Super Street Fighter® IV Arcade Edition */}
            </span>
          </div>
          <button className={cls.topbarModsButton}>Mods</button>
        </div>
      </div>

      <div className={cls.gameSummary}>
        <div className={cls.gameSummaryContainer}>
          <div className={cls.gallery}>
            {/* <img
              src="../assets/carousel_image_3.jpg"
              className={cls.galleryPreview}
            ></img> */}
            <div className={cls.galleryCarouselContainer}>
              <div className={cls.galleryCarousel}>
                {/* <img src="../assets/carousel_image_1.jpg"></img>
                <img src="../assets/carousel_image_2.jpg"></img>
                <img
                  src="../assets/carousel_image_3.jpg"
                  className={cls.selected}
                ></img>
                <img src="../assets/carousel_image_4.jpg"></img>
                <img src="../assets/carousel_image_5.jpg"></img> */}
              </div>
              <div className={cls.galleryCarouselIndicators}>
                <div></div>
                <div></div>
                <div className={cls.selected}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className={cls.gameSummaryInfo}>
            <img src={currentGame.header_image} />
            <p>{currentGame.short_description}</p>
            <div className={cls.separator}></div>

            <div className={cls.furtherDetailsContainer}>
              <div className={cls.furtherDetails}>
                <div className={cls.rating}>
                  <span className={cls.gameSummaryInfoLabel}>Rating:</span>
                  <div className={cls.rating1}>
                    <div className={cls.star}></div>
                    <div className={cls.star}></div>
                    <div className={cls.star}></div>
                    <div className={cls.star}></div>
                  </div>
                </div>
                <div className={cls.releaseDate}>
                  <span className={cls.gameSummaryInfoLabel}>
                    Release Date:
                  </span>
                  <span className={cls.julDateSpan}>
                    {currentGame.release_date}
                  </span>
                </div>
                <div className={cls.publisherInfo}>
                  <div className={cls.developer}>
                    <span className={cls.gameSummaryInfoLabel}>Developer:</span>
                    {currentGame.developers.map((item) => (
                      <span className={cls.capcom}>{item}</span>
                    ))}
                  </div>
                  <div className={cls.publisher}>
                    <span className={cls.gameSummaryInfoLabel}>Publisher:</span>
                    <span className={cls.capcom}>
                      {currentGame.publishers.map((item) => (
                        <span className={cls.capcom}>{item}</span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
              <div className={cls.tags}>
                {currentGame.genres.map((item) => (
                  <button className={cls.tag}>{item}</button>
                ))}
                <div className={cls.tagYellow}>Computer Meets Requirements</div>
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', columnGap: 4 }}
              >
                {currentGame.mac && <div className={cls.platformMac}></div>}
                {currentGame.windows && <div className={cls.platformWin}></div>}
                {currentGame.linux && <div className={cls.platformLinux}></div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cls.gameInfo}>
        <div className={cls.content}>
          <div className={cls.purchaseOptions}>
            {currentGame.packages.map((gamePackage) => (
              <div className={cls.purchaseOption}>
                <div className={cls.discountName}>
                  <span className={cls.purchaseName}>{gamePackage.title}</span>
                  <div className={cls.discount}>
                    {/* <span className={cls.discountSpecialOffer}>
                      SPECIAL OFFER! Ends in 23:04:21
                    </span> */}
                    {/* <div className={cls.discountAmount}>
                      <span className={cls.discountPercentage}>-75%</span>
                      <span className={cls.oldPrice}>$29.99</span>
                    </div> */}
                  </div>
                </div>
                <button className={cls.navbarCartButton}>
                  <div className={cls.navbarButtonContainer}>
                    {/* <img src="../assets/cart.svg" /> */}
                    <div
                      onClick={() =>
                        handleAddToCart(gamePackage.title, gamePackage.price)
                      }
                      className="flexColumn alignLeft"
                    >
                      <p>Add to Cart</p>
                      <p>
                        <span className={cls.price}>${gamePackage.price}</span>
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
          <div className={cls.separatorPink}></div>

          <div className={cls.description}>
            <span className={cls.descriptionTitle}>About the Game</span>
            <div className={cls.separatorPink}></div>
            <p>{currentGame.detailed_description}</p>
            <span className={cls.descriptionTitle}>Key features</span>
            <ul>
              <li>
                <em>New Playable Characters:</em> Four new challengers enter the
                ring: Yun, Yang, Oni and Evil Ryu.
              </li>
              <li>
                <em>Updated Character Balancing:</em> Features all new character
                balancing, further refining gameplay.
              </li>
              <li>
                <em>Updated Replay Channel:</em>
                <ul>
                  <li>
                    Replay Follower: Be able to follow up to 5 separate player
                    replays making it easier to find your favorite players’
                    latest replay.
                  </li>
                  <li>
                    My Channel Advanced: Allows players to distribute their
                    replay data to up to 50 players.
                  </li>
                  <li>
                    Elite Channel: Watch replay data from elite players who have
                    a rating of 3000PP (player points) or more.
                  </li>
                </ul>
              </li>
              <li>
                All playable SSFIV characters will be unlocked out of the box,
                including Yun & Yang, Oni, and Evil Ryu.
              </li>
            </ul>
            <span className={cls.descriptionTitle}>System Requirements</span>
            <div className={cls.separatorPink}></div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 16,
              }}
            >
              <div
                style={{ width: '45%' }}
                className={cls.systemRequirements}
                dangerouslySetInnerHTML={{
                  __html: currentGame.minimum_requirements,
                }}
              >
                {/* <table>
                <tr>
                  <th>Minimum</th>
                  <th>Recommended</th>
                </tr>
                <tr>
                  <td>
                    <em>OS:</em> Windows XP
                  </td>
                  <td>
                    <em>OS:</em> Windows Vista
                  </td>
                </tr>
                <tr>
                  <td>
                    <em>Processor:</em> Intel Pentium 4 2.0GHz
                  </td>
                  <td>
                    <em>Processor:</em> Intel Core 2 Duo 2.0GHz
                  </td>
                </tr>
                <tr>
                  <td>
                    <em>Memory:</em> 1GB
                  </td>
                  <td>
                    <em>Memory:</em> 2GB
                  </td>
                </tr>
                <tr>
                  <td>
                    <em>HDD:</em> 9GB free space
                  </td>
                  <td>
                    <em>HDD:</em> 9GB free space
                  </td>
                </tr>
                <tr>
                  <td>
                    <em>GPU:</em> NVIDIA GeForce 6600, VRAM: 256MB
                  </td>
                  <td>
                    <em>GPU:</em> NVIDIA GeForce 8600, VRAM: 512MB
                  </td>
                </tr>
                <tr>
                  <td>
                    <em>DirectX®:</em> 9.0c
                  </td>
                  <td>
                    <em>DirectX®:</em> 9.0c
                  </td>
                </tr>
                <tr>
                  <td>
                    <em>Sound:</em> DirectSound, DirectX9.0c Compatible Audio
                  </td>
                  <td>
                    <em>Sound:</em> DirectSound, DirectX9.0c Compatible Audio
                  </td>
                </tr>
              </table> */}
              </div>
              <div
                style={{ width: '45%' }}
                dangerouslySetInnerHTML={{
                  __html: currentGame.recommended_requirements,
                }}
              ></div>
            </div>

            {/* <span className={cls.descriptionFootnote}>
              ©CAPCOM U.S.A., INC. 2010, 2011 ALL RIGHTS RESERVED
            </span> */}
          </div>

          <div className={cls.userReviews}>
            <span className={cls.descriptionTitle}>User Reviews (150)</span>
            <div className={cls.separatorPink}></div>

            <div className={cls.userReview}>
              <div className={cls.user}>
                {/* <img src="../assets/Photo.png" className={cls.userImage}></img> */}
                <div className={cls.userInfo}>
                  <span className={cls.username}>user3</span>
                  <span className={cls.descriptionFootnote}>
                    Games Purchased: 500
                  </span>
                  <span className={cls.descriptionFootnote}>Reviews: 10</span>
                </div>
              </div>
              <div className={cls.review}>
                <div className={cls.reviewInfo}>
                  <div className={cls.reviewFirstRow}>
                    <div className={cls.reviewRatingContainer}>
                      <span className={cls.reviewTitle}>Recommended</span>
                      <div className={cls.rating1}>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                      </div>
                    </div>
                    <span className={cls.descriptionFootnote}>#150</span>
                  </div>
                  <div className={cls.reviewDate}>Posted: March 31, 2024</div>
                </div>
                <div className={cls.reviewText}>
                  Well what can I say... I spent some time on this game, and I'm
                  pretty sure that is one of the best fighting games of all
                  time.
                </div>
              </div>
            </div>

            <div className={cls.userReview}>
              <div className={cls.user}>
                {/* <img src="../assets/Photo.png" className={cls.userImage}></img> */}
                <div className={cls.userInfo}>
                  <span className={cls.username}>user3</span>
                  <span className={cls.descriptionFootnote}>
                    Games Purchased: 500
                  </span>
                  <span className={cls.descriptionFootnote}>Reviews: 10</span>
                </div>
              </div>
              <div className={cls.review}>
                <div className={cls.reviewInfo}>
                  <div className={cls.reviewFirstRow}>
                    <div className={cls.reviewRatingContainer}>
                      <span className={cls.reviewTitle}>Recommended</span>
                      <div className={cls.rating1}>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                      </div>
                    </div>
                    <span className={cls.descriptionFootnote}>#150</span>
                  </div>
                  <div className={cls.reviewDate}>Posted: March 31, 2024</div>
                </div>
                <div className={cls.reviewText}>
                  Well what can I say... I spent some time on this game, and I'm
                  pretty sure that is one of the best fighting games of all
                  time.
                </div>
              </div>
            </div>

            <div className={cls.userReview}>
              <div className={cls.user}>
                {/* <img src="../assets/Photo.png" className={cls.userImage}></img> */}
                <div className={cls.userInfo}>
                  <span className={cls.username}>user3</span>
                  <span className={cls.descriptionFootnote}>
                    Games Purchased: 500
                  </span>
                  <span className={cls.descriptionFootnote}>Reviews: 10</span>
                </div>
              </div>
              <div className={cls.review}>
                <div className={cls.reviewInfo}>
                  <div className={cls.reviewFirstRow}>
                    <div className={cls.reviewRatingContainer}>
                      <span className={cls.reviewTitle}>Recommended</span>
                      <div className={cls.rating1}>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                        <div className={cls.star}></div>
                      </div>
                    </div>
                    <span className={cls.descriptionFootnote}>#150</span>
                  </div>
                  <div className={cls.reviewDate}>Posted: March 31, 2024</div>
                </div>
                <div className={cls.reviewText}>
                  Well what can I say... I spent some time on this game, and I'm
                  pretty sure that is one of the best fighting games of all
                  time.
                </div>
              </div>
            </div>
            <div className={cls.viewAllContainer}>
              <button className={cls.pinkButton}>view all</button>
            </div>
          </div>
        </div>
        <div className={cls.info}>
          {/* <img src="../assets/advisory.png" /> */}
          <div className={cls.linksContainer}>
            <button className={cls.pinkButton}>Visit Website</button>
            <button className={cls.pinkButton}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameDetailsPage;
