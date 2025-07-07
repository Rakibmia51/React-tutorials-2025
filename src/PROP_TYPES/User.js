import React from 'react'

import PropTypes from 'prop-types';

const User = (props) => {
    console.log(props)
  return (
        <div>
            {/* <h2>{props.userName}</h2>
            <h3>{props.userId}</h3> */}

            <h3>{props.user.id}</h3>
            <h3>{props.user.name}</h3>
        </div>
  )
}

// User.propTypes = {
//     // Key-Value
//   userName: PropTypes.number,
//   userId: PropTypes.number,
// };

User.prototype = {
      // Key-Value
   user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
   }), 
}

User.defaultProps ={
  userName: "Default Name",
  userId: 0,
};

export default User
