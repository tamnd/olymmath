---
tag: WRZN6ZN7X3
kind: problem
type: answer
answer: \text{None}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha\in(0,1]$ be a given real number and let a real sequence $\{a_n\}^\infty_{n=1}$ satisfy the inequality
$$a_{n+1}\le\alpha a_n+(1-\alpha)a_{n-1} \text{for }n=2,3,\ldots$$Prove that if $\{a_n\}$ is bounded, then it must be convergent.
