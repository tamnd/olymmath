---
tag: 33HF2ZEF4F
kind: problem
type: answer
answer: '|\det A| = 1'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269310
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be an $n\times n$ square matrix with integer entries. Suppose that $p^2A^{p^2}=q^2A^{q^2}+r^2I_n$ for some positive integers $p,q,r$ where $r$ is odd and $p^2=q^2+r^2$. Prove that $|\det A|=1$. (Here $I_n$ means the $n\times n$ identity matrix.)
