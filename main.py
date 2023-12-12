import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="yourusername",
    password="yourpassword",
    database="yourdatabase"
)


def search_students(corpus, floor, room):
    mycursor = mydb.cursor()
    query = "SELECT student.name " \
            "FROM student " \
            "JOIN corpus ON student.corpus_id = corpus.id " \
            "JOIN floor ON student.floor_id = floor.id " \
            "JOIN room ON student.room_id = room.id " \
            "WHERE corpus.name = %s " \
            "AND floor.name = %s " \
            "AND room.name = %s"
    values = (corpus, floor, room)
    mycursor.execute(query, values)
    result = mycursor.fetchall()
    mycursor.close()
    return result




students = search_students("Корпус 1", "Этаж 2", "Комната 101")
for student in students:
    print(student[0])
