import React from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
const Table = () => {
    const [company, setCompany] = React.useState([])
    const getCompany = async() => {
        try {
            const response = await axios.post('https://demo1779595.mockable.io/companies', {});
            console.log(response.data.companiesList)
            setCompany(response.data.companiesList);
            console.log(company)
        } catch (error) {
            console.log(error);
        }
    }
    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Company',
            selector: (row) => row.company,
            sortable: true,
        },
        {
            name: 'Role',
            selector: (row) => row.role,
            sortable: true,
        },
        {
            name: 'Verified',
            selector: (row) => row.verified,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) => row.status,
            sortable: true,
        },
        {
            name: 'Logo',
            selector:(row)=> <img width={50} height={50} src={row.companyImageURL} />,
            sortable: true,
        }
    ]
    React.useEffect(() => {
        getCompany();
    }, []);
  return (
      <DataTable title="Company Data" columns={columns} data={company} />
  )
}

export default Table