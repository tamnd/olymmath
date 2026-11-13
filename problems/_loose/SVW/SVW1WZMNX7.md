---
tag: SVW1WZMNX7
kind: problem
type: answer
answer: ((20k - 3) * 2^(4k) + 3) / 25
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
For a word $S$ written in letters $A$ and $B$, let $f(S)$ denote the maximum number of non-intersecting $ABA$ subwords in $S$. For example, $f(ABBABBA) = 0$, $f(ABABABBA) = 1$ and $f(ABABABA) = 2$.
For $n = 4k + 1$, find the sum $\sum f(S)$ where $S$ runs over all $n$ letter words written in letters $A$ and $B$.
(Nyamdavaa Amar)
