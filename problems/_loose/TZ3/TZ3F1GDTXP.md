---
tag: TZ3F1GDTXP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=92
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Una pulga salta sobre puntos enteros de la recta numérica. En su primer movimiento salta desde el punto $0$ y cae en el punto $1$. Luego, si en un movimiento la pulga saltó desde el punto $a$ y cayó en el punto $b$, en el siguiente movimiento salta desde el punto $b$ y cae en uno de los puntos $b + (b - a) - 1$, $b + (b - a)$, $b + (b - a) + 1$.

Demuestre que si la pulga ha caído dos veces sobre el punto $n$, para $n$ entero positivo, entonces ha debido hacer al menos $t$ movimientos, donde $t$ es el menor entero mayor o igual que $2\sqrt{n}$.
