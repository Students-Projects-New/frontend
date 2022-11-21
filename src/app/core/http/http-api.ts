export class HttpApi {

    // OAuth
    static oauth_Token = 'sign_in_up';
    static oauth_Refresh_Token = 'refresh';
    static oauth_Verify_Token = 'verify';

    // Project
    static project_Validate_Context = 'validate_context';
    static project_List = 'list_project';
    static project_Create = 'create_project';
    static project_Deploy = 'deploy_project';
    static project_Delete = 'delete_project';
    static collaborators = 'list_users_by_ids';
    static collaborators_Add = 'add_collaborator';
    static collaborators_Remove = 'remove_collaborator';

    // Environment
    static environment_List = 'list_env';
    static environment_Create = 'create_env';

    // Logs
    static logs_Project = 'log_project';

    // Subjects
    static subjects = 'subjects';
    static subjects_Period = 'subjectsPeriod';
    static subjects_Student = 'subjectsStudent';

    // Courses
    static courses_Teacher = 'subjectsPeriodDetail';
    static courses_Student = 'subjectStudentDetailView';

}