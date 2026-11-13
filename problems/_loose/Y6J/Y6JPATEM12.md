---
tag: Y6JPATEM12
kind: problem
type: answer
answer: "19.4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\phi(n)$ denote the number of positive integers less than or equal to $n$ which are relatively prime to $n$. Compute $ \sum_{i=1}^{\phi(2023)} \dfrac{\gcd(i,\phi(2023))}{\phi(2023)}$.

*Proposed by Giacomo Rizzo*
