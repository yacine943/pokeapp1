import React from 'react';

export default () => {
    return (
        <div className="c-page">
            <div className="c-choose">
                <div className="c-box">
                    <div className="u-color-white u-mb-lg">Choisissez votre Pokemon</div>
                    <div className="u-d-flex">
                        <img
                            alt="Opponent Pokemon"
                            onClick={() => console.log('TODO')}
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
                        />
                        <img
                            alt="Opponent Pokemon"
                            onClick={() => console.log('TODO')}
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
                        />
                        <img
                            alt="Opponent Pokemon"
                            onClick={() => console.log('TODO')}
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
