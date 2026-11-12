---
tag: 8JKEH5ETWJ
kind: problem
type: answer
answer: "59"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $F$ is defined on the set of triples of integers and takes real values. It is known that for any four integers $a, b, c$ and $n$ the equalities $F(n a, n b, n c)=n \cdot F(a, b, c)$, $F(a+n, b+n, c+n)=F(a, b, c)+n$, $F(a, b, c)=F(c, b, a)$ hold. Find $F(58,59,60)$.
