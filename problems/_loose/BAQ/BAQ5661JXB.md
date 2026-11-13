---
tag: BAQ5661JXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2006
    source: hf-mathnet
    label: Argentina Argentina 2006
---
Diremos que un entero positivo es ganador si se puede escribir como suma de un cuadrado perfecto más un cubo perfecto. Por ejemplo, $33$ es ganador porque $33 = 5^2 + 2^3$.

Gabriel elige dos enteros positivos, $r$ y $s$, y Germán debe hallar $2005$ enteros positivos $n$ tales que para cada $n$, los números $r + n$ y $s + n$ sean ganadores.

Demostrar que Germán siempre puede lograr su objetivo.
