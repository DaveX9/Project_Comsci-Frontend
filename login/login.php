<?php
// Initialize variables
$error_message = '';

// Process the form when the request method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $servername = "localhost";
    $username_db = "root"; // Adjust this to your DB username
    $password_db = ""; // Adjust this to your DB password
    $dbname = "login";

    // Create a connection to the database
    $conn = new mysqli($servername, $username_db, $password_db, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get form inputs
    $username = $conn->real_escape_string($_POST['username']);
    $password = $conn->real_escape_string($_POST['password']);

    // Search for the user in the database
    $stmt = $conn->prepare("SELECT * FROM login WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if a user was found
    if ($result->num_rows > 0) {
        // Fetch the user and their role
        $row = $result->fetch_assoc();
        $role = $row['role']; // Assuming there's a 'role' column

        if ($role == 'admin') {
            // Redirect to admin page
            header("Location:/Project_Comsci/Admin/Admin_dashboard.php");
            exit();
        } elseif ($role == 'user') {
            // Redirect to user page
            header("Location:/DEVFINAL/Afterlogin/main.html");
            exit();
        }
    } else {
        // Set error message if no user is found
        $error_message = "Username หรือ Password กรอกไม่ถูกต้อง กรุณากรอกใหม่";
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="icon" type="image/x-icon" href="logo.png">
    <link rel="stylesheet" href="/DEVFINAL/login/login.css">
    <title>login</title>
</head>
<body>
    <header>
        <div class="header-topbar">
            <a href="https://www.bsru.ac.th/">Bansomdejchaopraya Rajabhat University</a>
            <button id="theme-toggle" class="theme-toggle">
                🌙 Dark Mode
            </button>
        </div>
        <div class="header-content">
            <div class="logo">
                <img src="/picture/logo-sa.png" alt="Public Health"/>
                <h4>Public Health <br> งานอนามัยและสุขภาพ</h4> 
            </div>
            <div>
                <div class="unilogo">
                    <img src="picture/newunilogo.png" alt="BSRU Logo"/>
                </div>
            </div>
            <div class="language-switch">
                <a href="#">
                    <img src="thai.jpg" alt="TH Flag" width="20" height="15"> TH
                </a> 
                | 
                <a href="#">
                    <img src="uk.png" alt="EN Flag" width="20" height="15"> EN
                </a>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light mt-3">
            <div class="container-fluid">
                <!-- Hamburger menu button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Navbar links -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">หน้าแรก</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                เกี่ยวกับห้องพยาบาล
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                บริการ
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                                <li><a class="dropdown-item" href="services.html">บริการสุขภาพ</a></li>
                                <li><a class="dropdown-item" href="barrowbag.html">การขอกระเป๋ายานอกสถานที่</a></li>
                                <li><a class="dropdown-item" href="resthos.html">การนอนพักที่ห้องพยาบาล</a></li>
                                <li><a class="dropdown-item" href="#">บริการตรวจสุขภาพโดยแพทย์</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">คลังความรู้</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="knowledgeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ดาวน์โหลดเอกสาร
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="knowledgeDropdown">
                                <li><a class="dropdown-item" href="#">คู่มือการใช้งาน</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex search-container">
                        <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-secondary" type="submit">Search</button>
                        <a href="login.html" class="login-link">เข้าสู่ระบบ</a>
                    </form>
                </div>
            </div>
        </nav>
    </header>

    <section class="login">
        <main class="mt-5 pt-5">
            <div class="container-login">
                <h1 class="login_header">login</h1>

                <!-- Form starts -->
                <form action="login.php" method="POST" class="form">
                    <div class="input-container">
                        <img src="user.png" alt="User Icon" class="icon">
                        <input type="text" name="username" placeholder="ช่องกรอก Username" class="username" required>
                    </div>
                    <div class="input-container">
                        <img src="lock.png" alt="Lock Icon" class="icon">
                        <input type="password" name="password" placeholder="ช่องกรอก Password" class="password" required>
                    </div>
                    <button class="btn" type="submit">submit</button>
                    <div class="forgot_password">
                        <a href="#" class="forgot_password">ลืมรหัสผ่าน?</a>
                    </div>
                    
                    <!-- Error message display, only shows when the login fails -->
                    <?php
                    if (!empty($error_message)) {
                        echo '<div class="error-message" style="color: red; margin-top: 10px;">'.$error_message.'</div>';
                    }
                    ?>
                </form>
                <!-- Form ends -->

            </div>
        </main>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
