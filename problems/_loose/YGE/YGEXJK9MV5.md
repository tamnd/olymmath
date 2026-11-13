---
tag: YGEXJK9MV5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every set $S$ with $n(\ge3)$ distinct integers, show that there exists a function $f:\{1,2,\dots,n\}\rightarrow S$ satisfying the following two conditions.

(i) $\{ f(1),f(2),\dots,f(n)\} = S$
(ii) $2f(j)\neq f(i)+f(k)$ for all $1\le i<j<k\le n$.
