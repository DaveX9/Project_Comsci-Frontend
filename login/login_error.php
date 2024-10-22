<!-- Error handling will be added through the `?error=1` parameter in the URL -->
<?php if (isset($_GET['error'])) : ?>
    <p style="color: red;">Username or Password is incorrect. Please try again.</p>
<?php endif; ?>
