<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname =  "login";
// เชื่อมต่อฐานข้อมูล
$conn = new mysqli($servername,$username,$password,$dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // ค้นหาผู้ใช้ในฐานข้อมูล
    $sql = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // ถ้าพบผู้ใช้ ให้ดึงข้อมูล
        $row = $result->fetch_assoc();
        $role = $row['role']; // สมมติว่ามีคอลัมน์ชื่อ role ในฐานข้อมูล

        if ($role == 'admin') {
            // ถ้าเป็น admin นำทางไปหน้า admin
            header("Location:/Project_Comsci/Admin/Admin_dashboard.php");
            exit();
        } elseif ($role == 'user') {
            // ถ้าเป็น user นำทางไปหน้า user
            header("Location:/DEVFINAL/Afterlogin/main.html");
            exit();
        }
    } else {
        echo "Username หรือ Password ไม่ถูกต้อง";
    }
}

$conn->close();
?>
