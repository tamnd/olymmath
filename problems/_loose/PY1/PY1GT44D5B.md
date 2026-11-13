---
tag: PY1GT44D5B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a graph $G$ we denote $\omega(G)$ the maximum size of the cliques of $G$ and $\bar{\omega}(G)$ the maximum size of the anticliques of $G$.

Show that for any graph $G=(V, E)$,

$$
\chi(G) \geqslant \max \left(\omega(G), \frac{|V|}{\bar{\omega}(G)}\right)
$$
