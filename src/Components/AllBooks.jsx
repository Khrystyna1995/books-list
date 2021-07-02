import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../Service/api";
import { Link } from 'react-router-dom';


const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#bae4f847',
            fontSize: 20,
            fontWeight: "bold"
        }

    },
    row: {
        '& > *': {
            fontSize: 20
        }
    }

})

const AllBooks = () => {

    const [books, setBooks] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllBooks();
    }, [])

    const getAllBooks = async () => {
        const response = await getBooks();
        console.log(response.data);
        setBooks(response.data);
    }

    const deleteBookData = async (id) => {
        await deleteBook(id);
        getAllBooks();
    }
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>#</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>ISBN</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    books.map(book => (
                        <TableRow className={classes.row}>
                            <TableCell>{book.id}</TableCell>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.category}</TableCell>
                            <TableCell>{book.isbn}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{ marginRight: 10 }} component={Link} to={`/edit/${book.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteBookData(book.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllBooks;