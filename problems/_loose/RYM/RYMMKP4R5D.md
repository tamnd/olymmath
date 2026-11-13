---
tag: RYMMKP4R5D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(n)$ and $g(n)$ be two sequences of natural numbers determined by the following three conditions:
(1) $f(1)=1$;
(2) $g(n)=n a-1-f(n)$, where $a$ is an integer greater than 4;
(3) $f(n+1)$ is the smallest natural number different from the $2n$ numbers: $f(1), f(2), \cdots, f(n)$; $g(1)$, $g(2), \cdots, g(n)$.
Prove that there exist constants $\alpha$ and $\beta$ such that $f(n)=[\alpha n]$, $g(n)=[\beta n]$.
