---
tag: BTX6C1PW53
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $S(N)$ to be the sum of the digits of $N$ when it is written in base $10$, and take $S^k(N) = S(S(\dots(N)\dots))$ with $k$ applications of $S$. The \textit{stability} of a number $N$ is defined to be the smallest positive integer $K$ where $S^K(N) = S^{K+1}(N) = S^{K+2}(N) = \dots$. Let $T_3$ be the set of all natural numbers with stability $3$. Compute the sum of the two least entries of $T_3$.

Proposed by Albert Wang (awang11)
