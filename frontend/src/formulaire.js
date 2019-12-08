import React, {Component} from 'react';
import './App.css';

class Form extends Component
{
    render()
    {
        return(
            <div className="form">
                <h3>Remplir formulaire</h3>

                <div className = "Nom">
                    <label>Nom :</label>
                    <input type="text"></input>
                </div>

                <div className = "Prénom">
                    <label>Prénom :</label>
                    <input type="text"></input>
                </div>

                <div className = "Pays">
                    <label>Pays :</label>
                    <input type="text"></input>
                </div>

                <div className = "Ville">
                    <label>Ville :</label>
                    <input type="text"></input>
                </div>

                <div className = "button">
                    <button>Envoyer</button>
                </div>

            </div>

        );
    }
}
export default Form;