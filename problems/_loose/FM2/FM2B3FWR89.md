---
tag: FM2B3FWR89
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28886
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(England, 81). For given distinct numbers $a_{1}, a_{2}, \ldots, a_{n} \in \mathbf{N}(n>1)$ and for each value $i=1,2, \ldots$ ..., $n$ denote

$$
p_{i}=\prod_{\substack{1 \leqslant j \leqslant n \\ j \neq i}}\left(a_{i}-a_{j}\right) .
$$

Prove that for any value $k \in \mathbf{N}$ the number

$$
\sum_{i=1}^{n} a_{i}^{k} / p_{i}
$$

is an integer.
