<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting...</title>
    
    <!-- Meta Refresh - 0 seconds delay -->
    <meta http-equiv="refresh" content="0; url=https://skyserver.in/client">
    
    <!-- JavaScript Redirect - Instant -->
    <script>
        window.location.replace("https://skyserver.in/client");
    </script>
    
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .loader {
            text-align: center;
            color: white;
        }
        .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="loader">
        <div class="spinner"></div>
        <p>Redirecting...</p>
    </div>
    
    <!-- Fallback link if JavaScript is disabled -->
    <noscript>
        <p>If you are not redirected, <a href="https://skyserver.in/client">click here</a>.</p>
    </noscript>
</body>
</html>