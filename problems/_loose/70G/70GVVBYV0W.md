---
tag: 70GVVBYV0W
kind: problem
type: answer
answer: \frac{1}{32} - \frac{1}{2^{2027}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A drunken horse moves on an infinite board whose squares are numbered in pairs $(a, b) \in \mathbb{Z}^2$. In each movement, the 8 possibilities $$(a, b) \rightarrow (a \pm 1, b \pm 2),$$ $$(a, b) \rightarrow (a \pm 2, b \pm 1)$$ are equally likely. Knowing that the knight starts at $(0, 0)$, calculate the probability that, after $2023$ moves, it is in a square $(a, b)$ with $a \equiv 4 \pmod 8$ and $b \equiv 5 \pmod 8$.
