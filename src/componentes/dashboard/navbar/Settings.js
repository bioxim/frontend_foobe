import React from 'react';
import { Link } from 'react-router-dom';

import '../../layout/auth/Header.css';

const Settings = (props) => (
	<li className="ml-lg-1 active dropdown nav-item">
		<div className="btn-group">
		  <Link className="manito dropdown-toggle nav-link text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		    <i className="fas fa-cog"></i>
		  </Link>
		  <div className="dropdown-menu dropdown-menu-right"role="menu" aria-hidden="true">
		    <Link to={"/profile"} className="dropdown-item" type="button">
		    	<i className="fas fa-user"></i>
		    	<span className="ml-2">Profile</span>
		    </Link>
		    <Link to={"/contacts"} className="dropdown-item" type="button">
		    	<i className="fas fa-comments"></i>
		    	<span className="ml-2">Contacts</span>
		    </Link>
		    <Link to={"/settings"} className="dropdown-item" type="button">
		    	<i className="fas fa-cogs"></i>
		    	<span className="ml-2">Settings</span>
		    </Link>
		  </div>
		</div>
	</li>
)

export default Settings;