import React, {useState} from 'react';
import data from './data';
import Container from "@material-ui/core/Container";
import NoteCard from './notesCard'
import Masonry from 'react-masonry-css';

const  Notes = () => {
	const [notes,setNotes] = useState(data);
	console.log(notes)

	const handleDelete = (id) => {
		const newData = notes.filter(item => item.id !== id);
		console.log(newData);
		setNotes(newData);
	}

	const breakpoints = {
		default: 3,
		1100: 2,
		700: 1
	}


	return (
		<Container>
			<Masonry breakpointCols={breakpoints}
        		className="my-masonry-grid"
        		columnClassName="my-masonry-grid_column">
				{notes.map((note) => {
					return (
						<div key={note.id}>
							<NoteCard note={note} handleDelete={handleDelete}/>
						</div>
					)
				})}
			</Masonry>
			
		</Container>
	)	
}

export default Notes;