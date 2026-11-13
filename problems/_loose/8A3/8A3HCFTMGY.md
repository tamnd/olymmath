---
tag: 8A3HCFTMGY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117777
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Mathematical Olympiad Training Questions from Issue 2, 2004 of Intermediate Mathematics) Let $f(n)$ denote the number of arrangements of length $n$ composed of 0s and 1s, where no two 1s are adjacent. It is agreed that $f(0)=1$. Prove:
(1) $f(n)=f(n-1)+f(n-2), n \geqslant 2$;
(2) $f(4 k+2)$ is divisible by 3, $k \geqslant 0$.
