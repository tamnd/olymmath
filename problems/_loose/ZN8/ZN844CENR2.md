---
tag: ZN844CENR2
kind: problem
type: answer
answer: "1201"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25476
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The final sequence $a_{1}, a_{2}, \ldots, a_{n}$ of numbers 0 and 1 must satisfy the following condition: for any integer $k$ from 0 to $n-1$, the sum

$$
a_{1} a_{k+1}+a_{2} a_{k+2}+\ldots+a_{n-k} a_{n}
$$

is an odd number.

a) Come up with such a sequence for $n=25$.

b) Prove that such a sequence exists for some $n>1000$.
