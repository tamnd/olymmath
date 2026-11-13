---
tag: VJ4V86PZBW
kind: problem
type: answer
answer: (p, q)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S = \mathbb Z \times \mathbb Z$. A subset $P$ of $S$ is called *nice* if

- $(a, b) \in P \implies (b, a) \in P$

- $(a, b)$, $(c, d)\in P \implies (a + c, b - d) \in P$

Find all $(p, q) \in S$ so that if $(p, q) \in P$ for some *nice* set $P$ then $P = S$.
