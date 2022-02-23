import { Clock } from "page/Clock/Clock";
import { ColorPicker } from "page/ColorPicker/ColorPicker";
import { Dropdown } from "page/Dropdown/Dropdown";
import { Form } from "page/Form/Form";
import { Home } from "page/HomePage";
import { Reader } from "page/Reader/Reader";
import { TodoList } from "page/TodoList/TodoList";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Counter } from "../page/Counter/Counter";
import { AddPublication } from "./AddPublication/AddPublication";
import { FormikPage } from "./Formik/Formik";

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const inittodos = [
  { "id": "id-1", "text": "Выучить основы React", "completed": true },
  { "id": "id-2", "text": "Разобраться с React Router", "completed": true },
  { "id": "id-3", "text": "Пережить Redux", "completed": false },
  { "id": "id-4", "text": "Разобраться с React", "completed": true },
  { "id": "id-5", "text": "Redux", "completed": false }
]

const articles = [
 {
  "title": "title 1",
  "article": "article 1",
  "id": "1"
 },
 {
  "title": "title 2",
  "article": "article 2",
  "id": "2"
 },
 {
  "title": "title 3",
  "article": "article 3",
  "id": "3"
 },
 {
  "title": "title 4",
  "article": "article 4",
  "id": "4"
 },
 {
  "title": "title 5",
  "article": "article 5",
  "id": "5"
 },
 {
  "title": "title 6",
  "article": "article 6",
  "id": "6"
 },
 {
  "title": "title 7",
  "article": "article 7",
  "id": "7"
 }
]

export const App = () => {
    const informSubmit = data => {
    console.log(data);
  }

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="counter" element={<Counter />} />
          <Route path="dropdown" element={<Dropdown />} />
          <Route path="colorPicker" element={<ColorPicker options={colorPickerOptions} />} />
          <Route path="todoList" element={<TodoList todost={inittodos} />} />
          <Route path="form" element={<Form informSubmit={informSubmit} />} >
            <Route path="formik" element={<FormikPage informSubmit={informSubmit}/>} />
          </Route>
          <Route path="clock" element={<Clock />} />
          <Route path="reader" element={<Reader data={articles} />} />
          <Route path="reader/add" element={<AddPublication/>} />
        </Route>
      </Routes>
    </Box>);
};

const Box = styled.div`
  margin:auto;
  padding: 30px;
`