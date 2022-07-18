import Papa from "papaparse";
const CsvLoad = () => {
  const handleLoad = (e) => {
    console.log(e);

    Papa.parse(e.target.files[0], {
      header: true,
      complete: function (results) {
        console.log("Finished:", results.data);
      },
    });
  };
  return (
    <>
      <input type="file" id="files" multiple onChange={handleLoad} />
    </>
  );
};

export default CsvLoad;
