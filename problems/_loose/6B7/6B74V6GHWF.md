---
tag: 6B74V6GHWF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210601
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that these two statements are equivalent for an $n$ dimensional vector space $V$:

**$\cdot$** For the linear transformation $T:V\longrightarrow V$ there exists a base for $V$ such that the representation of $T$ in that base is an upper triangular matrix.

**$\cdot$** There exist subspaces $\{0\}\subsetneq V_1 \subsetneq ...\subsetneq V_{n-1}\subsetneq V$ such that for all $i$, $T(V_i)\subseteq V_i$.
