import requests

response = requests.get('http://127.0.0.1:8000/api/projects/project/1')
# {
#     'id': 1,
#     'link': 'https://testproject1.com',
#     'title': 'Test Project1',
#     'usersWorked': ['admin', 'test']
# }

response = requests.get('http://127.0.0.1:8000/api/projects/project/1',
                        headers={'Accept': 'application/json; version=0.2'})
# {
#     'id': 1,
#     'title': 'Test Project1',
#     'usersWorked': ['admin', 'test']
# }

response = requests.get('http://127.0.0.1:8000/api/users/1')

# {
#     'birthday': 2001,
#     'email': 'admin@mail.ru',
#     'firstName': 'Admin',
#     'id': 1,
#     'lastName': 'Adminov',
#     'username': 'admin'
# }

response = requests.get('http://127.0.0.1:8000/api/users/1',
                        headers={'Accept': 'application/json; version=0.2'})
# {
#     'birthday': 2001,
#     'email': 'admin@mail.ru',
#     'firstName': 'Admin',
#     'id': 1,
#     'isStaff': True,
#     'isSuperuser': True,
#     'lastName': 'Adminov',
#     'username': 'admin'
# }
