---
tag: V16E8TZVZB
kind: problem
type: answer
answer: f(n)=n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79847
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the functions $f: \mathbb{N} \longmapsto \mathbb{N}$ such that $f(f(n))<f(n+1)$.

(Hint: Show by induction that $\forall n \in \mathbb{N}, \forall m \geqslant n, f(m) \geqslant n$.)
