---
tag: CK16RN66ZP
kind: problem
type: answer
answer: "0.04"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive numbers $a_{1}, a_{2}, \ldots, a_{10}$, satisfying the relation $a_{n}\left(a_{n-1}+a_{n+1}\right)=2 a_{n-1} a_{n+1}\left(a_{n}+1\right)$ for $n=2,3, \ldots, 9$. Find $a_{5}$ if it is known that $a_{1}=1$ and $a_{10}=0.01$
