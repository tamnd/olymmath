---
tag: EDKEPEXW1E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is graph $ G_0$ on vertices $ A_1, A_2, \ldots, A_n$. Graph $ G_{n + 1}$ on vertices $ A_1, A_2, \ldots, A_n$ is constructed by the rule: $ A_i$ and $ A_j$ are joined only if in graph $ G_n$ there is a vertices $ A_k\neq A_i, A_j$ such that $ A_k$ is joined with both $ A_i$ and $ A_j$. Prove that the sequence $ \{G_n\}_{n\in\mathbb{N}}$ is periodic after some term with period $ T \le 2^n$.
