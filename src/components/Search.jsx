import {TextField} from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField type='search'
                      variant='standard'
                      label='search'
                      fullWidth
                      sx={{mb:1.5}}
                      value={value}
                      onChange={onChange} />;
};

export default Search;