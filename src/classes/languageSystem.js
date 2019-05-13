 class LanguageSystem{
    constructor(_language){
        language = _language;
    }

    translate(text){
        if(this.language === 'es'){
            return this.spanishTranslator(text);
        }
        return text;
    }

    spanishTranslator(text){
        if(text === 'Score: '){
            return 'Puntaje: ';
        }
        if(text === 'Game Over!'){
            return 'Fin del juego!';
        }
        if(text === 'Press any key to play again'){
            return 'Presione cualquier tecla para jugar nuevamente';
        }
        if(text === 'Player '){
            return 'Jugador ';
        }
        if(text === 'won!'){
            return 'ganó!';
        }
        if(text === 'Health: '){
            return 'Vida: ';
        }
        if(text === 'Angle: '){
            return 'Ángulo: ';
        }
        return text;
    }
 }

 module.exports = LanguageSystem;