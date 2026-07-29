# Events Invitation Engine

## Objetivo

Criar uma Engine reutilizável para convites digitais de eventos.

O código da Engine deve permanecer o mesmo entre diferentes eventos.

Cada novo convite deve exigir apenas alterações nos arquivos de configuração, mídia e tema.

---

# Estrutura Oficial

```
projects/

    <nome-do-projeto>/

        app/

        components/

            layout/

            player/

            ui/

            themes/

                <nome-do-tema>/

        config/

            event/

        hooks/

        lib/

        public/

            event/

                audio/

                images/

                videos/

        styles/

        types/
```

> **Atualização (PR-001):** adicionada a pasta `components/themes/<nome-do-tema>/`.
> Ela não existia na estrutura original porque, até então, a Engine previa um
> layout único (`layout/Background`, `layout/Container`, `layout/GlassCard`)
> compartilhado por todos os eventos. A decisão de ter uma "moldura" diferente
> por categoria de evento (infantil, adulto, confraternização, churrasco...)
> exige que o fundo/decoração/mascote sejam trocáveis por completo, não só a
> paleta — por isso viraram componentes de tema, e não mais parte fixa do
> `layout/`. `layout/Background` deixou de existir; cada tema tem o seu.

---

# Organização dos Componentes

## layout

Responsável apenas pela estrutura visual, sem conteúdo nem lógica de evento.

Exemplos:

- Container
- Card *(antigo GlassCard — renomeado no PR-001, sem mais o visual dark)*

---

## player

Responsável exclusivamente pela reprodução de mídia.

Exemplos:

- VideoPlayer *(poster → play → replay, tudo num só componente por enquanto)*
- AudioController *(liga/desliga a música de fundo em loop; auto-desabilita se `media.music` for `null`)*

---

## ui

Componentes reutilizáveis, sem lógica de mídia.

Exemplos:

- Hero
- IconButton
- ActionButtons
- ShareButton
- MapsButton

> `PrimaryButton` foi removido no PR-001: o próprio `VideoPlayer` já funciona
> como play, então o botão "Assistir Convite" separado virou um CTA duplicado.

---

## themes/&lt;nome&gt;

Responsável pela identidade visual de uma categoria de evento: fundo,
decoração, mascote/elemento de assinatura. Selecionado hoje via import direto
em `page.tsx`; a partir da Release 0.3 passa a ser escolhido dinamicamente por
`event.theme`.

Tema ativo hoje: **kids-birthday**
- Paleta: céu `#BFE3F0 → #EAF7F5`, sol `#F7D774` / `#F2A65A`, teal `#4F9C93`, lavanda `#A99BCB`
- Tipografia: título em Caveat (manuscrita), corpo em Baloo 2 (rounded) — via `next/font/google`
- Assinatura: mascote sol animado (bob suave) acima do card

---

# Regras

## Nunca

- acessar arquivos diretamente do projeto
- usar caminhos fixos dentro dos componentes
- misturar regra de negócio com apresentação

---

## Sempre

- receber dados por props
- utilizar TypeScript
- reutilizar componentes
- manter componentes pequenos

---

# Public

Toda mídia deve ficar em:

public/event/

audio/
images/
videos/

---

# Configuração

Toda configuração do evento fica em:

config/event/

- `theme.ts` — qual tema visual usar
- `texts.ts` — título, subtítulo, textos dos botões
- `media.ts` — poster, vídeo, música (música é `string | null`)
- `location.ts` — nome, endereço e link do Google Maps
- `index.ts` — barrel que junta tudo em `EventConfig`

---

# Objetivo Final

Trocar um evento deverá exigir apenas substituir:

- config/event
- public/event
- components/themes/&lt;tema-correspondente&gt;

Todo o restante deverá continuar funcionando sem alterações.

---

# Roadmap

## Release 0.1

✔ Estrutura

✔ Componentes

✔ Configuração

---

## Release 0.2

✔ Player

✔ Audio

✔ Maps

✔ Share

---

## Release 0.3

Themes *(formalizar o seletor dinâmico por `event.theme`; hoje só existe kids-birthday)*

---

## Release 0.4

Gallery

RSVP

Gift List

Countdown

---

## Release 1.0

Primeira versão estável.
