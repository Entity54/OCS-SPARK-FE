import React from 'react';
import { useTable, useFilters, useGlobalFilter, usePagination, useSortBy } from 'react-table';






const DataTable = ({ columns, data }) => {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Initial pagination settings
    },
    useFilters, // Enables filtering
    useGlobalFilter, // Enables global search
    useSortBy, // Enables sorting
    usePagination // Enables pagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = tableInstance;

  return (
    <>
      <style>{`
        .table-wrapper {
          max-height: 800px;
          overflow-y: auto;
          position: relative;
        }
        .table-responsive {
          display: block;
        }
        .table {
          width: 100%;
          margin-bottom: 1rem;
          color: #212529;
          border-collapse: separate;
        }
        .table thead th {
          position: sticky;
          top: 0;
          background: black;
          color: white;
          z-index: 12;
        }

        th {
          position: sticky;
          top: 0;
          // background: orange; /* Replace with the background color of your headers */
          z-index: 10; /* Optional: Increase if your headers are still scrolling. */
        }

      `}</style>
      <div className="table-wrapper">
        <div className="">
          <table {...getTableProps()} className="table align-middle table-hover dataTable" style={{ width: '100%' }}>
            <thead>
              {headerGroups.map(headerGroup => {
                const { key: headerGroupKey, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                return (
                  <tr key={headerGroupKey} {...restHeaderGroupProps} className="small text-muted text-uppercase">
                    {headerGroup.headers.map(column => {
                      const { key: columnKey, ...restColumnProps } = column.getHeaderProps(column.getSortByToggleProps());
                      return (
                        <th key={columnKey} {...restColumnProps}>
                          {column.render('Header')}
                          <span>
                            {' '}
                            <span style={{ opacity: column.isSorted && column.isSortedDesc ? 0.5 : 1 }}>&#x2191;</span>
                            <span style={{ opacity: column.isSorted && !column.isSortedDesc ? 0.5 : 1 }}>&#x2193;</span>
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                const { key: rowKey, ...restRowProps } = row.getRowProps();
                return (
                  <tr key={rowKey} {...restRowProps} className="row-selectable">
                    {row.cells.map(cell => {
                      const { key: cellKey, ...restCellProps } = cell.getCellProps();
                      return <td key={cellKey} {...restCellProps}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
