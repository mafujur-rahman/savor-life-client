import PropTypes from 'prop-types';

const Comment = ({data}) => {
    const {userName, userImg, comment} = data;
    return (
        <div className="card card-side mt-4 ">
                    <figure><img className="w-28 p-4 h-28" src={userImg} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{userName}</h2>
                        <p>{comment}</p>
                    </div>
                </div>
    );
};
Comment.propTypes = {
    data: PropTypes.object
}
export default Comment;