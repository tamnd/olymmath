---
tag: 266ZVBQJ7T
kind: problem
type: answer
answer: 1 + 2019 \cdot 2^{2018}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An \textit{island} is a contiguous set of at least two equal digits. Let $b(n)$ be the number of islands in the binary representation of $n$. For example, $2020_{10} = 11111100100_2$, so $b(2020) = 3$. Compute
$$b(1) + b(2) + \cdots + b(2^{2020}).$$
