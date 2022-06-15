import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const TableData = (props) => {
    const handleDelete=(id) =>{
        props.handleDelete(id);
        // console.log("this is data" + id)

    }
    return (
        <>
            <TableRow>
                <TableCell><Avatar src={props.av} /></TableCell>
                <TableCell> {props.name}</TableCell>
                <TableCell>{props.number}</TableCell>
                <TableCell>{props.email}</TableCell>
                <TableCell><Button size='small' color='error' variant='outlined' 
                onClick={ ()=> handleDelete(props.id)}>
                    <DeleteOutlineIcon />
                    </Button>
                    </TableCell>
            </TableRow>
        </>
    )
}

const Contact = (props) => {
    
    return (
        <TableContainer maxWidth sx={{ maxHeight: 620 }}>


            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (props.searchData.length > 0)
                        props.searchData.map((value, key) => <TableData key={key} value={value} handleDelete ={(id) => handleDelete(id)} />) :
                        props.contactData.map((value, key) => <TableData key={key} value={value} handleDelete ={(id) => handleDelete(id)} />) 
                        
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contact;