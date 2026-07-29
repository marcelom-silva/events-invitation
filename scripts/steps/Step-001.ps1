# ============================================
# Event Invitation Engine
# Step-001.ps1
# Foundation
# ============================================

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Event Invitation Engine - Step 001" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

$Repo = "C:\Users\User\Cryptos\projects\events-invitation"
$Project = Join-Path $Repo "projects\marcelo-jr"

if (!(Test-Path $Repo)) {
    Write-Host "Repositorio nao encontrado: $Repo" -ForegroundColor Red
    exit 1
}

if (!(Test-Path $Project)) {
    Write-Host "Projeto nao encontrado: $Project" -ForegroundColor Red
    exit 1
}

Set-Location $Project

Write-Host "[1/5] Removendo arquivos padrao..." -ForegroundColor Yellow
$remove = @(
    "app\favicon.ico",
    "app\page.module.css",
    "public\file.svg",
    "public\globe.svg",
    "public\next.svg",
    "public\vercel.svg",
    "public\window.svg"
)

foreach($f in $remove){
    if(Test-Path $f){
        Remove-Item $f -Force
        Write-Host "  OK removido: $f" -ForegroundColor Green
    } else {
        Write-Host "  OK inexistente: $f" -ForegroundColor DarkGray
    }
}

Write-Host "[2/5] Criando estrutura..." -ForegroundColor Yellow
$folders=@(
"components",
"components\layout",
"components\player",
"components\ui",
"config",
"hooks",
"lib",
"styles",
"types",
"shared",
"public\event",
"public\event\audio",
"public\event\images",
"public\event\videos"
)

foreach($folder in $folders){
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

Write-Host "[3/5] Criando config..." -ForegroundColor Yellow

$config = @'
export const eventConfig = {
  title: "Marcelo Jr.",
  subtitle: "Primeira Volta ao Sol",
  theme: "birthday",
  video: "/event/videos/convite.mp4",
  poster: "/event/images/poster.webp",
  music: "/event/audio/music.mp3",
  maps: "https://maps.google.com/?q=Condominio+Vitali+Aguas+Claras+DF"
};
'@

Set-Content -Encoding UTF8 "config\event.ts" $config

Write-Host "[4/5] Criando placeholders..." -ForegroundColor Yellow

$placeholders=@(
"public\event\videos\convite.mp4",
"public\event\images\poster.webp",
"public\event\audio\music.mp3"
)

foreach($p in $placeholders){
    if(!(Test-Path $p)){
        New-Item -ItemType File -Path $p | Out-Null
    }
}

Write-Host "[5/5] Finalizado." -ForegroundColor Yellow
Write-Host ""
Write-Host "Engine preparada com sucesso!" -ForegroundColor Green
