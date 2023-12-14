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
