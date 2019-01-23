import { CACHE_TIME } from '@/constants';
import * as actions from '@/store/actions';

export default {
  '/project': ({ pathname, search },state) => [
    {
      action: actions.doGetProjectListRequest(),
      ttl: CACHE_TIME,
      isExist: false
    },
  ],
  '/project/:projectId': ({ pathname, search ,projectId},state) => [
    {
      action: actions.doGetProjectDetailsRequest(projectId),
      ttl: CACHE_TIME,
      isExist: false
    },
  ]
};