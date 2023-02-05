const CardList = () => {
    const [listOfReviews, setListOfReviews] = useState([]);
  
    useEffect(() => {
      setListOfReviews(store.getState().listOfReviews);
    }, [store.getState().listOfReviews]);
  
    return (
      <>
        {listOfReviews.map((review) => (
          <Card key={review.id} review={review} />
        ))}
      </>
    );
  };