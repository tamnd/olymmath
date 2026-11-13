---
tag: WAPGN3PT51
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71040
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a polynomial $P(x)$ with integer coefficients, and for each natural $x$ the inequality $P(x)>x$ holds. Define the sequence $\left\{b_{n}\right\}$ as follows: $b_{1}=1, b_{k+1}=P\left(b_{k}\right)$ for $k \geq 1$. It is known that for any natural number $d$, there exists a term in the sequence $\left\{b_{n}\right\}$ that is divisible by $d$. Prove that $P(x)=x+1$.
