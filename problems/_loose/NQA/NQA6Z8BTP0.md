---
tag: NQA6Z8BTP0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that there exists a non-empty proper subset $S$ of the set of real numbers, such that for any real number $x$, the family of sets

$$
S, x+S, 2x+S, \ldots, nx+S, \ldots
$$

is finite, where $kx+S=\{kx+s \mid s \in S\}, k \in \mathbb{N}$.
