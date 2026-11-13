---
tag: D01ZG3HYPK
kind: problem
type: answer
answer: \lceil\frac{n}{2}\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. If a regular $n$-gon is divided into $n-2$ triangles by drawing $n-3$ diagonals that do not have common interior points, we say that we have obtained a triangulation. A triangulation of an $n$-gon, some of whose vertices are red, is good if each of those $n-2$ triangles has at least two red vertices.

Determine the smallest natural number $k$, depending on $n$, such that we can color $k$ vertices of a regular $n$-gon red so that there exists at least one good triangulation.
