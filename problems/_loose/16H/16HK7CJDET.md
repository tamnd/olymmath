---
tag: 16HK7CJDET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2565120
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39086
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1990
    source: hf-ai-mo-aops
    label: 1990 French Mathematical Olympiad
---
Let the sequence $u_n$ be defined by $u_0=0$ and $u_{2n}=u_n$ , $u_{2n+1}=1-u_n$ for each $n\in\mathbb N_0$ .
(a) Calculate $u_{1990}$ .
(b) Find the number of indices $n\le1990$ for which $u_n=0$ .
(c) Let $p$ be a natural number and $N=(2^p-1)^2$ . Find $u_N$ .
