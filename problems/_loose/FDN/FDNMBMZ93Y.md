---
tag: FDNMBMZ93Y
kind: problem
type: answer
answer: x_0 \in [0,1]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246881
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1]\rightarrow [0,1]$ a continuous function in $0$ and in $1$, which has one-side limits in any point and $f(x-0)\le f(x)\le f(x+0),\ (\forall)x\in (0,1)$. Prove that:

a)for the set $A=\{x\in [0,1]\ |\ f(x)\ge x\}$, we have $\sup A\in A$.
b)there is $x_0\in [0,1]$ such that $f(x_0)=x_0$.

*Mihai Piticari*
