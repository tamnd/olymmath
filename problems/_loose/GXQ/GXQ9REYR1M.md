---
tag: GXQ9REYR1M
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221139
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P(x)$ be the product of all linear polynomials $ax+b$, where $a,b\in \{0,\ldots,2016\}$ and $(a,b)\neq (0,0)$. Let $R(x)$ be the remainder when $P(x)$ is divided by $x^5-1$. Determine the remainder when $R(5)$ is divided by $2017$.
