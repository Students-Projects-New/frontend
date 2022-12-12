export class HttpApi {

    // OAuth
    static oauth_Token = 'sign_in_up';
    static oauth_Refresh_Token = 'token/refresh';
    static oauth_Verify_Token = 'token/verify';

    // Project
    static project_Validate_Context = 'validate_context';
    static project_List = 'list_project';
    static project_Get = 'find_project';
    static project_Create = 'create_project';
    static project_Deploy = 'deploy_project';
    static project_Delete = 'delete_project';
    static project_Delete_Workspace = 'delete_workspace';
    static project_List_By_Course = 'list_projects_subject';

    // Database
    static database_List = 'list_database';
    static database_Create = 'create_database';
    static database_Delete = 'delete_database';
    static database_Search = 'search_database';
    static database_Types_List = 'list_types_database';
    static database_Create_User = 'create_user_sgbd';

    // Collaborators
    static collaborators = 'list_users_by_ids';
    static collaborators_Add = 'add_collaborator';
    static collaborators_Remove = 'remove_collaborator';

    // Environment Vars
    static var_List = 'list_env';
    static var_Create = 'create_env';
    static var_Update = 'update_env';
    static var_Delete = 'delete_env';

    // Logs
    static logs_Project = 'log_project';

    // Metrics
    static metrics_Project = 'list_statistics';

    // Deployments
    static deployments_Project = 'list_deploys';

    // Subjects
    static subjects = 'subjects';
    static subjects_Period = 'subjectsPeriod';
    static subjects_Student = 'subjectsStudent';

    // Courses
    static course = 'subjectsPeriodDetailById';
    static courses_Teacher = 'subjectsPeriodDetail';
    static courses_Student = 'subjectStudentDetailView';
    static course_Students_Enrolled = 'subjectStudentPeriod';

    // Users
    static users_Ids_By_Emails = 'get_ids_by_email';
    static users_Update_Role = 'update_to_teacher';

}