---
tag: V5FVHKMNB1
kind: problem
type: answer
answer: (1,1,1),(2,2,2),(2,3,3),(3,2,3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85648
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples of positive integers $(a, b, n)$ for which

$$
a !+b !=2^{n}
$$

Notation: $k !=1 \times 2 \times \cdots \times k$, so for example $1 !=1$ and $4 !=1 \times 2 \times 3 \times 4=24$.
