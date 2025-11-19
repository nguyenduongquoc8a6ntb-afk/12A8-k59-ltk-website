body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f5f5f5;
}

header {
    background: #0077ff;
    color: white;
    padding: 20px;
    text-align: center;
}

nav {
    display: flex;
    background: #222;
}

nav a {
    color: white;
    padding: 15px;
    text-decoration: none;
    flex: 1;
    text-align: center;
}

nav a:hover {
    background: #444;
}

.section {
    padding: 30px;
    background: white;
    margin: 20px;
    border-radius: 10px;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.gallery img {
    width: 100%;
    border-radius: 10px;
}

#member-list li {
    margin-bottom: 8px;
}

