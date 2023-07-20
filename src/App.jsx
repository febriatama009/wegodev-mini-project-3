import { useState, useEffect } from "react";
import {
  Container,
  Loading,
  Error,
  Navbar,
  NewsCard,
  NewsList,
} from "./components/index";
import { getNews } from "./services/getNews";

function App() {
  //invoke state
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //invoke api
  useEffect(() => {
    setLoading(true);
    const fetchTechNews = async () => {
      const res = await getNews({
        searchQuery: "microsoft",
      });
      if (!res) {
        setLoading(false);
        setError(true);
      }
      setLoading(false);
      setArticles(res.articles);
    };
    fetchTechNews();
  }, []);

  return (
    <div className="overflow-y-auto h-screen bg-slate-100 flex flex-col items-center">
      <Navbar />
      <Container>
        {loading && <Loading />}
        {error && <Error />}
        {!loading && articles.length > 0 && <NewsList articles={articles} />}
      </Container>
    </div>
  );
}

export default App;
