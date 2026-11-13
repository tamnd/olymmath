---
tag: TTG1J7RN5K
kind: problem
type: answer
answer: 5 if m and n are both divisible by 4; otherwise 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=61
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 46th Mongolian Mathematical Olympiad
---
Let $(2m + 1, 2n + 1) = 1$ for natural numbers $m$ and $n$. Find
$$
(2^{2m+1} + 2^{m+1} + 1, 2^{2n+1} + 2^{n+1} + 1).
$$
Here $(a, b)$ denotes the greatest common denominator of $a$ and $b$.
