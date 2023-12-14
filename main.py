import mysql.connector
import datetime

mydb = mysql.connector.connect(
    host="localhost",
    port="3306",
    user="root",
    password="qwerty",
    database="systemofzaselenie"
)

# adding new data to db
def add_student(data):
    with mydb.cursor() as cursor:
        insert_student = """
                INSERT INTO студент (Имя, ДатаРождения, Фото,
                НомерПриказаОПредоставленииОбщежития, НомерПриказаОЗачислении, ДатаЗачисления,
                МестоРождения,АдресПроживания,Фамилия,Отчество)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """
        cursor.execute(insert_student, data)  # Use execute() instead of executemany() since there's only one set of values
        mydb.commit()

#delete data
def delete_students(id):
    with mydb.cursor() as cursor:
        deletestudent = f"""
        DELETE FROM студент WHERE НомерКарточки = {id}
        """
        cursor.execute(deletestudent)
        mydb.commit()
with open('wp9450562.jpg', 'rb') as file:
    photo_data = file.read()

data = [
    "gg", datetime.date(2000, 10, 10), "wp9450562.jpg", 8274242424324, 234242433234, datetime.date(2020, 10, 10),
     "ggg", "sfsfsf", "gg", "gg"
]
#add_student(data)
delete_students(2)
"""name, date_of_birth, photo, num_of_order_accom,
                num_of_order_enrollment, date_enrollment, place_birth,
                place_of_living, surname, patronymic, num_of_room"""