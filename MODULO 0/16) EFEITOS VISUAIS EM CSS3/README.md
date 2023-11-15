# EFEITOS VISUAIS EM CSS3
CSS3 oferece uma variedade de efeitos visuais que podem ser aplicados a elementos HTML para melhorar a experiência do usuário. Abaixo estão alguns exemplos básicos de efeitos visuais usando CSS3:

## 1. **Sombras (box-shadow):**
Adiciona uma sombra a um elemento.

```css
.exemplo-sombra {
    box-shadow: 5px 5px 10px #888888;
}
```

- `5px`: Deslocamento horizontal da sombra.
- `5px`: Deslocamento vertical da sombra.
- `10px`: Desfoque da sombra.
- `#888888`: Cor da sombra em formato hexadecimal.

## 2. **Bordas Arredondadas (border-radius):**
Arredonda as bordas de um elemento.

```css
.exemplo-bordas-arredondadas {
    border-radius: 10px;
}
```

- `10px`: Raio da borda arredondada.

## 3. **Transições (transition):**
Adiciona efeitos de transição suaves a propriedades CSS.

```css
.exemplo-transicao {
    transition: background-color 0.3s ease-in-out;
}

.exemplo-transicao:hover {
    background-color: #FFD700; /* Nova cor de fundo ao passar o mouse */
}
```

- `background-color 0.3s ease-in-out`: Transição suave da cor de fundo durante 0.3 segundos.

## 4. **Gradientes (linear-gradient):**
Cria um gradiente linear como plano de fundo.

```css
.exemplo-gradiente {
    background: linear-gradient(to right, #ffcc00, #ff6600);
}
```

- `to right`: Direção do gradiente (da esquerda para a direita).
- `#ffcc00`: Cor no início do gradiente.
- `#ff6600`: Cor no final do gradiente.

## 5. **Transformações (transform):**
Aplica transformações a um elemento.

```css
.exemplo-transformacao {
    transform: rotate(45deg);
}
```

- `rotate(45deg)`: Rotaciona o elemento em 45 graus.

Estes são apenas exemplos básicos, e há muitos mais efeitos visuais que você pode explorar usando CSS3. Lembre-se de testar e ajustar os valores de propriedades conforme necessário para obter o resultado desejado.