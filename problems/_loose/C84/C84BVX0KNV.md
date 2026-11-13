---
tag: C84BVX0KNV
kind: problem
type: answer
answer: \frac{65}{288}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\phi(n)$ denote the number of positive integers less than or equal to $n$ that are coprime to $n$. Compute $$\sum_{n=1}^{\infty}\frac{\phi(n)}{5^n+1}.$$
