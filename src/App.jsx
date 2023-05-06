import { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import dayjs from "dayjs";

import { floors, rooms, timeIntervals } from "./data";

const initialState = {
  tower: "",
  floor: "",
  room: "",
  date: "",
  time: "",
  comment: "",
};

function App() {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = JSON.stringify({
      Башня: state.tower,
      Этаж: state.floor,
      Переговорка: state.room,
      Дата: state.date.$d.toLocaleDateString("ru-RU"),
      Время: state.time,
      Комментарий: state.comment,
    });
    console.log(obj);
    setState(initialState);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setState(initialState);
  };

  return (
    <div className="app">
      <h1>Book a meeting room</h1>
      <form onSubmit={handleSubmit}>
        <Stack>
          {/* Выбор башни */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              required
              value={state.tower}
              onChange={handleChange}
              displayEmpty
              name="tower"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value="А">А</MenuItem>
              <MenuItem value="Б">Б</MenuItem>
            </Select>
            <FormHelperText>Башня</FormHelperText>
          </FormControl>

          {/* Выбор этажа */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              required
              value={state.floor}
              onChange={handleChange}
              name="floor"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Не выбрано</em>
              </MenuItem>
              {floors.map((floor) => (
                <MenuItem key={floor} value={floor}>
                  {floor}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Этаж</FormHelperText>
          </FormControl>

          {/* Выбор переговорки */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              required
              value={state.room}
              onChange={handleChange}
              name="room"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Не выбрано</em>
              </MenuItem>
              {rooms.map((room) => (
                <MenuItem key={room} value={room}>
                  {room}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Переговорка</FormHelperText>
          </FormControl>

          {/* Выбор даты */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={state.date}
                minDate={dayjs()}
                // maxDate={dayjs().endOf('month')}
                onChange={(newDate) => setState({ ...state, date: newDate })}
              />
            </LocalizationProvider>
            <FormHelperText>Дата</FormHelperText>
          </FormControl>

          {/* Выбор интервала времени */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              required
              value={state.time}
              onChange={handleChange}
              name="time"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Не выбрано</em>
              </MenuItem>
              {timeIntervals.map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Время</FormHelperText>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              multiline
              maxRows={4}
              value={state.comment}
              onChange={handleChange}
              name="comment"
            />
            <FormHelperText>Комментарий</FormHelperText>
          </FormControl>

          {/* Кнопки */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success" type="submit">
                Отправить
              </Button>
              <Button variant="outlined" color="error" onClick={handleClear}>
                Очистить
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </form>
      <em className="credits">By Vladimirov Ilya</em>
    </div>
  );
}

export default App;
