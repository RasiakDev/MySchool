export const studentsList = [
    {
        "id": 1,
        'name': 'Besmir',
        'lastname': 'Guma',
        'age': 27,
        'course': 'English',
        'level': 'B2',
        'assignedClass': 'Anglisht B1 Etoni',
        'seasons': [ 'Summer 2022' ,'2022 - 2023']
    },
    {
        "id": 2,
        'name': 'Ensuela',
        'lastname': 'Germenji',
        'age': 27,
        'course': 'English',
        'level': 'B2',
        'assignedClass': 'Anglisht B2 Inriti',
        'seasons': ['2021 - 2022', 'Summer 2022']
    },
    {
        "id": 3,
        'name': 'Gezim',
        'lastname': 'Hovi',
        'age': 28,
        'course': 'Italian',
        'level': 'A2',
        'assignedClass': 'Anglisht B1 Brisejda',
        'seasons': ['2022 - 2023']
    },       
    {
        "id": 4,
        'name': 'Antuen',
        'lastname': 'Basha',
        'age': 18,
        'course': 'Italian',
        'level': 'B2',
        'assignedClass': 'Anglisht B1 Brisejda',
        'seasons': ['2022 - 2023']
    },       
    {
        "id": 5,
        'name': 'Antonela',
        'lastname': 'Saliu',
        'age': 33,
        'course': 'German',
        'level': 'C1',
        'assignedClass': 'Anglisht B1 Brisejda',
        'seasons': ['2021 - 2022', 'Summer 2022']
    },       
    {
        "id": 6,
        'name': 'Paola',
        'lastname': 'Biturku',
        'age': 20,
        'course': 'German',
        'level': 'A1',
        'assignedClass': 'Anglisht B1 Brisejda',
        'seasons': ['2021 - 2022', 'Summer 2022']
    },       
    {
        "id": 7,
        'name': 'Kristi',
        'lastname': 'Bishqemi',
        'age': 38,
        'course': 'Italian',
        'level': 'B2',
        'assignedClass': 'Anglisht B1 Brisejda',
        'seasons': ['2021 - 2022', 'Summer 2022']
    },       
  ]

