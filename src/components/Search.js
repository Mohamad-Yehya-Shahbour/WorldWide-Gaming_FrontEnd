import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect} from 'react'
import api from '../services/api';


export default function Search(props) {

  const[users, setUsers] = useState([])

  useEffect(() => {
    api
    .getAllusers()
    .then((response)=>{
        setUsers(response.data);
    })
    .catch((error)=>{console.log(error.response)})
}, []);
  
  return (
    <Stack sx={{ width: 400,}} >
      <Autocomplete
        size="small"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onChange={(e, value) => {e.preventDefault();
          localStorage.setItem("inputSearch", value)
          console.log(value)
          props.history.push("/search")}}
        options={users.map((option) => option.userName)}
        renderInput={(params) => (
          <><TextField
            {...params}
            label="Search for other Players"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
          </>
        )}
      />
      
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'yeh', year: 1994 },
  { title: 'yehya3', year: 1972 },
  
];
