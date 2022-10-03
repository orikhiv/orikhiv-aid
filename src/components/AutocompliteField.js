import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import FormHelperText from '@mui/material/FormHelperText'
import TextInput from './TextInput'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { useField } from 'formik'

export default function AutocompleteField({ ...props }) {
  const { name, label, options } = props
  const [field, meta, helpers] = useField(name)
  console.log(helpers)
  return (
    <Autocomplete
      {...field}
      {...props}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      disablePortal
      onChange={(_, value) => helpers.setValue(value?.label)}
      id={'combo-box-' + name}
      options={options}
      renderInput={(props) => (
        <TextField
          // {...field}
          {...props}
          name={name}
          label={label}
          helperText={(meta.touched && meta.error) || ' '}
          error={meta.touched && Boolean(meta.error)}
        />
      )}
      sx={{ mb: 2 }}
      fullWidth
    />
  )
}
