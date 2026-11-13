---
tag: D3QVPJT5W7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence (a_n) is defined as follows:
$ a_0=1, a_1=3$
For $ n\ge 2$, $ a_{n+2}=a_{n+1}+9a_n$ if n is even, $ a_{n+2}=9a_{n+1}+5a_n$ if n is odd.
Prove that
1) $ (a_{1995})^2+(a_{1996})^2+...+(a_{2000})^2$ is divisible by 20
2) $ a_{2n+1}$ is not a perfect square for every natural numbers $ n$.
