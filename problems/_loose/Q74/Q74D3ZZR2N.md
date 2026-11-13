---
tag: Q74D3ZZR2N
kind: problem
type: answer
answer: a) Yes, for example n = 6042. b) No.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=64
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 61st Belarusian Mathematical Olympiad
---
Let $S(n)$ be the sum of all digits in the decimal representation of $n \in \mathbb{N}$. Do there exist integers $n$ such that
$$
a) n - S(n) = 3 \cdot 2010? b) n - S(n) = 3 \cdot 2011?
$$
(I. Gorodnin)
