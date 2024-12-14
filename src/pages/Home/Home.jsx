import Banner from "../../components/home/Banner";
import FeatureProducts from "../../components/home/FeatureProducts";
import UserReview from "../../components/home/UserReview";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto">
                <div className="my-10">
                    <h1 className="text-2xl font-bold mb-6">Featured Products /&gt; </h1>
                    <FeatureProducts />
                </div>
                <div className="my-10">
                    <h1 className="text-2xl font-bold mb-6">FAQ /&gt; </h1>
                    <UserReview />
                </div>
            </div>
        </div>
    )
}

export default Home;