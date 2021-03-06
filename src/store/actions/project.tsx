import * as constants from "@/constants";
import { createAction } from "typesafe-actions";
import { AxiosResponse } from 'axios';
import {ProjectListItem,ProjectInfo,PageData,Member} from "@/types"
import { WrappedFormUtils } from 'antd/lib/form/Form';

export const doGetProjectListRequest = createAction(constants.GET_PROJECT_LIST_REQUEST);
export const doGetProjectListSuccess = createAction(constants.GET_PROJECT_LIST_SUCCESS,resolve=>(response:AxiosResponse<PageData<ProjectListItem>>)=>resolve(response.data));
export const doGetProjectListFailure = createAction(constants.GET_PROJECT_LIST_FAILURE);

export const doGetProjectDetailsRequest = createAction(constants.GET_PROJECT_DETAILS_REQUEST,resolve=>(projectId:number)=>resolve(projectId));
export const doGetProjectDetailsSuccess = createAction(constants.GET_PROJECT_DETAILS_SUCCESS,resolve=>(response:AxiosResponse<ProjectInfo>)=>resolve(response.data));
export const doGetProjectDetailsFailure = createAction(constants.GET_PROJECT_DETAILS_FAILURE);

export const doUpdateProjectDetailsRequest = createAction(constants.UPDATE_PROJECT_DETAILS_REQUEST,resolve=>(form:WrappedFormUtils)=>resolve(form));
export const doUpdateProjectDetailsSuccess = createAction(constants.UPDATE_PROJECT_DETAILS_SUCCESS);
export const doUpdateProjectDetailsFailure = createAction(constants.UPDATE_PROJECT_DETAILS_FAILUER);

export const doAddProjectToggle=createAction(constants.ADD_PROJECT_TOGGLE,resolve=>(toggle:boolean)=>resolve(toggle));
export const doAddProjectRequest = createAction(constants.ADD_PROJECT_REQUEST,resolve=>(form:WrappedFormUtils)=>resolve(form));
export const doAddProjectSuccess = createAction(constants.ADD_PROJECT_SUCCESS);
export const doAddProjectFailure = createAction(constants.ADD_PROJECT_FAILURE);


export const doGetProjectMembersRequest = createAction(constants.GET_PROJECT_MEMBERS_REQUEST,resolve=>(projectId:number)=>resolve(projectId));
export const doGetProjectMembersSuccess = createAction(constants.GET_PROJECT_MEMBERS_SUCCESS,resolve=>(response:AxiosResponse<Member[]>)=>resolve(response.data));
export const doGetProjectMembersFailure = createAction(constants.GET_PROJECT_MEMBERS_FAILURE);