import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { SvgIcon } from '@mui/material'

const services = [
  'Parramatta',
  'Campbelltown',
  'Camden',
  'Liverpool',
  'Bankstown',
  'Alexandria',
  'Centennial Park',
  'Moore Park',
  'Marrickville',
  'Paddington',
  'Burwood',
  'Mascot',
  'Bondi Junction',
  'Rose Bay',
  'Brookvale',
  'Ingleburn',
  'Burwood',
  'Sydney CBD',
  'Balmain',
  'Ashfield',
  'Leichhardt',
  'Dulwich Hill',
  'Newtown',
  'Five Dock',
  'Homebush',
  'Canberra',
  'Newcastle',
  'Surry Hills',
  'Sydney Park',
  'Kensington',
  'Maroubra',
  'Watson Bay',
  'Marrickville',
  'Oran Park',
]

const BlackCircleIcon = () => (
  <SvgIcon>
    <circle cx="5" cy="5" r="5" fill="black" />
  </SvgIcon>
)

const ServiceTable = () => {
  const numColumns = 4
  const numRows = Math.ceil(services.length / numColumns)
  const rows = Array.from({ length: numRows }, (_, rowIndex) =>
    services.slice(rowIndex * numColumns, rowIndex * numColumns + numColumns)
  )

  return (
    <>
      <React.Fragment>
        <Table size="small" style={{ marginTop: '2rem' }}>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((service, index) => (
                  <React.Fragment key={index}>
                      <BlackCircleIcon />
                    <TableCell align="center">{service}</TableCell>
                    <TableCell align="center">
                    </TableCell>
                  </React.Fragment>
                ))}
                {row.length < numColumns && (
                  <React.Fragment>
                    {Array.from({ length: (numColumns - row.length) * 2 }).map((_, i) => (
                      <TableCell key={i} />
                    ))}
                  </React.Fragment>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    </>
  )
}

export default ServiceTable
