---
tag: JGZY7VZPQ1
kind: problem
type: answer
answer: f(n)=n,n\in{N}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $f: \mathbf{N} \rightarrow \mathbf{N}$, such that for any $n \in \mathbf{N}$, we have
$$
\frac{1}{f(1) f(2)}+\frac{1}{f(2) f(3)}+\cdots+\frac{1}{f(n) f(n+1)}=\frac{f(f(n))}{f(n+1)}
$$
