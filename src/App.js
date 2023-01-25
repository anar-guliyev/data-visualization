import React from "react";
import { Table } from "./components/Table";
import { getData } from "./service";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    data?.length === 0 &&
      getData(data => {
        let newData = [];
        [...Array(101)].forEach(i => (newData = newData.concat(data)));
        setData(newData);
        setLoading(false);
      });

    // eslint-disable-next-line
  }, []);

  const columns = [
    {
      className: "text-center",
      key: "name",
      name: "Name",
    },
    {
      className: "text-center",
      key: "country",
      name: "Country",
    },
    {
      className: "text-center",
      key: "domains",
      name: "Domains",
      render: data => (
        <>
          {data?.map(item => (
            <a href={item}>{item}</a>
          ))}
        </>
      ),
    },
    {
      className: "text-center",
      key: "alpha_two_code",
      name: "Alpha Code",
    },
    {
      className: "text-center",
      key: "web_pages",
      name: "Web Pages",
      render: data => (
        <div className="d-flex">
          {data?.map(item => (
            <a href={item}>{item}</a>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <Table loading={loading} data={data} columns={columns} />
    </div>
  );
}

export default App;
