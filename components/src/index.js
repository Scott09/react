import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Kelly" timeAgo="Today at 4:00pm" commentText="This was great!" avatarImage={faker.image.avatar()}/>
            <CommentDetail author="Scott" timeAgo="Today at 2:12am" commentText="Amazing Post." avatarImage={faker.image.avatar()}/>
            <CommentDetail author="David" timeAgo="Yesterday at 9:00pm" commentText="Great Read!" avatarImage={faker.image.avatar()}/>
        </div>
        
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);