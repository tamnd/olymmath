---
tag: APB6FKY4NX
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We examine numbers that can be represented as $10 \times n+1$, where $\mathbf{n}$ is a positive integer, for example: $11=10 \times 1+1$, $331=10 \times 33+1$. If such a number cannot be expressed as the product of two smaller numbers of the form $10 \times n+1$ (these two smaller numbers can be the same), we call this number a "Zhonghuan number". For example, $341=11 \times 31$, it can be expressed as the product of two numbers of the form $10 \times n+1$, so it is not a "Zhonghuan number". On the other hand, 11 cannot be expressed as the product of two smaller numbers of the form $10 \times n+1$, so it is a "Zhonghuan number". How many "Zhonghuan numbers" are there among $11, 21, 31, \ldots, 991$?
