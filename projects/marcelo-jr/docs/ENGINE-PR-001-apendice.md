## PR-001 — Release 0.1 + 0.2 (Estrutura, Componentes, Configuração, Player, Áudio, Maps, Compartilhar)

### Decisões de arquitetura

- **Engine x Tema:** `components/player/*` e `components/layout/*` são agnósticos
  de tema (o "engine"). `components/themes/<nome>/*` guarda tudo que muda por
  categoria de evento (fundo, mascote, decoração). Hoje só existe
  `themes/kids-birthday`; `page.tsx` importa esse tema diretamente. Quando
  entrarmos na Release 0.3 (Temas), criamos um registry (`lib/theme-registry.ts`)
  que escolhe a pasta certa a partir de `event.theme`, sem mexer no player.
- **Sem CTA duplicado:** removido o `PrimaryButton` "Assistir Convite" separado.
  O próprio thumbnail do vídeo (`VideoPlayer`) já funciona como play.
- **Áudio opcional por design:** `EventMedia.music` é `string | null`. Sem
  arquivo, o botão de música nasce desabilitado — não precisa mexer em
  componente quando a música for adicionada, só trocar o config.
- **Bug corrigido:** `config/event/location.ts` estava com o mesmo conteúdo de
  `media.ts` (copy-paste). Agora exporta o `EventLocation` de verdade.
- **Paths de mídia corrigidos:** o config apontava para `/media/...`, mas a
  pasta real é `public/event/{images,videos,audio}`. Ajustado para
  `/event/...`.

### Paleta e tipografia do tema `kids-birthday`

- Cores: céu `#BFE3F0 → #EAF7F5`, sol `#F7D774` / `#F2A65A`, teal `#4F9C93`,
  lavanda `#A99BCB`, tinta `#4A3F35`.
- Tipografia: título em Caveat (manuscrita), corpo em Baloo 2 (rounded),
  ambas via `next/font/google`.
- Assinatura visual: mascote sol animado (bob suave) acima do card.

### Arquivos desta entrega

➕ NOVO
- `components/layout/Card.tsx`
- `components/layout/ActionBar.tsx`
- `components/player/VideoPlayer.tsx`
- `components/player/MusicToggle.tsx`
- `components/player/ShareButton.tsx`
- `components/player/MapsButton.tsx`
- `components/themes/kids-birthday/Background.tsx`
- `components/themes/kids-birthday/SunMascot.tsx`
- `components/themes/kids-birthday/index.ts`
- `public/event/images/poster.svg`
- `public/event/audio/.gitkeep`

✏️ ALTERAR
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `components/layout/Container.tsx`
- `components/layout/Hero.tsx`
- `components/ui/IconButton.tsx`
- `types/event.ts`
- `config/event/index.ts`
- `config/event/theme.ts`
- `config/event/texts.ts`
- `config/event/media.ts`
- `config/event/location.ts`

🗑️ REMOVER
- `components/GlassCard.tsx` (substituído por `components/layout/Card.tsx`)
- `components/Background.tsx` (dark mode antigo — substituído pelo tema)
- `components/ActionButtons.tsx` (a composição agora é feita direto na `page.tsx`)
- `components/PrimaryButton.tsx` (CTA duplicado removido)
- `components/VideoCard.tsx` (substituído por `components/player/VideoPlayer.tsx`)
- `public/event/videos/convite.mp4` (rascunho — mantém só `invitation.mp4`)
