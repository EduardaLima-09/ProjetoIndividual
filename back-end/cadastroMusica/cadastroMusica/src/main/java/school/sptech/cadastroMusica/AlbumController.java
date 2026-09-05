package school.sptech.cadastroMusica;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@RestController
@RequestMapping("/albuns")
@CrossOrigin(origins = "http://localhost:5173/")
public class AlbumController {

    private final JdbcTemplate template;

    public AlbumController(JdbcTemplate template) {
        this.template = template;
    }

    @GetMapping
    public ResponseEntity<List<Album>> listar() {
        String sql = "SELECT * FROM album";
        List<Album> albuns = template.query(sql, new BeanPropertyRowMapper<>(Album.class));
        return ResponseEntity.ok(albuns);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Album> buscarPorId(@PathVariable Integer id) {
        String sql = "SELECT * FROM album WHERE id = ?";

        try {
            Album album = template.queryForObject(sql, new BeanPropertyRowMapper<>(Album.class), id);
            return ResponseEntity.status(200).body(album);
        } catch (EmptyResultDataAccessException exception) {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping
    public ResponseEntity<Album> cadastrar(@RequestBody Album album) {
        if (album.getTitulo() == null || album.getTitulo().isBlank()
                || album.getArtista() == null || album.getArtista().isBlank()
                || album.getGenero() == null || album.getGenero().isBlank()
                || album.getAno() == null || album.getAno() < 1900 || album.getAno() > 2026) {
            return ResponseEntity.status(400).build();
        }

        String sqlBusca = """
            SELECT *
            FROM album
            WHERE LOWER(titulo) = LOWER(?)
            AND LOWER(artista) = LOWER(?)
            """;

        List<Album> albuns = template.query(sqlBusca, new BeanPropertyRowMapper<>(Album.class), album.getTitulo(), album.getArtista());

        if (!albuns.isEmpty()) {
            return ResponseEntity.status(409).body(album);
        }

        String sql = "INSERT INTO album (titulo, artista, genero, ano, gravadora) VALUES (?, ?, ?, ?, ?)";

        KeyHolder holder = new GeneratedKeyHolder();

        template.update(connection -> {
            PreparedStatement statement = connection.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );

            statement.setString(1, album.getTitulo());
            statement.setString(2, album.getArtista());
            statement.setString(3, album.getGenero());
            statement.setInt(4, album.getAno());
            statement.setString(5, album.getGravadora());

            return statement;
        }, holder);

        album.setId(holder.getKey().intValue());

        return ResponseEntity.status(201).body(album);
    }

    private boolean existePorId(int id) {
        String sql = """
        SELECT COUNT(*)
        FROM album
        WHERE id = ?
        """;

        Integer quantidade = template.queryForObject(
                sql,
                Integer.class,
                id
        );

        return quantidade != null && quantidade > 0;
    }

    private boolean existeAlbumComMesmoTituloEArtista(
            String titulo,
            String artista,
            int id
    ) {
        String sql = """
        SELECT COUNT(*)
        FROM album
        WHERE LOWER(titulo) = LOWER(?)
        AND LOWER(artista) = LOWER(?)
        AND id <> ?
        """;

        Integer quantidade = template.queryForObject(
                sql,
                Integer.class,
                titulo,
                artista,
                id
        );

        return quantidade != null && quantidade > 0;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Album> atualizar(
            @RequestBody Album album,
            @PathVariable int id
    ) {
        if (!existePorId(id)) {
            return ResponseEntity.status(404).build();
        }

        if (album.getTitulo() == null || album.getTitulo().isBlank()
                || album.getArtista() == null || album.getArtista().isBlank()
                || album.getGenero() == null || album.getGenero().isBlank()
                || album.getAno() == null || album.getAno() < 1900 || album.getAno() > 2026) {
            return ResponseEntity.status(400).build();
        }

        if (existeAlbumComMesmoTituloEArtista(
                album.getTitulo(),
                album.getArtista(),
                id)) {
            return ResponseEntity.status(409).build();
        }

        String sql = "UPDATE album SET titulo = ?, artista = ?, genero = ?, ano = ?, gravadora = ? WHERE id = ?";

        template.update(sql,
                album.getTitulo(),
                album.getArtista(),
                album.getGenero(),
                album.getAno(),
                album.getGravadora(),
                id
        );

        album.setId(id);
        return ResponseEntity.status(200).body(album);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable int id) {
        if (!existePorId(id)) {
            return ResponseEntity.status(404).build();
        }

        String sql = "DELETE FROM album WHERE id = ?";
        template.update(sql, id);
        return ResponseEntity.status(204).build();
    }
}