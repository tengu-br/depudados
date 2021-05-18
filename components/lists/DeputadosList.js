import MUIDataTable from "mui-datatables";




const DeputadosList = () => {
  const columns = ["Name", "Company", "City", "State"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    selectableRows	: 'none',
    textLabels: {
      body: {
        noMatch: "Sem resultados compatíveis",
        toolTip: "Ordenar",
        columnHeaderTooltip: column => `Ordenar por ${column.label}`
      },
      pagination: {
        next: "Próxima página",
        previous: "Página anterior",
        rowsPerPage: "Linhas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Baixar CSV",
        print: "Imprimir",
        viewColumns: "Ver Colunas",
        filterTable: "Tabela de Filtros",
      },
      filter: {
        all: "TODOS",
        title: "FILTROS",
        reset: "RESETAR",
      },
      viewColumns: {
        title: "Mostrar Colunas",
        titleAria: "Mostrar/Esconder Colunas",
      },
    }
  };

  return (
    <MUIDataTable
      title={"Lista Completa"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

export default DeputadosList