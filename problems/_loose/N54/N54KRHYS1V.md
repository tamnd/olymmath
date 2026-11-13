---
tag: N54KRHYS1V
kind: problem
type: answer
answer: \inf_{f \in \mathbb{A}} S(f) = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the set

$\mathbb A=\{f\in C^1([-1,1]):f(-1)=-1,f(1)=1\}$.

Prove that there is no function in this function space that gives us the minimum of $S=\int_{-1}^1x^2f'(x)^2dx$. What is the infimum of $S$ for the functions of this space?
