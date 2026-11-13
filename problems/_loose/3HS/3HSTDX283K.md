---
tag: 3HSTDX283K
kind: problem
type: answer
answer: "67384"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A four-digit number $n$ is said to be *literally 1434* if, when every digit is replaced by its remainder when divided by $5$, the result is $1434$. For example, $1984$ is *literally 1434* because $1$ mod $5$ is $1$, $9$ mod $5$ is $4$, $8$ mod $5$ is $3$, and $4$ mod $5$ is $4$. Find the sum of all four-digit positive integers that are *literally 1434*.

*Proposed by Evin Liang*
