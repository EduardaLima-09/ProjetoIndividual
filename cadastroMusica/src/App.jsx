/* APP.JSX FINALIZADO*/
import React, { useState, useEffect } from 'react'
import api from './servicos/Api'
import styles from './App.module.css'

function App() {

  const [albuns, setAlbuns] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [mensagem, setMensagem] = useState('')

  const [formulario, setFormulario] = useState({
    titulo: '',
    artista: '',
    genero: '',
    ano: '',
    gravadora: ''
  })

  const [idEditando, setIdEditando] = useState(null)

  const listarAlbuns = async () => {
    setCarregando(true)
    try {
      const resposta = await api.get('/albuns')
      setAlbuns(resposta.data)
      setMensagem('')

    } catch (erro) {
      setMensagem('Erro ao carregar lista')
    } finally {
      setCarregando(false)

    }
  }

  useEffect(() => {listarAlbuns()}, [])

  const alterarCampo = (evento) => {setFormulario({...formulario,[evento.target.name]: evento.target.value})}

  const enviarFormulario = async (evento) => {
    evento.preventDefault()

    setMensagem('')

    if (
      !formulario.titulo.trim() ||
      !formulario.artista.trim() ||
      !formulario.genero.trim() ||
      !formulario.ano
    ) {
      setMensagem('Preencha todos os campos obrigatórios')
      return
    }


    try {
      if (idEditando) {
        await api.put(`/albuns/${idEditando}`, {...formulario,
          ano: parseInt(formulario.ano)
        })
        setMensagem('Álbum atualizado!')
        setIdEditando(null)
      } else {
        await api.post('/albuns', {...formulario,
          ano: parseInt(formulario.ano)
        })

        setMensagem('Álbum cadastrado!')
      }

      setFormulario({
        titulo: '',
        artista: '',
        genero: '',
        ano: '',
        gravadora: ''
      })

      listarAlbuns()


    } catch (erro) {

      if (erro.response?.status === 409) {
        setMensagem('Já existe este álbum')
      } else {
        setMensagem('Erro ao salvar')
      }
    }
  }

  const editarAlbum = (album) => {

    setFormulario({
      titulo: album.titulo,
      artista: album.artista,
      genero: album.genero,
      ano: album.ano.toString(),
      gravadora: album.gravadora || ''
    })
    setIdEditando(album.id)
  }

  const removerAlbum = async (id) => {
    if (!confirm('Remover este álbum?')) {
      return
    }
    try {
      await api.delete(`/albuns/${id}`)
      setMensagem('Álbum removido!')
      listarAlbuns()
    } catch (erro) {
      setMensagem('Erro ao remover')
    }
  }

  const cancelarEdicao = () => {
    setFormulario({
      titulo: '',
      artista: '',
      genero: '',
      ano: '',
      gravadora: ''

    })
    setIdEditando(null)
  }


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Catálogo de álbuns</h1>
        <p className={styles.subtitulo}>
          seus álbuns favoritos no mesmo lugar
        </p>
      </div>
      {mensagem && (
        <div
          className={`${styles.mensagem} ${
            mensagem.includes('atualizado') ||
            mensagem.includes('removido') ||
            mensagem.includes('cadastrado')
              ? styles.sucesso
              : styles.erro
          }`}
        >
          {mensagem}
        </div>
      )}

      {/* Formulário começa aqui*/}
      <div className={styles.card}>

        <h2>
          {idEditando ? 'Editar Álbum' : 'Novo Álbum'}
        </h2>


        <form onSubmit={enviarFormulario}>

          <div className={styles.linha}>
            <input name="titulo" placeholder="Título" value={formulario.titulo} onChange={alterarCampo} required/>
            <input name="artista" placeholder="Artista" value={formulario.artista} onChange={alterarCampo} required/>
          </div>

          <div className={styles.linha}>
            <select name="genero" value={formulario.genero} onChange={alterarCampo} required>
              <option value="">Gênero</option>
              <option value="Rock">Rock</option>
              <option value="MPB">MPB</option>
              <option value="Samba">Samba</option>
              <option value="Pagode">Pagode</option>
              <option value="Funk">Funk</option>
              <option value="Pop">Pop</option>
              <option value="Eletrônica">Eletrônica</option>
              <option value="Jazz">Jazz</option>
              <option value="Clássica">Clássica</option>
              <option value="Outro">Outro</option>
            </select>

            <input name="ano" type="number" placeholder="Ano" value={formulario.ano}
              onChange={alterarCampo} min="1900" max="2026" required/>
          </div>


          <div className={styles.linha}>
            <input name="gravadora" placeholder="Gravadora" value={formulario.gravadora} onChange={alterarCampo}/>
            <div className={styles.botoes}>
              <button type="submit" className={styles.btnSalvar}>
                {idEditando ? 'Atualizar': 'Cadastrar'}
              </button>
              {idEditando && (
                <button type="button" onClick={cancelarEdicao} className={styles.btnCancelar}>✖</button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Lista de álbuns começa aqui */}
      <div className={styles.card}>
        <div className={styles.tituloLista}>
          <h2>Seus Álbuns</h2>
          <span className={styles.contador}>{albuns.length}</span>
        </div>

        {carregando ? (
          <p className={styles.carregando}>Carregando...</p>
        ) : albuns.length === 0 ? (
          <p className={styles.vazio}>Nenhum álbum cadastrado</p>
        ) : (
          <div className={styles.tabelaContainer}>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Artista</th>
                  <th>Gênero</th>
                  <th>Ano</th>
                  <th>Gravadora</th>
                  <th className={styles.colAcoes}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {albuns.map((album) => (
                  <tr key={album.id}>
                    <td>{album.id}</td>
                    <td><strong>{album.titulo}</strong></td>
                    <td>{album.artista}</td>
                    <td><span className={styles.generoTag}>{album.genero}</span></td>
                    <td>{album.ano}</td>
                    <td>{album.gravadora || '-'}</td>
                    <td className={styles.colAcoes}>
                      <button onClick={() => editarAlbum(album)}
                        className={styles.btnEditar}>
                      </button>
                      <button
                        onClick={() => removerAlbum(album.id)}
                        className={styles.btnRemover}>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
