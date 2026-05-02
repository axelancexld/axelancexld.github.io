const T = {
    tr: {
        nav:    { about:"Hakkında", features:"Özellikler", download:"İndir", cta:"İndir", mods:"Modlar", tutorial:"Rehber" },
        hero:   { badge:"Minecraft 26.1 · CurseForge Uyumlu", h1:"Kawaii bir", h2:"Minecraft", h3:"deneyimi.", p:"Hello Kitty temalı, pastel renkli bir mod pack. Arkadaşlarınla oyna, inşa et, keşfet.", cta:"Ücretsiz İndir", ghost:"Nasıl kurulur?", sub:"Kart gerekmez. Ücretsiz. Sadece oyna.", scroll:"Aşağı kaydır" },
        stat:   { mods:"Mod", size:"Boyut" },
        card:   { hello:"Hello Kitty Teması", kawaii:"Kawaii Dekorlar", smp:"SMP Optimize" },
        compat: { label:"UYUMLU", cf:"Mod Launcher", win:"Uygulama", mac:"Uygulama", players:"2–10 Oyuncu" },
        about:  { tag:"Hakkında", h:"MellyCraft nedir?", p1:"Hello Kitty ve kawaii dünyasından ilham alan bir Minecraft SMP mod paketidir. Pastel renkler, tatlı dekorasyonlar ve eğlenceli içeriklerle dolu bu pack, arkadaşlarınla birlikte oynamak için tasarlandı.", p2:"CurseForge ile tam uyumlu, kurulumu kolay ve hafif bir yapıya sahip. Sadece indir, import et ve oynamaya başla." },
        mods:   { tag:"Modlar", h:"Pack'te neler var?", sub:"MellyCraft SMP içindeki 20+ mod ile tamamen yeni bir Minecraft deneyimi.", all:"Tümü", cat:{ deco:"Dekorasyon", adv:"Macera", util:"Yardımcı", perf:"Performans" } },
        tut:    { tag:"Kurulum Rehberi", h:"Nasıl kurulur?", sub:"CurseForge Launcher ile MellyCraft'ı 3 adımda kur.",
                  s1:{ title:"My Modpacks ekranını aç", desc:"CurseForge Launcher'ı aç, sol menüden Minecraft'ı seç. \"My Modpacks\" sekmesine gel ve \"Import\" butonuna tıkla." },
                  s2:{ title:"Import'a tıkla", desc:"\"Import Profile\" penceresi açılır. Sol taraftaki \"Import Profile .zip\" seçeneğini kullan ve \"Choose .zip file\" butonuna tıkla." },
                  s3:{ title:"Zip dosyasını seç", desc:"İndirdiğin MellyCraftSMP.zip dosyasını seç. CurseForge otomatik olarak kuracak, bitince oynamaya başlayabilirsin!" },
                  arrow:{ import:"Import'a tıkla", zip:"Choose .zip file butonuna tıkla", select:"MellyCraftSMP.zip dosyasını seç" },
                  tip:"Kurulum tamamlandıktan sonra CurseForge'dan direkt oynayabilirsin." },
        feat:   { tag:"Özellikler", h:"Neden MellyCraft?", t1:"Hello Kitty Teması", d1:"Kawaii bloklar, pastel renkler ve tatlı dekorasyonlarla dolu bir dünya. Her köşede sürpriz var.", t2:"Dekorasyon", d2:"Binlerce yeni eşya ile hayalindeki evi inşa et.", t3:"Macera", d3:"Yeni dungeonlar, bosslar ve keşfedilecek alanlar.", t4:"Multiplayer", d4:"SMP sunucuları için optimize edildi.", t5:"Performans", d5:"Akıcı FPS ve stabil oyun deneyimi." },
        dl:     { tag:"İndir", h:"Oynamaya hazır mısın?", p:"CurseForge Launcher ile birkaç tıkta kur ve oynamaya başla.", ver:"Versiyon", sz:"Boyut", btn:"MellyCraft'ı İndir", stepsTitle:"Kurulum", s1:"CurseForge Launcher'ı indir ve kur", s2:"MellyCraftSMP.zip dosyasını indir", s3:"CurseForge'da \"Import\" butonuna tıkla", s4:"Zip dosyasını seç ve bekle", s5:"Oynamaya başla!" },
        footer: { mc:"Minecraft, Mojang Studios'un markasıdır." }
    },
    en: {
        nav:    { about:"About", features:"Features", download:"Download", cta:"Download", mods:"Mods", tutorial:"Guide" },
        hero:   { badge:"Minecraft 26.1 · CurseForge Compatible", h1:"A kawaii", h2:"Minecraft", h3:"experience.", p:"A Hello Kitty themed, pastel-colored mod pack. Play, build and explore with your friends.", cta:"Download for Free", ghost:"How to install?", sub:"No card required. Free. Just play.", scroll:"Scroll down" },
        stat:   { mods:"Mods", size:"Size" },
        card:   { hello:"Hello Kitty Theme", kawaii:"Kawaii Decor", smp:"SMP Optimized" },
        compat: { label:"COMPATIBLE", cf:"Mod Launcher", win:"App", mac:"App", players:"2–10 Players" },
        about:  { tag:"About", h:"What is MellyCraft?", p1:"A Minecraft SMP mod pack inspired by Hello Kitty and the kawaii world. Filled with pastel colors, cute decorations and fun content, designed to play with friends.", p2:"Fully compatible with CurseForge, easy to install and lightweight. Just download, import and start playing." },
        mods:   { tag:"Mods", h:"What's in the pack?", sub:"A brand new Minecraft experience with 20+ mods inside MellyCraft SMP.", all:"All", cat:{ deco:"Decoration", adv:"Adventure", util:"Utility", perf:"Performance" } },
        tut:    { tag:"Installation Guide", h:"How to install?", sub:"Install MellyCraft in 3 steps with CurseForge Launcher.",
                  s1:{ title:"Open My Modpacks", desc:"Open CurseForge Launcher, select Minecraft from the left menu. Go to the \"My Modpacks\" tab and click the \"Import\" button." },
                  s2:{ title:"Click Import", desc:"The \"Import Profile\" window opens. Use the \"Import Profile .zip\" option on the left and click the \"Choose .zip file\" button." },
                  s3:{ title:"Select the zip file", desc:"Select the MellyCraftSMP.zip file you downloaded. CurseForge will install it automatically — then you're ready to play!" },
                  arrow:{ import:"Click Import", zip:"Click Choose .zip file", select:"Select MellyCraftSMP.zip" },
                  tip:"Once installation is complete, you can play directly from CurseForge." },
        feat:   { tag:"Features", h:"Why MellyCraft?", t1:"Hello Kitty Theme", d1:"A world full of kawaii blocks, pastel colors and cute decorations. Surprises around every corner.", t2:"Decoration", d2:"Build your dream home with thousands of new items.", t3:"Adventure", d3:"New dungeons, bosses and areas to explore.", t4:"Multiplayer", d4:"Optimized for SMP servers.", t5:"Performance", d5:"Smooth FPS and stable gameplay." },
        dl:     { tag:"Download", h:"Ready to play?", p:"Install in a few clicks with CurseForge Launcher and start playing.", ver:"Version", sz:"Size", btn:"Download MellyCraft", stepsTitle:"Installation", s1:"Download and install CurseForge Launcher", s2:"Download MellyCraftSMP.zip", s3:"Click \"Import\" in CurseForge", s4:"Select the zip file and wait", s5:"Start playing!" },
        footer: { mc:"Minecraft is a trademark of Mojang Studios." }
    },
    de: {
        nav:    { about:"Über", features:"Features", download:"Herunterladen", cta:"Herunterladen", mods:"Mods", tutorial:"Anleitung" },
        hero:   { badge:"Minecraft 26.1 · CurseForge Kompatibel", h1:"Ein kawaii", h2:"Minecraft", h3:"Erlebnis.", p:"Ein Hello Kitty-thematisiertes, pastellfarbenes Mod-Pack. Spiele, baue und erkunde mit deinen Freunden.", cta:"Kostenlos herunterladen", ghost:"Wie installieren?", sub:"Keine Karte erforderlich. Kostenlos. Einfach spielen.", scroll:"Nach unten scrollen" },
        stat:   { mods:"Mods", size:"Größe" },
        card:   { hello:"Hello Kitty Thema", kawaii:"Kawaii Dekor", smp:"SMP Optimiert" },
        compat: { label:"KOMPATIBEL", cf:"Mod Launcher", win:"App", mac:"App", players:"2–10 Spieler" },
        about:  { tag:"Über", h:"Was ist MellyCraft?", p1:"Ein Minecraft SMP Mod-Pack, inspiriert von Hello Kitty und der Kawaii-Welt. Gefüllt mit Pastellfarben, süßen Dekorationen und lustigem Inhalt, zum gemeinsamen Spielen mit Freunden.", p2:"Vollständig kompatibel mit CurseForge, einfach zu installieren und leichtgewichtig. Einfach herunterladen, importieren und losspielen." },
        mods:   { tag:"Mods", h:"Was ist im Pack?", sub:"Ein völlig neues Minecraft-Erlebnis mit 20+ Mods in MellyCraft SMP.", all:"Alle", cat:{ deco:"Dekoration", adv:"Abenteuer", util:"Hilfsprogramm", perf:"Performance" } },
        tut:    { tag:"Installationsanleitung", h:"Wie installieren?", sub:"Installiere MellyCraft in 3 Schritten mit dem CurseForge Launcher.",
                  s1:{ title:"My Modpacks öffnen", desc:"Öffne den CurseForge Launcher, wähle Minecraft aus dem linken Menü. Gehe zum Tab \"My Modpacks\" und klicke auf \"Import\"." },
                  s2:{ title:"Import klicken", desc:"Das Fenster \"Import Profile\" öffnet sich. Nutze die Option \"Import Profile .zip\" links und klicke auf \"Choose .zip file\"." },
                  s3:{ title:"Zip-Datei auswählen", desc:"Wähle die heruntergeladene MellyCraftSMP.zip-Datei aus. CurseForge installiert sie automatisch — dann kannst du losspielen!" },
                  arrow:{ import:"Import klicken", zip:"Choose .zip file klicken", select:"MellyCraftSMP.zip auswählen" },
                  tip:"Nach der Installation kannst du direkt über CurseForge spielen." },
        feat:   { tag:"Features", h:"Warum MellyCraft?", t1:"Hello Kitty Thema", d1:"Eine Welt voller Kawaii-Blöcke, Pastellfarben und süßer Dekorationen. Überraschungen an jeder Ecke.", t2:"Dekoration", d2:"Baue dein Traumhaus mit Tausenden neuer Gegenstände.", t3:"Abenteuer", d3:"Neue Dungeons, Bosse und Gebiete zum Erkunden.", t4:"Multiplayer", d4:"Für SMP-Server optimiert.", t5:"Performance", d5:"Flüssige FPS und stabiles Gameplay." },
        dl:     { tag:"Herunterladen", h:"Bereit zu spielen?", p:"Mit dem CurseForge Launcher in wenigen Klicks installieren und losspielen.", ver:"Version", sz:"Größe", btn:"MellyCraft herunterladen", stepsTitle:"Installation", s1:"CurseForge Launcher herunterladen und installieren", s2:"MellyCraftSMP.zip herunterladen", s3:"\"Import\" in CurseForge klicken", s4:"Zip-Datei auswählen und warten", s5:"Losspielen!" },
        footer: { mc:"Minecraft ist eine Marke von Mojang Studios." }
    },
    es: {
        nav:    { about:"Acerca de", features:"Características", download:"Descargar", cta:"Descargar", mods:"Mods", tutorial:"Guía" },
        hero:   { badge:"Minecraft 26.1 · Compatible con CurseForge", h1:"Una kawaii", h2:"Minecraft", h3:"experiencia.", p:"Un mod pack temático de Hello Kitty con colores pastel. Juega, construye y explora con tus amigos.", cta:"Descargar gratis", ghost:"¿Cómo instalar?", sub:"Sin tarjeta. Gratis. Solo juega.", scroll:"Desplázate hacia abajo" },
        stat:   { mods:"Mods", size:"Tamaño" },
        card:   { hello:"Tema Hello Kitty", kawaii:"Decoración Kawaii", smp:"Optimizado SMP" },
        compat: { label:"COMPATIBLE", cf:"Mod Launcher", win:"Aplicación", mac:"Aplicación", players:"2–10 Jugadores" },
        about:  { tag:"Acerca de", h:"¿Qué es MellyCraft?", p1:"Un mod pack de Minecraft SMP inspirado en Hello Kitty y el mundo kawaii. Lleno de colores pastel, decoraciones lindas y contenido divertido, diseñado para jugar con amigos.", p2:"Totalmente compatible con CurseForge, fácil de instalar y ligero. Solo descarga, importa y empieza a jugar." },
        mods:   { tag:"Mods", h:"¿Qué hay en el pack?", sub:"Una experiencia de Minecraft completamente nueva con más de 20 mods en MellyCraft SMP.", all:"Todos", cat:{ deco:"Decoración", adv:"Aventura", util:"Utilidad", perf:"Rendimiento" } },
        tut:    { tag:"Guía de instalación", h:"¿Cómo instalar?", sub:"Instala MellyCraft en 3 pasos con CurseForge Launcher.",
                  s1:{ title:"Abrir My Modpacks", desc:"Abre CurseForge Launcher, selecciona Minecraft en el menú izquierdo. Ve a la pestaña \"My Modpacks\" y haz clic en \"Import\"." },
                  s2:{ title:"Clic en Import", desc:"Se abre la ventana \"Import Profile\". Usa la opción \"Import Profile .zip\" a la izquierda y haz clic en \"Choose .zip file\"." },
                  s3:{ title:"Seleccionar el archivo zip", desc:"Selecciona el archivo MellyCraftSMP.zip que descargaste. CurseForge lo instalará automáticamente — ¡luego puedes jugar!" },
                  arrow:{ import:"Clic en Import", zip:"Clic en Choose .zip file", select:"Seleccionar MellyCraftSMP.zip" },
                  tip:"Una vez completada la instalación, puedes jugar directamente desde CurseForge." },
        feat:   { tag:"Características", h:"¿Por qué MellyCraft?", t1:"Tema Hello Kitty", d1:"Un mundo lleno de bloques kawaii, colores pastel y decoraciones lindas. Sorpresas en cada esquina.", t2:"Decoración", d2:"Construye la casa de tus sueños con miles de nuevos objetos.", t3:"Aventura", d3:"Nuevas mazmorras, jefes y áreas para explorar.", t4:"Multijugador", d4:"Optimizado para servidores SMP.", t5:"Rendimiento", d5:"FPS fluido y experiencia de juego estable." },
        dl:     { tag:"Descargar", h:"¿Listo para jugar?", p:"Instala en pocos clics con CurseForge Launcher y empieza a jugar.", ver:"Versión", sz:"Tamaño", btn:"Descargar MellyCraft", stepsTitle:"Instalación", s1:"Descarga e instala CurseForge Launcher", s2:"Descarga MellyCraftSMP.zip", s3:"Haz clic en \"Import\" en CurseForge", s4:"Selecciona el archivo zip y espera", s5:"¡Empieza a jugar!" },
        footer: { mc:"Minecraft es una marca registrada de Mojang Studios." }
    },
    pt: {
        nav:    { about:"Sobre", features:"Recursos", download:"Baixar", cta:"Baixar", mods:"Mods", tutorial:"Guia" },
        hero:   { badge:"Minecraft 26.1 · Compatível com CurseForge", h1:"Uma kawaii", h2:"Minecraft", h3:"experiência.", p:"Um mod pack temático de Hello Kitty com cores pastel. Jogue, construa e explore com seus amigos.", cta:"Baixar de graça", ghost:"Como instalar?", sub:"Sem cartão. Grátis. Só jogue.", scroll:"Role para baixo" },
        stat:   { mods:"Mods", size:"Tamanho" },
        card:   { hello:"Tema Hello Kitty", kawaii:"Decoração Kawaii", smp:"Otimizado SMP" },
        compat: { label:"COMPATÍVEL", cf:"Mod Launcher", win:"Aplicativo", mac:"Aplicativo", players:"2–10 Jogadores" },
        about:  { tag:"Sobre", h:"O que é MellyCraft?", p1:"Um mod pack de Minecraft SMP inspirado em Hello Kitty e o mundo kawaii. Cheio de cores pastel, decorações fofas e conteúdo divertido, projetado para jogar com amigos.", p2:"Totalmente compatível com CurseForge, fácil de instalar e leve. Só baixe, importe e comece a jogar." },
        mods:   { tag:"Mods", h:"O que tem no pack?", sub:"Uma experiência completamente nova no Minecraft com mais de 20 mods no MellyCraft SMP.", all:"Todos", cat:{ deco:"Decoração", adv:"Aventura", util:"Utilitário", perf:"Desempenho" } },
        tut:    { tag:"Guia de instalação", h:"Como instalar?", sub:"Instale o MellyCraft em 3 passos com o CurseForge Launcher.",
                  s1:{ title:"Abrir My Modpacks", desc:"Abra o CurseForge Launcher, selecione Minecraft no menu esquerdo. Vá para a aba \"My Modpacks\" e clique em \"Import\"." },
                  s2:{ title:"Clicar em Import", desc:"A janela \"Import Profile\" abre. Use a opção \"Import Profile .zip\" à esquerda e clique em \"Choose .zip file\"." },
                  s3:{ title:"Selecionar o arquivo zip", desc:"Selecione o arquivo MellyCraftSMP.zip que você baixou. O CurseForge instalará automaticamente — depois é só jogar!" },
                  arrow:{ import:"Clicar em Import", zip:"Clicar em Choose .zip file", select:"Selecionar MellyCraftSMP.zip" },
                  tip:"Após a instalação, você pode jogar diretamente pelo CurseForge." },
        feat:   { tag:"Recursos", h:"Por que MellyCraft?", t1:"Tema Hello Kitty", d1:"Um mundo cheio de blocos kawaii, cores pastel e decorações fofas. Surpresas em cada canto.", t2:"Decoração", d2:"Construa a casa dos seus sonhos com milhares de novos itens.", t3:"Aventura", d3:"Novas masmorras, chefes e áreas para explorar.", t4:"Multijogador", d4:"Otimizado para servidores SMP.", t5:"Desempenho", d5:"FPS fluido e experiência de jogo estável." },
        dl:     { tag:"Baixar", h:"Pronto para jogar?", p:"Instale em poucos cliques com o CurseForge Launcher e comece a jogar.", ver:"Versão", sz:"Tamanho", btn:"Baixar MellyCraft", stepsTitle:"Instalação", s1:"Baixe e instale o CurseForge Launcher", s2:"Baixe o MellyCraftSMP.zip", s3:"Clique em \"Import\" no CurseForge", s4:"Selecione o arquivo zip e aguarde", s5:"Comece a jogar!" },
        footer: { mc:"Minecraft é uma marca registrada da Mojang Studios." }
    },
    nl: {
        nav:    { about:"Over", features:"Functies", download:"Downloaden", cta:"Downloaden", mods:"Mods", tutorial:"Gids" },
        hero:   { badge:"Minecraft 26.1 · CurseForge Compatibel", h1:"Een kawaii", h2:"Minecraft", h3:"ervaring.", p:"Een Hello Kitty-thematisch mod pack met pastelkleuren. Speel, bouw en verken met je vrienden.", cta:"Gratis downloaden", ghost:"Hoe installeren?", sub:"Geen kaart vereist. Gratis. Gewoon spelen.", scroll:"Scroll naar beneden" },
        stat:   { mods:"Mods", size:"Grootte" },
        card:   { hello:"Hello Kitty Thema", kawaii:"Kawaii Decoratie", smp:"SMP Geoptimaliseerd" },
        compat: { label:"COMPATIBEL", cf:"Mod Launcher", win:"Applicatie", mac:"Applicatie", players:"2–10 Spelers" },
        about:  { tag:"Over", h:"Wat is MellyCraft?", p1:"Een Minecraft SMP mod pack geïnspireerd door Hello Kitty en de kawaii-wereld. Vol pastelkleuren, schattige decoraties en leuke inhoud, ontworpen om met vrienden te spelen.", p2:"Volledig compatibel met CurseForge, eenvoudig te installeren en lichtgewicht. Gewoon downloaden, importeren en beginnen met spelen." },
        mods:   { tag:"Mods", h:"Wat zit er in het pack?", sub:"Een geheel nieuwe Minecraft-ervaring met 20+ mods in MellyCraft SMP.", all:"Alles", cat:{ deco:"Decoratie", adv:"Avontuur", util:"Hulpprogramma", perf:"Prestaties" } },
        tut:    { tag:"Installatiegids", h:"Hoe installeren?", sub:"Installeer MellyCraft in 3 stappen met de CurseForge Launcher.",
                  s1:{ title:"My Modpacks openen", desc:"Open de CurseForge Launcher, selecteer Minecraft in het linkermenu. Ga naar het tabblad \"My Modpacks\" en klik op \"Import\"." },
                  s2:{ title:"Klik op Import", desc:"Het venster \"Import Profile\" opent. Gebruik de optie \"Import Profile .zip\" links en klik op \"Choose .zip file\"." },
                  s3:{ title:"Zip-bestand selecteren", desc:"Selecteer het gedownloade MellyCraftSMP.zip-bestand. CurseForge installeert het automatisch — dan kun je spelen!" },
                  arrow:{ import:"Klik op Import", zip:"Klik op Choose .zip file", select:"Selecteer MellyCraftSMP.zip" },
                  tip:"Na de installatie kun je direct spelen via CurseForge." },
        feat:   { tag:"Functies", h:"Waarom MellyCraft?", t1:"Hello Kitty Thema", d1:"Een wereld vol kawaii-blokken, pastelkleuren en schattige decoraties. Verrassingen om elke hoek.", t2:"Decoratie", d2:"Bouw je droomhuis met duizenden nieuwe items.", t3:"Avontuur", d3:"Nieuwe dungeons, bazen en gebieden om te verkennen.", t4:"Multiplayer", d4:"Geoptimaliseerd voor SMP-servers.", t5:"Prestaties", d5:"Vloeiende FPS en stabiele spelervaring." },
        dl:     { tag:"Downloaden", h:"Klaar om te spelen?", p:"Installeer in een paar klikken met CurseForge Launcher en begin met spelen.", ver:"Versie", sz:"Grootte", btn:"MellyCraft downloaden", stepsTitle:"Installatie", s1:"Download en installeer CurseForge Launcher", s2:"Download MellyCraftSMP.zip", s3:"Klik op \"Import\" in CurseForge", s4:"Selecteer het zip-bestand en wacht", s5:"Begin met spelen!" },
        footer: { mc:"Minecraft is een handelsmerk van Mojang Studios." }
    }
};

