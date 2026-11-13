---
tag: 77QSFQT8XP
kind: problem
type: answer
answer: \frac{n(n+1)^{3}C_{2n+1}^{n+1}}{(n+2)(n+3)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $n$ is a positive integer, find the formula for the sum
$$
C_{n+1}^{1}+C_{n+2}^{2} \cdot 2^{2}+C_{n+3}^{3} \cdot 3^{2}+\cdots+C_{2 n}^{n} \cdot n^{2}
$$
