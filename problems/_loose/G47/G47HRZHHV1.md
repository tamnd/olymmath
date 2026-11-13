---
tag: G47HRZHHV1
kind: problem
type: answer
answer: u_{n}=u_{n-1}+u_{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all $n \in \mathbb{N}$, we denote $u_{n}$ as the number of ways to tile a grid of size $2 \times n$ using dominoes of size $2 \times 1$. Provide a formula for $u_{n}$.
