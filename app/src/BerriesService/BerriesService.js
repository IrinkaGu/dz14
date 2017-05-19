angular
    .module('PokemonApp')
    .factory('BerriesService', function($http) {

            return {

                getBerries: function() {
                    return $http.get('http://api.backendless.com/v1/data/berry');
                }

            }

        }

    );
