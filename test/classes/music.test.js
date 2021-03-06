
import assert from 'assert'
import { Music } from '../../api/classes/music.mjs'

describe('Music class', function () {

  describe('exists()', function () {
    it('checar se é possível criar o objeto', function () {
      var query = {
        name: 'my_sample_name'
      }
      var music = new Music(query)

      assert.notEqual(typeof(music), 'undefined')
    });

    it('checar se é possível criar um objeto sem query', function () {
      // não foi passado o argumento query para o construtor,
      // logo o objeto criado não vai ter nenhum atributo
      // o que torna o atributo name igual a undefined

      var music = new Music()

      assert.equal(typeof(music.name), 'undefined')

    });
  });

  describe('create()', function () {
    it('checar se é possível inserir o objeto no banco de dados', async function () {
      var query = {
        name: 'my_sample_name'
      }
      var h1 = new Music(query)
      const res = await h1.create()

      assert.equal(res, true)
    });
  });

  describe('delete()', function () {
    it('checar se é possível deletar o objeto no banco de dados', async function () {
      var query = {
        name: 'my_sample_name'
      }
      var h1 = new Music(query)
      const res = await h1.delete()

      assert.equal(res, true)
    });
  });

  describe('update()', function () {
    it('checar se é possível atualizar o objeto no banco de dados', async function () {
      var query = {
        name: 'my_sample_name'
      }
      var h1 = new Music(query)
      h1.create()

      h1.agillity = 10
      const res = await h1.update()

      assert.equal(res, true)
    });

    it('checar se é possível atualizar um documento que não existes no banco de dados', async function () {
      var query = {
        name: 'non_existing_document'
      }
      var h1 = new Music(query)
      h1.agillity = 10

      const res = await h1.update()

      assert.equal(res, false)
    });
  });

});