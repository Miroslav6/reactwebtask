import React from 'react';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from "axios";

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
}) 