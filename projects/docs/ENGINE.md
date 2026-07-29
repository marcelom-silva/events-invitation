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

---

# Organização dos Componentes

## layout

Responsável apenas pela estrutura visual.

Exemplos:

- Background
- Container
- GlassCard

---

## player

Responsável exclusivamente pela reprodução de mídia.

Exemplos:

- Player
- VideoPoster
- VideoPlayer
- AudioController
- PlayerOverlay

---

## ui

Componentes reutilizáveis.

Exemplos:

- Hero
- PrimaryButton
- IconButton
- ActionButtons

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

---

# Objetivo Final

Trocar um evento deverá exigir apenas substituir:

- config/event
- public/event

Todo o restante deverá continuar funcionando sem alterações.

---

# Roadmap

## Release 0.1

✔ Estrutura

✔ Componentes

✔ Configuração

---

## Release 0.2

Player

Audio

Maps

Share

---

## Release 0.3

Themes

---

## Release 0.4

Gallery

RSVP

Gift List

Countdown

---

## Release 1.0

Primeira versão estável.