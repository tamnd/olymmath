---
tag: RA9XJ021EG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0000.parquet#row=171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo
    source: hf-mathnet
    label: Spain International Mathematical Olympiad
---
Sean $n$ y $k$ dos números naturales primos entre sí, con $0 < k < n$. Cada número del conjunto $\mathcal{M} = \{1, 2, \ldots, n-1\}$ se colorea o bien en azul, o bien en blanco. Se sabe que

1) Para cada $i \in \mathcal{M}$, los elementos $i$ y $n-i$ tienen el mismo color.

2) Para cada $i \in \mathcal{M}$, $i \neq k$, los elementos $i$ y $|i-k|$ tienen el mismo color.

Demostrar que todos los elementos de $\mathcal{M}$ tienen el mismo color.
