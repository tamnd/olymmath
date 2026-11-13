---
tag: 9XNT8TVDRD
kind: problem
type: answer
answer: (1,6,3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89861
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples of natural numbers $(m, n, p)$ where $p$ is a prime number, and the following equation holds:

$$
m^{3} + 7 p^{2} = 2^{n}
$$
