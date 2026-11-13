---
tag: QAZXBPD09K
kind: problem
type: answer
answer: "9647"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Euclidean Algorithm on inputs $a$ and $b$ is a way to find the greatest common divisor $\gcd(a,b)$. Suppose WLOG that $a>b$. On each step of the Euclidan Algorithm, we solve the equation $a=bq+r$ for integers $q,r$ such that $0\leq r\tfrac{1}{2}$, then your score will be $0$. Otherwise, your score will be given by $\max\{0,\lceil25-2(\tfrac{|A-C|}{20})^{1/2.2}\rceil\}$.
