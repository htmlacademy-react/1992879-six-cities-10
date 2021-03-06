import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { CardType } from '../../constans';
import { Offer } from '../../types/offer-type';
import CardList from '../../components/card-list/card-list';

type MainPageProps = {
  quantity: number;
  offers: Offer[];
};

function MainPage({quantity, offers}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header isNavVisible/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{quantity} places to stay in Amsterdam</b>
              <Sorting/>
              <CardList offers={offers} type={CardType.CITIES}/>
            </section>
            <div className="cities__right-section">
              <Map selectedOffer = {offers[0]} offers = {offers} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
