---
tag: DVJT8EASD7
kind: problem
type: answer
answer: f(n) = c n for some positive integer c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Denote the set of positive integers by $\mathbb{N}$. Find all functions $f : \mathbb{N} \to \mathbb{N}$ satisfying that for all $m, n \in \mathbb{N}$, $|f(m+n) - f(m)|$ divides $f(n)$.
