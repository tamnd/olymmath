---
tag: 7MCVX7KZZ4
kind: problem
type: answer
answer: f(n)=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161068
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: N \rightarrow N \cup\{0\}$ that satisfy the following conditions:

1) $f(m n)=f(m)+f(n)$ for all $m, n \in N$;
2) $f(10 m+3)=0$ for all $m \in N$;
3) $f(10)=0$.
