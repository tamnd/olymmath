---
tag: N68XS9Y0SP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given odd prime $p$. Sequence ${x_n}$ is defined by $x_{n+2}= 4x_{n+1}-x_n$.
Choose $x_0,x_1$ such that for every random positive integer $k$, there exists $i\in \mathbb N$ such that $4p^2-8p+1|x_i - (2p)^k$.
