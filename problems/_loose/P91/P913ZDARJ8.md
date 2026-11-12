---
tag: P913ZDARJ8
kind: problem
type: answer
answer: "90"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9413
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $G$ is defined on the set of triples of integers and takes real values. It is known that for any four integers $a, b, c$ and $n$, the equalities $G(n a, n b, n c)=n \cdot G(a, b, c)$, $G(a+n, b+n, c+n)=G(a, b, c)+n$, $G(a, b, c)=G(c, b, a)$ hold. Find $G(89,90,91)$.
