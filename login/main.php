<?php
session_start();

// Check if the user is logged in, if not redirect to login page
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: login.php");
    exit;
}

// Logout logic
if (isset($_GET['logout'])) {
    // Destroy the session and redirect to login page
    session_destroy();
    header("Location: login.php");
    exit;
}
?>