let lang = localStorage.getItem('mc-lang') || 'en';

function get(l, key) {
    return key.split('.').reduce((o,k) => o?.[k], T[l]) ?? null;
}

function applyLang(l) {
    lang = l;
    localStorage.setItem('mc-lang', l);
    document.documentElement.lang = l;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = get(l, el.dataset.i18n);
        if (!val) return;
        const hasSVG = el.querySelector('svg');
        if (hasSVG) {
            for (const node of el.childNodes) {
                if (node.nodeType === 3 && node.textContent.trim()) {
                    node.textContent = val;
                    return;
                }
            }
            return;
        }
        el.textContent = val;
    });

    const cur = document.getElementById('langCurrent');
    if (cur) cur.textContent = l.toUpperCase();
    document.querySelectorAll('.lm-item').forEach(b =>
        b.classList.toggle('active', b.dataset.lang === l)
    );
}

document.addEventListener('DOMContentLoaded', () => {
    applyLang(lang);

    const toggle   = document.getElementById('langToggle');
    const dropdown = toggle?.closest('.lang-dropdown');

    toggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        dropdown?.classList.remove('open');
    });

    document.querySelectorAll('.lm-item').forEach(b => {
        b.addEventListener('click', () => {
            applyLang(b.dataset.lang);
            dropdown?.classList.remove('open');
        });
    });
});
