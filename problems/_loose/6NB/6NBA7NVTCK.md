---
tag: 6NBA7NVTCK
kind: problem
type: answer
answer: "43"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each integer $n \geq 1$, define $a_{n}=\left[\frac{n}{[\sqrt{n}]}\right]$, where $[x]$ denotes the largest integer not exceeding $x$, for any real number $x$. Find the number of all $n$ in the set $\{1,2,3, \ldots, 2010\}$ for which $a_{n}>a_{n+1}$.
