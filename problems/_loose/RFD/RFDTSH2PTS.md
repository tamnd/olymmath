---
tag: RFDTSH2PTS
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Students solve a set of quadratic equations in numerical order: when an equation has two distinct roots, the next equation is formed as follows: the constant term is its larger root, the coefficient of the linear term is the smaller root, and the coefficient of the quadratic term $x^{2}$ is always 1. Prove that this set of exercises cannot continue indefinitely, and find the maximum number of quadratic trinomials that can satisfy the conditions of the problem.
