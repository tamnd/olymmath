---
tag: FJV2VANSAY
kind: problem
type: answer
answer: f(f(n))=f(n)+n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $q=\frac{1+\sqrt{5}}{2}$, and let $f: \mathbf{N} \rightarrow \mathbf{N}$ be a function such that for any positive integer $n$,

$$
|f(n)-q n|<\frac{1}{q}
$$

Prove that $f(f(n))=f(n)+n$.
