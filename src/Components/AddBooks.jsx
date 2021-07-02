import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useState } from 'react';
import { addBook } from '../Service/api';
import { useHistory } from 'react-router-dom';


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
const AddBook = () => {
    const [book, setBook] = useState(initialValues);
    const [titleDirty, setTitleDirty] = useState(false);
    const [titleError, setTitleError] = useState('Please enter title');
    const [authorDirty, setAuthorDirty] = useState(false);
    const [authorError, setAuthorError] = useState('Please enter author');
    const [categoryDirty, setCategoryDirty] = useState(false);
    const [categoryError, setCategoryError] = useState('Please enter category');
    const [isbnDirty, setIsbnDirty] = useState(false);
    const [isbnError, setIsbnError] = useState('Please enter ISBN');
    const { title, author, category, isbn } = book;
    const classes = useStyle();
    const history = useHistory();

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'title': setTitleDirty(true)
                break
            case 'author': setAuthorDirty(true)
                break
            case 'category': setCategoryDirty(true)
                break
            case 'isbn': setIsbnDirty(true)
                break
        }
    }

    const onValueChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const addBookDetails = async () => {
        await addBook(book);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add book</Typography>
            <FormControl>
                <InputLabel>Title</InputLabel>
                {(titleDirty && titleError) && <div style={{ color: 'red' }}>{titleError}</div>}
                <Input onBlur={e => blurHandler(e)} onChange={(e) => onValueChange(e)} name='title' value={title} />
            </FormControl>
            <FormControl>
                <InputLabel>Author</InputLabel>
                {(authorDirty && authorError) && <div style={{ color: 'red' }}>{authorError}</div>}
                <Input onBlur={e => blurHandler(e)} onChange={(e) => onValueChange(e)} name='author' value={author} />
            </FormControl>
            <FormControl>
                <InputLabel>Category</InputLabel>
                {(categoryDirty && categoryError) && <div style={{ color: 'red' }}>{categoryError}</div>}
                <Input onBlur={e => blurHandler(e)} onChange={(e) => onValueChange(e)} name='category' value={category} />
            </FormControl>
            <FormControl>
                <InputLabel>ISBN</InputLabel>
                {(isbnDirty && isbnError) && <div style={{ color: 'red' }}>{isbnError}</div>}
                <Input onBlur={e => blurHandler(e)} onChange={(e) => onValueChange(e)} name='isbn' value={isbn} />
            </FormControl>
            <Button variant="contained" onClick={() => addBookDetails()} color="primary"> Add book</Button>
        </FormGroup >
    )
}

export default AddBook;