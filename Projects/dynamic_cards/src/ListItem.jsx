import React from 'react';
import Card from './card';

const ListItem = (props) => {
    const data = props.data;

    const filterSort = data
        .filter((anime) => parseFloat(anime.ratings) > 8) // Filter anime with ratings > 9.5
        .sort((a, b) => (a.name > b.name ? 1 : -1)); // Sort anime by name

    const listItems = filterSort.map((anime) => (
        <Card
            key={anime.id}
            title={anime.name}
            description={anime.description}
            rating={anime.ratings}
            img={anime.img}
        />
    ));

    return <div>{listItems}</div>;
};

export default ListItem;