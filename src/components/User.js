import React from 'react';



function User(props) {
		const { value } = props;

    const userDetail = {
      id: `${value.login.salt}`,
      img: value.picture.large,
			name: `${value.name.first} ${value.name.last}`,
			gender: value.gender,
			email: value.email,
			phone: value.phone,
			address: `${value.location.street.name} ${value.location.street.number}`,
      city: `${value.location.postcode} ${value.location.city}`,
      latitude: value.location.coordinates.latitude,
      longitude: value.location.coordinates.longitude,
			registered: value.registered.date
    }

		const errorAddress = 'brak';
		const errorName = 'Nie przekazano imienia i nazwiska.';

		const checkIsEmpty = (value, error) => {

			if (value.trim() === '') {
				return error
			}
			return value
    }

    return (
      <>
      <div className="userlist-container ulc-utils " >
            <div className="col-2">
              <img className="list-image" alt={userDetail.name} src={userDetail.img} />
              <div className="another-column">
                <h4>{checkIsEmpty(userDetail.name, errorName)}</h4>
                <h5>{userDetail.gender}</h5>
                <br />
                <h4>{userDetail.email}</h4>
                <h4>{userDetail.phone}</h4>
                <br />
                <h4>{checkIsEmpty(userDetail.address, errorAddress)}</h4>
                <h4>{userDetail.city}</h4>
                <br />
                <h4>Registered: {Intl.DateTimeFormat().format(new Date(userDetail.registered))}</h4>
              </div>
            </div>
          </div>
      </>
    )
}

export default User
