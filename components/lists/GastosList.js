import MUIDataTable from "mui-datatables";

const DeputadosList = ({ data, elevation }) => {

  var compiledData = []

  data.map((deputado) => {
    compiledData.push([deputado.nome, deputado.partido, deputado.uf, deputado.gastoMedio.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })])
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
    customSort: (data, colIndex, order, meta) => {
      return data.sort((a, b) => {
        // Sort se for a string com valor numerico
        if (colIndex === 3) {
          return (parseFloat(a.data[colIndex].replace(/[^0-9-,]/g, '')) < parseFloat(b.data[colIndex].replace(/[^0-9-,]/g, '')) ? -1 : 1) * (order === 'desc' ? 1 : -1);
        } else {
          return (a.data[colIndex] < b.data[colIndex] ? -1 : 1) * (order === 'desc' ? 1 : -1);
        }
      });
    }
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