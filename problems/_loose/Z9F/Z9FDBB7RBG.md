---
tag: Z9FDBB7RBG
kind: problem
type: answer
answer: R(X)=\frac{2}{-b}X+\frac{b+}{b-}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P \in \mathbb{K}[X]$ and $(a, b) \in \mathbb{K}^{2}$ such that $a \neq b$. Knowing that the remainder of the Euclidean division of $P$ by $X-a$ is 1 and that the remainder of the Euclidean division of $P$ by $X-b$ is -1, determine the remainder of the Euclidean division of $P$ by $(X-a)(X-b)$.
