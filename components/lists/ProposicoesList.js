import MUIDataTable from "mui-datatables";

const DeputadosList = ({ data, elevation }) => {

  var compiledData = []

  data.map((deputado) => {
    compiledData.push([deputado.nome, deputado.partido, deputado.uf, deputado.proposicoes])
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
      name: "Partido",
      label: "Partido",
      options: {
        filter: true,
        sort: true
      }
    }, {
      name: "Estado",
      label: "Estado",
      options: {
        filter: true,
        sort: true
      }
    }
    , {
      name: "Média Mensal",
      label: "Média Mensal",
      options: {
        filter: false,
        sort: true
      }
    }];



  const options = {
    selectableRows: 'none',
    elevation: elevation,
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
    },
  };

  return (
    <MUIDataTable
      title={"Lista Completa"}
      data={compiledData}
      columns={columns}
      options={options}
    />
  )
}

export default DeputadosList