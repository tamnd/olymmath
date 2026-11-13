---
tag: HJXB1KH9RK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2537906
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39112
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1995
    source: hf-ai-mo-aops
    label: 1995 French Mathematical Olympiad
---
Study the convergence of a sequence defined by $u_0\ge0$ and $u_{n+1}=\sqrt{u_n}+\frac1{n+1}$ for all $n\in\mathbb N_0$ .
