---
tag: ACYVFYR5ET
kind: problem
type: answer
answer: 2007 for 9×2007; 2007 for 99×2007
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2008
    source: hf-mathnet
    label: Argentina Argentina 2008
---
Se tiene un tablero rectangular de $9 \times 2007$ dividido en cuadritos de $1 \times 1$. Inicialmente todos los cuadritos son blancos. En cada paso se colorean de negro 4 cuadritos blancos que estén en la intersección de dos filas y dos columnas del tablero. Cuando ya no queden 4 cuadritos blancos en la intersección de dos filas y dos columnas del tablero el proceso se detiene. ¿Cuántos cuadritos como mínimo quedarán sin colorear? ¿Y si el tablero fuese de $99 \times 2007$?
