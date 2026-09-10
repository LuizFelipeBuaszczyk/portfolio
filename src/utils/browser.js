export function get_default_language() {
    const navigatorLanguages = navigator.languages[0];

    switch(navigatorLanguages) { 
        case 'pt-BR': 
            return 'pt-br';
        default:
            return 'en-us';
    }
}


