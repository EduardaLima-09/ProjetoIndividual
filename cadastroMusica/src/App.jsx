import React, { useState, useEffect } from 'react'
import api from './servicos/Api'
import estilos from './App.module.css'

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
  const [editandoId, setEditandoId] = useState(null)

  const carregarAlbuns = async () => {
    setCarregando(true)
    try {
      const response = await api.get('/albuns')
      setAlbuns(response.data)
      setMensagem('')
    } catch (error) {
      setMensagem('Erro ao carregar lista')
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    carregarAlbuns()
  }, [])

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensagem('')

    if (!formulario.titulo.trim() || !formulario.artista.trim() || 
        !formulario.genero.trim() || !formulario.ano) {
      setMensagem('Preencha todos os campos obrigatórios')
      return
    }

    try {
      if (editandoId) {
        await api.put(`/albuns/${editandoId}`, {
          ...formulario,
          ano: parseInt(formulario.ano)
        })
        setMensagem('Álbum atualizado!')
        setEditandoId(null)
      } else {
        await api.post('/albuns', {
          ...formulario,
          ano: parseInt(formulario.ano)
        })
        setMensagem('Álbum cadastrado!')
      }
      
      setFormulario({ titulo: '', artista: '', genero: '', ano: '', gravadora: '' })
      carregarAlbuns()
    } catch (error) {
      if (error.response?.status === 409) {
        setMensagem('Já existe este álbum')
      } else {
        setMensagem('Erro ao salvar')
      }
    }
  }

  const handleEditar = (album) => {
    setFormulario({
      titulo: album.titulo,
      artista: album.artista,
      genero: album.genero,
      ano: album.ano.toString(),
      gravadora: album.gravadora || ''
    })
    setEditandoId(album.id)
  }

  const handleRemover = async (id) => {
    if (!confirm('Remover este álbum?')) return
    
    try {
      await api.delete(`/albuns/${id}`)
      setMensagem('Álbum removido!')
      carregarAlbuns()
    } catch (error) {
      setMensagem('Erro ao remover')
    }
  }

  const cancelarEdicao = () => {
    setFormulario({ titulo: '', artista: '', genero: '', ano: '', gravadora: '' })
    setEditandoId(null)
  }

  return (
    <div className={estilos.container}>
      <div className={estilos.header}>
        <h1>🎵 Catálogo</h1>
        <p className={estilos.subtitulo}>seus álbuns favoritos</p>
      </div>

      {mensagem && (
        <div className={`${estilos.mensagem} ${mensagem.includes('sucesso') || mensagem.includes('atualizado') || mensagem.includes('removido') ? estilos.sucesso : estilos.erro}`}>
          {mensagem}
        </div>
      )}

      <div className={estilos.card}>
        <h2>{editandoId ? '✏️ Editar' : '📝 Novo'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className={estilos.linha}>
            <input 
              name="titulo" 
              placeholder="Título *" 
              value={formulario.titulo} 
              onChange={handleChange} 
              required 
            />
            <input 
              name="artista" 
              placeholder="Artista *" 
              value={formulario.artista} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className={estilos.linha}>
            <select name="genero" value={formulario.genero} onChange={handleChange} required>
              <option value="">Gênero *</option>
              <option value="Rock">🎸 Rock</option>
              <option value="MPB">🎵 MPB</option>
              <option value="Samba">🥁 Samba</option>
              <option value="Pagode">🎶 Pagode</option>
              <option value="Funk">🕺 Funk</option>
              <option value="Pop">🎤 Pop</option>
              <option value="Eletrônica">🎛️ Eletrônica</option>
              <option value="Jazz">🎷 Jazz</option>
              <option value="Clássica">🎻 Clássica</option>
              <option value="Outro">🎧 Outro</option>
            </select>

            <input 
              name="ano" 
              type="number" 
              placeholder="Ano *" 
              value={formulario.ano} 
              onChange={handleChange} 
              min="1900" 
              max="2026" 
              required 
            />
          </div>
          
          <div className={estilos.linha}>
            <input 
              name="gravadora" 
              placeholder="Gravadora" 
              value={formulario.gravadora} 
              onChange={handleChange} 
            />
            <div className={estilos.botoes}>
              <button type="submit" className={estilos.btnSalvar}>
                {editandoId ? '💾 Atualizar' : '💾 Cadastrar'}
              </button>
              {editandoId && (
                <button type="button" onClick={cancelarEdicao} className={estilos.btnCancelar}>
                  ✖
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      <div className={estilos.card}>
        <div className={estilos.tituloLista}>
          <h2>📀 Álbuns</h2>
          <span className={estilos.contador}>{albuns.length}</span>
        </div>
        
        {carregando ? (
          <p className={estilos.carregando}>🎵 Carregando...</p>
        ) : albuns.length === 0 ? (
          <p className={estilos.vazio}>🎶 Nenhum álbum cadastrado</p>
        ) : (
          <div className={estilos.tabelaContainer}>
            <table className={estilos.tabela}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                  <th>Artista</th>
                  <th>Gênero</th>
                  <th>Ano</th>
                  <th>Gravadora</th>
                  <th className={estilos.colAcoes}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {albuns.map((album) => (
                  <tr key={album.id}>
                    <td>{album.id}</td>
                    <td><strong>{album.titulo}</strong></td>
                    <td>{album.artista}</td>
                    <td><span className={estilos.generoTag}>{album.genero}</span></td>
                    <td>{album.ano}</td>
                    <td>{album.gravadora || '-'}</td>
                    <td className={estilos.colAcoes}>
                      <button onClick={() => handleEditar(album)} className={estilos.btnEditar}>✏️</button>
                      <button onClick={() => handleRemover(album.id)} className={estilos.btnRemover}>🗑️</button>
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