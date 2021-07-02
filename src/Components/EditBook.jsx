import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useEffect, useState } from 'react';
import { editBook, getBooks } from '../Service/api';
import { useHistory, useParams } from 'react-router-dom';


const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    title: '',
    author: '',
    category: '',
    isbn: ''

}
const EditBook = () => {
    const [book, setBook] = useState(initialValues);
    const { title, author, category, isbn } = book;
    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(() => {
        loadBookData();
    }, []);

    const loadBookData = async () => {
        const response = await getBooks(id);
        setBook(response.data);
    }

    const onValueChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const editBookDetails = async () => {
        await editBook(id, book);
        history.push('/all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit book</Typography>
            <FormControl>
                <InputLabel>Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} />
            </FormControl>
            <FormControl>
                <InputLabel>Author</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='author' value={author} />
            </FormControl>
            <FormControl>
                <InputLabel>Category</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='category' value={category} />
            </FormControl>
            <FormControl>
                <InputLabel>ISBN</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='isbn' value={isbn} />
            </FormControl>
            <Button variant="contained" onClick={() => editBookDetails()} color="primary"> Edit book</Button>
        </FormGroup >
    )
}

export default EditBook;