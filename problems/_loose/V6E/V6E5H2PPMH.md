---
tag: V6E5H2PPMH
kind: problem
type: answer
answer: C_{n}^{0}+C_{n}^{1}+\ldots+C_{n}^{k}+\ldots+C_{n}^{n}=2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let there be $n$ lamps. The number of ways to illuminate with $k$ lamps lit is denoted by $C_{n}^{k}$. Prove that
$C_{n}^{1)}+C_{n}^{1}+\ldots+C_{n}^{k}+\ldots+C_{n}^{n}=2^{n}$. Is the notation $C_{n}^{k}$ clear? What does $C_{5}^{1}$ mean? What is the value of $C_{5}^{4}$?
