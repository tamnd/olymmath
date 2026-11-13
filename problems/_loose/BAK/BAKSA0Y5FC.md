---
tag: BAKSA0Y5FC
kind: problem
type: answer
answer: 0 \pmod{p}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime number and $c$ an integer for which $2c -1$ is divisible by $p$. Prove that
$$(-1)^{\frac{p+1}{2}}+\sum_{n=0}^{\frac{p-1}{2}} {2n \choose n}c^n$$ is divisible by $p$.
