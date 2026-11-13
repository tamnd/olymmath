---
tag: 7J2QYRR4T6
kind: problem
type: answer
answer: 2^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Dado un entero positivo $n$, en un plano se consideran $2n$ puntos alineados $A_1, A_2, \dots, A_{2n}$. Cada punto se colorea de azul o rojo mediante el siguiente procedimiento: En el plano dado se trazan $n$ circunferencias con diámetros de extremos $A_i$ y $A_j$, disyuntas dos a dos. Cada $A_k$, $1 \le k \le 2n$, pertenece exactamente a una circunferencia. Se colorean los puntos de modo que los dos puntos de una misma circunferencia lleven el mismo color.

Determine cuántas coloraciones distintas de los $2n$ puntos se pueden obtener al variar las $n$ circunferencias y la distribución de los dos colores.
