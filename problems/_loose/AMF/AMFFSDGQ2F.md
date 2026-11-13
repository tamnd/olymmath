---
tag: AMFFSDGQ2F
kind: problem
type: answer
answer: n \equiv 2 \pmod{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of polynomials $\left( P_{n}(X)\right)_{n\in Z_{>0}}$ is defined as follows:
$P_{1}(X)=2X$
$P_{2}(X)=2(X^2+1)$
$P_{n+2}(X)=2X\cdot P_{n+1}(X)-(X^2-1)P_{n}(X)$, for all positive integers $n$.
Find all $n$ for which $X^2+1\mid P_{n}(X)$
