# Portifolio
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portifólio de Luan Lima</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Olá, me chamo Luan</h1>
            <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
            <nav>
                <ul>
                    <li><a href="#about">Sobre Mim</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>

<main>
    <section id="about" class="container">
        <h2>Sobre Mim</h2>
        <P>Sou um estudante apaixonado por tecnologia e desenvovimento de software.</P>
    </section>
    
    <section id="skills" class="container">
        <h2>Habilidades</h2>
       <div class="skills-container">
        <div class="skill">Python</div>>
        <div class="skill">JavaScript</div>
        <div class="skill">HTML/CSS></div>
        <div class="skill">React</div>
        <div class="skiil">Node.js</div>
       </div> 
    </section>
    
    <section id="Projects" class="container">
        <h2>Projetos</h2>
        <div class="Projects">
            <h3>Projeto 1<h3>
                <p>Descrição do Projeto.</p>
                <a href="https://github.com/seurepositorio" target="_blank">Ver no GitHub</a>
        </div>
        <!--Aqui mais projetos se necessario-->>
        </section>
        
        <section id="experience" class="container">
            <h2>Experiencia<h2>
            <p>Detalhes sobre sua Experiencia academica e profissional.</p>
        </section> 
        
        <section id="contact" class="container">
            <h2>Contato</h2>
            <form id ="contactForm">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>

                <lable for="email">email</lable>>
                <input type="email" id="email" name="email" required>

                <label for="message">Mensagem:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Enviar</button>
                </form>
                <div id="responseMessage"></div>
        </section>
        
</main>

<footer>
    <div class="container">
        <p>$copy; 2024 Luan Lima. Todos os direitos reservados.</p>
    </div>
    </footer>
    
    <script src="script.js"></script>
</body>     
</html>
