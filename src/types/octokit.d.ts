export interface Repo {
    full_name?: string;
    id?: number;
    stargazers_count?: number;
    forks?: number;
    open_issues?: number;
    created_at?: string;
    updated_at?: string;
    license: License;
    language: string;
}

interface license {
    name: string;
}
