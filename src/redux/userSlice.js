import { createSlice } from "@reduxjs/toolkit";
import fetchApi from "../components/api";


const initialState = {
    users:[],
    loading:false,
    error: null
}



const userSlice  = createSlice({
    name:"users",
    initialState,
    reducers:{
        setUsers(state, action)
        {
            state.users = action.payload;
        },
        addUser(state, action)
        {
            state.users = [...state.users , action.payload]
        },
        updateUser(state, action){
            const index = state.users.findIndex((user)=> user.id === action.payload.id);
            console.log(action.payload)
            if(index >=0)
            {
                state.users[index] = action.payload;
            }
        },
        deleteUser(state, action){
            state.users = state.users.filter(user=>user.id !== action.payload);
        },
        setLoading(state,action)
        {
            state.loading = action.payload;
        },
        setError(state, action)
        {
            state.error = action.payload;
        }
    }
});

export const { setUsers, addUser, updateUser, deleteUser, setLoading, setError} = userSlice.actions;

export const fetchUsers = ()=>async (dispatch)=>{
    dispatch(setLoading(true));
    try {
        const response  = await fetchApi.get("/users");
        const data = await response.data;
        dispatch(setUsers(data));
    } catch (error) {
        dispatch(setError('Failed to fetch users'));
    }
    finally{
        dispatch(setLoading(false));
    }
};

export const createUser = (userData)=> async (dispatch)=>{

    dispatch(setLoading(true));
    try {
        const response  = await fetchApi.post('/users',userData);
        dispatch(addUser(userData));
    } catch (error) {
        dispatch(setError("Failed to add user"));
    }
    finally{
        dispatch(setLoading(false));
    }
}

export const updateExistingUser = (userId, userData)=> async (dispatch)=>{
    try {
        const response  = await fetchApi.put(`/users/${userId}`,userData);
        dispatch(updateUser(response.data));
    } catch (error) {
        dispatch(setError("Failed to update the user data"));
    }
    finally{
        dispatch(setLoading(false));
    }
}


export const deleteExistingUser  = (userId)=>async(dispatch)=>{
    dispatch(setLoading(true));
    try {
        const response =  await  fetchApi.delete(`/users/${userId}`);
        dispatch(deleteUser(userId));
    } catch (error) {
        dispatch(setError("error in deleting user data"));
    }
}


export default userSlice.reducer;
