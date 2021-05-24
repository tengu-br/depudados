import MUIDataTable from "mui-datatables";

const DeputadosList = ({ data, elevation }) => {

  var compiledData = []

  data.map((deputado) => {
    compiledData.push([deputado.nome, deputado.uf])
  })

  const columns = [
    {
      name: "Nome",
      label: "Nome",
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: "Estado",
      label: "Estado",
      options: {
        filter: true,
        sort: true
      }
    }];

  const options = {
    selectableRows: 'none',
    elevation: 0,
    download: false,
    search: false,
    print: false,
    sort: false,
    filter: false,
    viewColumns: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 15, 100]
  };

  return (
    <MUIDataTable
      data={compiledData}
      columns={columns}
      options={options}
    />
  )
}

export default DeputadosList