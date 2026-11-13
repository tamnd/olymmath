---
tag: K4V75PE1FW
kind: problem
type: answer
answer: f(n) = n^2 for all positive integers n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatian Mathematical Olympiad
---
Let $f: \mathbb{N} \to \mathbb{N}$ be a function such that for all positive integers $a$ and $b$,
$$
f(a) + f(b) - ab \mid af(a) + bf(b).
$$
Find all such functions $f$.
