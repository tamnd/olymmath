---
tag: KZ728ZCVQS
kind: problem
type: answer
answer: "118"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6545
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_{1}, a_{2}, \ldots$ is defined by the equalities

$$
a_{1}=100, a_{n+1}=a_{n}+\frac{1}{a_{n}}, n \in \mathbb{N}
$$

Find the integer closest to $a_{2013}$.
