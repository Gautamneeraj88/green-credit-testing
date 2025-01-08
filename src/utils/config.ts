export const ENDPOINTS = {
    CREATE_ACTIVITY: '/super-admin/CreateActivity',
    GET_ACTIVITIES: '/super-admin/GetActivities',
    CREATE_PART: '/super-admin/CreatePart',
    GET_PARTS: '/super-admin/GetParts',
    LOGIN: '/auth-service/login',
    CREATE_PROJECT: '/project/CreateProject',
    GET_PROJECTS: '/project/GetProject',
    GET_PROJECT_BY_ID: (id: string) => `/project/GetProjectById/${id}`,
    CREATE_PACKAGE: '/project/CreatePackage',
    GET_PACKAGE_BY_ID: '/project/GetPackageById',
    GET_PACKAGES: '/project/GetPackages',
    ADD_TREES_DATA: '/trees/add',
    GET_TREES_DETAILS: '/trees/GetTrees',
  };
  