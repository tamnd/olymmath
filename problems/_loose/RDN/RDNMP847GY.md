---
tag: RDNMP847GY
kind: problem
type: answer
answer: s = 3(n+1)/2, v = (n+5)/2, and n must be odd (no such decomposition exists for even n).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0000.parquet#row=200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Un triángulo dado $T$ se descompone en triángulos $T_{1}, T_{2}, \ldots, T_{n}$ de manera que:
a) Ningún par de triángulos $T_{i}$ tiene puntos interiores comunes.
b) La unión de todos los triángulos $T_{i}$ es $T$.
c) Cada segmento que es lado de algún triángulo $T_{i}$, o bien es lado de otro triángulo $T_{j}$, o bien es lado del triángulo $T$.

Sean $s$ el número total de lados (cada uno contado una sola vez, aunque sea común a dos triángulos), y $v$ el número total de vértices (cada uno contado una sola vez, aunque sea común a varios triángulos).

Demostrar que si $n$ es impar, existen varias descomposiciones de esta clase, y todas tienen el mismo número $v$ de vértices y el mismo número $s$ de lados. Expresar $v$ y $s$ en función de $n$. Demostrar también que si $n$ es par no existe tal descomposición.
