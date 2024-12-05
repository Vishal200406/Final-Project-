<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atari Games</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation Bar -->
    <div class="nav-container">
        <div class="logo-container">
            <img src="images/ATARI2.png" alt="Logo" class="logo">
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li class="menu-item"><a href="Product.html">Products</a></li>
                <li class="menu-item">
                    <button class="menu-btn">Company Info</button>
                    <ul class="submenu">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="careers.html">Careers</a></li>
                    </ul>
                </li>
                <li class="menu-item">
                    <button class="menu-btn" onclick="toggleEmailSubmenu()">Contact Us</button>
                    <ul class="submenu email-submenu" id="emailSubmenu">
                        <li><a href="mailto:200621192@student.georgianc.on.ca">200621192@student.georgianc.on.ca</a></li>
                        <li><a href="mailto:200602741@student.georgianc.on.ca">200602741@student.georgianc.on.ca</a></li>
                        <li><a href="mailto:200624869@student.georgianc.on.ca">200624869@student.georgianc.on.ca</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
  
    <header>
        <div class="header-container">
            <h1>Atari Games</h1>
            <p class="slogan">Relive the Golden Age of Gaming with Atari</p>
        </div>
    </header>
     

    <!-- Promo Video Section -->
    <section class="promo-video">
        <video autoplay muted loop playsinline>
            <source src="promovideo.mp4" type="video/mp4">
            <source src="promo-video.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
    </section>

    <!-- Introduction Section -->
    <section class="intro">
        <div class="intro-content">
            <h2>Welcome to the World of Atari</h2>
            <p>
                Founded in 1972 by Nolan Bushnell and Ted Dabney, Atari is widely regarded as the pioneer of the video game industry. It forever changed the entertainment landscape with the release of <em>Pong</em>, one of the first arcade games to gain mainstream popularity.
            </p>
            <p>
                Atari not only introduced classic games like <em>Asteroids</em>, <em>Centipede</em>, and <em>Missile Command</em>, but also inspired the modern gaming industry by establishing standards in hardware and software development. Its contributions to gaming history are unparalleled.
            </p>
        </div>
    </section>

    <!-- Featured Games Section -->
    <section class="featured-games">
        <h2>Featured Games</h2>
        <div class="games">
            <div class="game">
                <a href="Product.html"> <!-- Link to the product page -->
                    <img src="images/Pac-Man.jpg" alt="Pac-Man" class="game-image">
                    <h3>Pac-Man</h3>
                    <p>Navigate through mazes and avoid ghosts in this iconic arcade game.</p>
                </a>
            </div>
            <div class="game">
                <a href="Product.html"> <!-- Link to the product page -->
                    <img src="images/Spaceinvaders.webp" alt="Space Invaders" class="game-image">
                    <h3>Space Invaders</h3>
                    <p>Defend Earth from waves of invading aliens.</p>
                </a>
            </div>
            <div class="game">
                <a href="Product.html"> <!-- Link to the product page -->
                    <img src="images/Asteriodsgame.jpg" alt="Asteroids" class="game-image">
                    <h3>Asteroids</h3>
                    <p>Destroy asteroids while avoiding collisions.</p>
                </a>
            </div>
        </div>
        <a href="Product.html" class="view-more-btn">View More Products</a>
    </section>
    

    <footer>
        <p>&copy; 2024 Atari Games. All rights reserved.</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apply Now - Atari Games</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation Bar -->
    <nav>
        <div class="nav-container">
            <div class="logo-container">
                <img src="images/ATARI2.png" alt="Logo" class="logo">
            </div>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="Product.html">Products</a></li>
                <li class="menu-item">
                    <button class="menu-btn">Company Info</button>
                    <ul class="submenu">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="careers.html">Careers</a></li>
                    </ul>
                </li>
                <li class="menu-item">
                    <button class="menu-btn" onclick="toggleEmailSubmenu()">Contact Us</button>
                    <ul class="submenu email-submenu" id="emailSubmenu">
                        <li><a href="mailto:200621192@student.georgianc.on.ca">200621192@student.georgianc.on.ca</a></li>
                        <li><a href="mailto:200602741@student.georgianc.on.ca">200602741@student.georgianc.on.ca</a></li>
                        <li><a href="mailto:200624869@student.georgianc.on.ca">200624869@student.georgianc.on.ca</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Apply Now Header -->
    <header class="apply-header">
        <h1>Apply Now</h1>
        <p>Join the Atari family and contribute to our gaming legacy.</p>
    </header>

    <!-- Application Form -->
    <section class="application-form-section">
        <h2>Submit Your Application</h2>
        <form action="submit_application.php" method="post" enctype="multipart/form-data" class="application-form">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your Full Name" required>
            </div>

            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required>
            </div>

            <div class="form-group">
                <label for="job-position">Job Position</label>
                <select id="job-position" name="job_position" required>
                    <!-- Added empty placeholder option -->
                    <option value="">Select a Position</option>
                    <option value="Game Developer">Game Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Marketing Specialist">Marketing Specialist</option>
                </select>
            </div>

            <div class="form-group">
                <label for="resume">Upload Your Resume (PDF only)</label>
                <input type="file" id="resume" name="resume" accept=".pdf" required>
            </div>

            <div class="form-group">
                <label for="message">Cover Letter</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us why you'd be a great fit"></textarea>
            </div>

            <button type="submit" class="submit-button">Submit Application</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 Atari Games. All rights reserved.</p>
    </footer>

</body>
</html>

