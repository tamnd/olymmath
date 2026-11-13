---
tag: J1YV0G52QQ
kind: problem
type: answer
answer: "727"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha$ be a root of $x^6-x-1$, and call two polynomials $p$ and $q$ with integer coefficients $\textit{equivalent}$ if $p(\alpha)\equiv q(\alpha)\pmod3$. It is known that every such polynomial is equivalent to exactly one of $0,1,x,x^2,\ldots,x^{727}$. Find the largest integer $n<728$ for which there exists a polynomial $p$ such that $p^3-p-x^n$ is equivalent to $0$.
