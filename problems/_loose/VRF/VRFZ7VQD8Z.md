---
tag: VRFZ7VQD8Z
kind: problem
type: answer
answer: "1006"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90524
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many functions $f: \mathbb{Z} \rightarrow \mathbb{R}$ satisfy the following three properties?

(a) $f(1)=1$;

(b) For all $m, n \in \mathbb{Z}, f(m)^{2}-f(n)^{2}=f(m+n) f(m-n)$;

(c) For all $n \in \mathbb{Z}, f(n)=f(n+2013)$.
