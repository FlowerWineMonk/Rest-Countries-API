function Countries() {
  (async () => {
    try {
      const fetchData = await fetch(`https://restcountries.com/v3.1/all`);

      if (!fetchData.ok) {
        throw new Error(`Failed to fetch the request! ${fetchData.status}`);
      }

      const response = await fetchData.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  })();

  return (
    <>
    </>
  );
}

export default Countries