#!/usr/bin/env bash
# Converte o vídeo hero (boardwalk glow) para WebM, GIF e sequência de PNG
# otimizados para web. Uso: ./scripts/convert-video.sh [caminho-do-mp4]
set -euo pipefail

INPUT="${1:-public/hero_video_devfest.mp4}"
OUTDIR="public/assets/hero-animation"
FRAMESDIR="$OUTDIR/frames"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg não encontrado. Instale com:"
  echo "  macOS:          brew install ffmpeg"
  echo "  Ubuntu/Debian:  sudo apt-get update && sudo apt-get install -y ffmpeg"
  exit 1
fi

if [ ! -f "$INPUT" ]; then
  echo "Vídeo de entrada não encontrado: $INPUT"
  exit 1
fi

mkdir -p "$FRAMESDIR"

echo "==> WebM (VP9, escala 1080p, 30fps, CRF 30)"
ffmpeg -y -i "$INPUT" \
  -vf "scale=-2:1080,fps=30" \
  -c:v libvpx-vp9 -crf 30 -b:v 0 -row-mt 1 \
  -an \
  "$OUTDIR/hero-boardwalk.webm"

echo "==> GIF (800px de largura, 15fps, paleta otimizada)"
ffmpeg -y -i "$INPUT" \
  -vf "fps=15,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3" \
  "$OUTDIR/hero-boardwalk.gif"

echo "==> PNG keyframes (1 frame por segundo)"
ffmpeg -y -i "$INPUT" \
  -vf "fps=1" \
  "$FRAMESDIR/frame-%02d.png"

echo ""
echo "Concluído. Saída em $OUTDIR:"
du -h "$OUTDIR"/hero-boardwalk.webm "$OUTDIR"/hero-boardwalk.gif "$FRAMESDIR"/frame-*.png
