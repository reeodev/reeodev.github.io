import React, { useState } from 'react';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchBox({ setString }){
    return(
        <Input 
            startAdornment={ <InputAdornment position="start"> <SearchIcon /> </InputAdornment> }
            onChange={ (e) => setString(e.currentTarget.value) }
        />
    )

}

export default SearchBox