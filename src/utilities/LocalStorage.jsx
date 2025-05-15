export const employees = [
    {
        id: 1,
        firstName: "Employee1",
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Prepare Sales Report",
                description: "Compile sales data for Q1.",
                date: "2025-05-12",
                category: "Reports"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Client Meeting",
                description: "Meet with client to discuss contract.",
                date: "2025-04-30",
                category: "Meetings"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Submit Project Plan",
                description: "Plan submission for internal review.",
                date: "2025-05-01",
                category: "Planning"
            }
        ],
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 2,
        firstName: "Employee2",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Update Website",
                description: "Add new product pages.",
                date: "2025-05-15",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Code Review",
                description: "Review code pushed by junior devs.",
                date: "2025-05-07",
                category: "Code"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Fix Login Bug",
                description: "Resolve login issue on mobile.",
                date: "2025-05-04",
                category: "Bugfix"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Deploy Update",
                description: "Production deployment for v1.2.",
                date: "2025-05-01",
                category: "Deployment"
            }
        ],
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 1
        }
    },
    {
        id: 3,
        firstName: "Employee3",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Team Sync",
                description: "Daily team standup meeting.",
                date: "2025-05-10",
                category: "Meetings"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Prepare Docs",
                description: "Document API endpoints.",
                date: "2025-05-11",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Client Feedback",
                description: "Analyze feedback from last release.",
                date: "2025-05-02",
                category: "Feedback"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 1
        }
    },
    {
        id: 4,
        firstName: "Employee4",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "UI Redesign",
                description: "Modernize the dashboard UI.",
                date: "2025-05-01",
                category: "Design"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Client Demo",
                description: "Demo new features to clients.",
                date: "2025-05-14",
                category: "Presentation"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Database Migration",
                description: "Migrate from MySQL to PostgreSQL.",
                date: "2025-05-05",
                category: "Database"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Unit Testing",
                description: "Write tests for API endpoints.",
                date: "2025-05-08",
                category: "Testing"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Fix UI Bugs",
                description: "Fix known layout issues in footer.",
                date: "2025-05-10",
                category: "Bugfix"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 2,
            failed: 1
        }
    },
    {
        id: 5,
        firstName: "Employee5",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Write Blog Post",
                description: "Write article about performance optimization.",
                date: "2025-05-06",
                category: "Marketing"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "SEO Audit",
                description: "Audit website SEO structure.",
                date: "2025-05-12",
                category: "Marketing"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Newsletter Campaign",
                description: "Prepare content for monthly newsletter.",
                date: "2025-05-13",
                category: "Communication"
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 2,
            completed: 1,
            failed: 0
        }
    }
];

export const Admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('Admin', JSON.stringify(Admin));
};

export const getLocalStorage = () => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const storedAdmin = JSON.parse(localStorage.getItem('Admin')) || [];
    return {
        employees: storedEmployees,
        Admin: storedAdmin
    };
};