export const semesters = 
[
    {
        currentSeason: true,
        year : '2022 - 2023',
        classRooms: [
            {
                id: 1,
                course: 'English',
                weekDays: ['tuesday', 'friday'],
                startingHour: '16',
                endingHour: '18',
                name: 'B1 Adult',
                teacher: 'Brisejda',
                students: [
                    {
                        "id": 1,
                        'name': 'Besmir',
                        'lastname': 'Guma',
                        'age': 27,
                        'course': 'English',
                        'level': 'B2',
                        'assignedClass': 'Anglisht B1 Etoni',
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 3,
                        'name': 'Gezim',
                        'lastname': 'Hovi',
                        'age': 28,
                        'course': 'Italian',
                        'level': 'A2',
                        'assignedClass': 'B1 Adult',
                        'debit': 300,
                        'seasons': ['2022 - 2023']
                    },       
                    {
                        "id": 4,
                        'name': 'Antuen',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                ]
            },
            {
                id: 2,
                course: 'English',
                weekDays: ['monday', 'wednesday'],
                startingHour: 13,
                endingHour: 15,
                name: 'A2 Junior',
                teacher: 'Elton',
                students: [
                    {
                        "id": 11,
                        'name': 'Xhoni',
                        'lastname': 'Qiriazi',
                        'age': 27,
                        'course': 'English',
                        'level': 'B2',
                        'assignedClass': 'Anglisht B1 Etoni',
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 13,
                        'name': 'Klaudio',
                        'lastname': 'Agolli',
                        'age': 28,
                        'course': 'Italian',
                        'level': 'A2',
                        'assignedClass': 'B1 Adult',
                        'debit': 300,
                        'seasons': ['2022 - 2023']
                    },       
                    {
                        "id": 14,
                        'name': 'Mirian',
                        'lastname': 'Shkoza',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                ]
            }
        ],
        students : [
            {
                "id": 1,
                'name': 'Hafiz',
                'lastname': 'Guma',
                'age': 27,
                'course': 'English',
                'level': 'B2',
                'assignedClass': 'Anglisht B1 Etoni',
                'seasons': ['2022 - 2023']
            },
            {
                "id": 3,
                'name': 'Laura',
                'lastname': 'Hovi',
                'age': 28,
                'course': 'Italian',
                'level': 'A2',
                'assignedClass': 'B1 Adult',
                'debit': 300,
                'seasons': ['2022 - 2023']
            },       
            {
                "id": 4,
                'name': 'Astrit',
                'lastname': 'Basha',
                'age': 18,
                'course': 'Italian',
                'level': 'B2',
                'assignedClass': 'A2 Junior',
                'debit': 400,
                'seasons': ['2022 - 2023']
            },
        ]
    },
    {
        currentSeason: false,
        year : 'Summer 2022',
        studentCount: 2,
        classRooms: [
           
            {
                id: 2,
                course: 'English',
                weekDays: ['monday', 'wednesday'],
                startingHour: 13,
                endingHour: 15,
                name: 'A2 Junior',
                teacher: 'Elton',
                students: [
                    {
                        "id": 11,
                        'name': 'Xhoni',
                        'lastname': 'Qiriazi',
                        'age': 27,
                        'course': 'English',
                        'level': 'B2',
                        'assignedClass': 'Anglisht B1 Etoni',
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 13,
                        'name': 'Klaudio',
                        'lastname': 'Agolli',
                        'age': 28,
                        'course': 'Italian',
                        'level': 'A2',
                        'assignedClass': 'B1 Adult',
                        'debit': 300,
                        'seasons': ['2022 - 2023']
                    },       
                    {
                        "id": 14,
                        'name': 'Mirian',
                        'lastname': 'Shkoza',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                ]
            }
        ],
        students : [
            {
                "id": 1,
                'name': 'Besmir',
                'lastname': 'Guma',
                'age': 27,
                'course': 'English',
                'level': 'B2',
                'assignedClass': 'Anglisht B1 Etoni',
                'seasons': ['2022 - 2023']
            },
            {
                "id": 5,
                'name': 'Antonela',
                'lastname': 'Saliu',
                'age': 33,
                'course': 'German',
                'level': 'C1',
                'assignedClass': 'Anglisht B1 Brisejda',
                'seasons': ['2021 - 2022','Summer 2022']
            },  
            {
                "id": 2,
                'name': 'Ensuela',
                'lastname': 'Germenji',
                'age': 27,
                'course': 'English',
                'level': 'B2',
                'assignedClass': 'Anglisht B2 Inriti',
                'seasons': ['2021 - 2022', 'Summer 2022']
            },
            {
                "id": 7,
                'name': 'Kristi',
                'lastname': 'Bishqemi',
                'age': 38,
                'course': 'Italian',
                'level': 'B2',
                'assignedClass': 'Anglisht B1 Brisejda',
                'seasons': ['2021 - 2022', 'Summer 2022']
            },     
            {
                "id": 6,
                'name': 'Paola',
                'lastname': 'Biturku',
                'age': 20,
                'course': 'German',
                'level': 'A1',
                'assignedClass': 'Anglisht B1 Brisejda',
                'seasons': ['2021 - 2022', 'Summer 2022']
            }, 
        ]
    },
    {   currentSeason: false,
        year : '2021 - 2022',
        studentCount: 2,
        classRooms: [
            {
                id: 1,
                course: 'English',
                weekDays: ['tuesday', 'friday'],
                startingHour: '16',
                endingHour: '18',
                name: 'B1 Adult',
                teacher: 'Brisejda',
                students: [
                    {
                        "id": 1,
                        'name': 'Beqir',
                        'lastname': 'Guma',
                        'age': 27,
                        'course': 'English',
                        'level': 'B2',
                        'assignedClass': 'Anglisht B1 Etoni',
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 3,
                        'name': 'Xhoni',
                        'lastname': 'Hovi',
                        'age': 28,
                        'course': 'Italian',
                        'level': 'A2',
                        'assignedClass': 'B1 Adult',
                        'debit': 300,
                        'seasons': ['2022 - 2023']
                    },       
                    {
                        "id": 4,
                        'name': 'Livia',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 5,
                        'name': 'Livia',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 45,
                        'name': 'Livia',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 55,
                        'name': 'Livia',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 56,
                        'name': 'Livia',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 556,
                        'name': 'Livia',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 563,
                        'name': 'Livia',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 856,
                        'name': 'Livia',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                ]
            },
            {
                id: 14,
                course: 'English',
                weekDays: ['tuesday', 'friday'],
                startingHour: '16',
                endingHour: '18',
                name: 'B1 Adult',
                teacher: 'Brisejda',
                students: [
                    {
                        "id": 1,
                        'name': 'Besmir',
                        'lastname': 'Guma',
                        'age': 27,
                        'course': 'English',
                        'level': 'B2',
                        'assignedClass': 'Anglisht B1 Etoni',
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 3,
                        'name': 'Gezim',
                        'lastname': 'Hovi',
                        'age': 28,
                        'course': 'Italian',
                        'level': 'A2',
                        'assignedClass': 'B1 Adult',
                        'debit': 300,
                        'seasons': ['2022 - 2023']
                    },       
                    {
                        "id": 4,
                        'name': 'Antuen',
                        'lastname': 'Basha',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                ]
            },
            {
                id: 2,
                course: 'English',
                weekDays: ['monday', 'wednesday'],
                startingHour: 13,
                endingHour: 15,
                name: 'A2 Junior',
                teacher: 'Elton',
                students: [
                    {
                        "id": 11,
                        'name': 'Xhoni',
                        'lastname': 'Qiriazi',
                        'age': 27,
                        'course': 'English',
                        'level': 'B2',
                        'assignedClass': 'Anglisht B1 Etoni',
                        'seasons': ['2022 - 2023']
                    },
                    {
                        "id": 13,
                        'name': 'Klaudio',
                        'lastname': 'Agolli',
                        'age': 28,
                        'course': 'Italian',
                        'level': 'A2',
                        'assignedClass': 'B1 Adult',
                        'debit': 300,
                        'seasons': ['2022 - 2023']
                    },       
                    {
                        "id": 14,
                        'name': 'Mirian',
                        'lastname': 'Shkoza',
                        'age': 18,
                        'course': 'Italian',
                        'level': 'B2',
                        'assignedClass': 'A2 Junior',
                        'debit': 400,
                        'seasons': ['2022 - 2023']
                    },
                ]
            }
        ],
        students : [
            {
                "id": 2,
                'name': 'Ensuela',
                'lastname': 'Germenji',
                'age': 27,
                'course': 'English',
                'level': 'B2',
                'assignedClass': 'Anglisht B2 Inriti',
                'seasons': ['2021 - 2022', 'Summer 2022']
            },
            {
                "id": 5,
                'name': 'Antonela',
                'lastname': 'Saliu',
                'age': 33,
                'course': 'German',
                'level': 'C1',
                'assignedClass': 'Anglisht B1 Brisejda',
                'seasons': ['2021 - 2022','Summer 2022']
            },        
            {
                "id": 6,
                'name': 'Paola',
                'lastname': 'Biturku',
                'age': 20,
                'course': 'German',
                'level': 'A1',
                'assignedClass': 'Anglisht B1 Brisejda',
                'seasons': ['2021 - 2022', 'Summer 2022']
            },
            {
                "id": 7,
                'name': 'Kristi',
                'lastname': 'Bishqemi',
                'age': 38,
                'course': 'Italian',
                'level': 'B2',
                'assignedClass': 'Anglisht B1 Brisejda',
                'seasons': ['2021 - 2022', 'Summer 2022']
            }, 
        ]
    },

]