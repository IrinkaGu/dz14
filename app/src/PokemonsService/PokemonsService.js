angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {
			$http.defaults.headers.common = {
				"application-id": "0E51D589-DE30-9097-FFC6-7C71C4407800",
				"secret-key": "36F7953C-049A-2213-FF62-5F6FB1BD6600"
			};
 
            return {

                getPokemons: function() {
                    return $http.get('http://api.backendless.com/v1/data/pokemon');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('http://api.backendless.com/v1/data/pokemon/' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon/',
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                    });
                },
				
				editPokemon: function(id, pokemonData) {
                    return $http({
                        method: 'PUT',
                        url: 'http://api.backendless.com/v1/data/pokemon/' + id,
                        data: pokemonData
                    });
                }

            }

        }

    );
