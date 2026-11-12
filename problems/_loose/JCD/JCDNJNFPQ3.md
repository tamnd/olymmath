---
tag: JCDNJNFPQ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the algebraic expression $F(a, \ldots, x)$, containing variables, parentheses, and multiplication and subtraction operations. Numerical constants are not used. Replace one of the operation signs with $\perp$, the other with $\bowtie$. We will call the resulting expression a "formula". For example, the expression $(a \bowtie b) \perp c$ is a formula, where one of the signs denotes subtraction, and the other denotes multiplication.

a) does there exist a formula that, for any values of the variables (and any meaning of the signs), gives a value of 0?

b) does there exist a formula that, for any values of the variables, gives a value of 1?
