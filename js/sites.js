var sidebar = document.getElementById('sidebar');
var showSidebar = false;
var main = document.querySelector('main');
var header = document.querySelector('header');

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        sidebar.style.marginLeft = '0';
        main.style.filter = 'blur(2px)';
    } else {
        sidebar.style.marginLeft = '-100vw';
        main.style.filter = 'none';
    }
}

function closeSidebar() {
    toggleSidebar();
}

// Função para animação da header quando ocorrer a rolagem
const shrinkOn = 10; // Distância em pixels para iniciar a animação

window.addEventListener('scroll', () => {
    if (window.scrollY > shrinkOn) {
        header.classList.add('shrink');
        sidebar.classList.add('shrink');
        main.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
        sidebar.classList.remove('shrink');
        main.classList.remove('shrink');
    }
});

function expandGrupo(selectedGrupo) {
    const grupos = document.querySelectorAll('.grupo');

    grupos.forEach(grupo => {
        const conteudo = grupo.querySelector('.grupo-conteudo');
        const hr = grupo.querySelector('.grupo-hr');

        if (grupo === selectedGrupo) {
            const isExpanded = grupo.classList.toggle('expanded');
            conteudo.classList.toggle('expanded', isExpanded);
            hr.classList.toggle('expanded', isExpanded);
        } else {
            grupo.classList.remove('expanded');
            conteudo.classList.remove('expanded');
            hr.classList.remove('expanded');
        }
    });
}