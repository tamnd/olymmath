---
tag: SBZFZAGYXH
kind: problem
type: answer
answer: p_{1}=0.4,p_{2}=0.1,p_{3}=0.5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the list of possible values of a discrete random variable $X: x_{1}=-1, x_{2}=0, x_{3}=1$, and the known mathematical expectations of this variable and its square: $M(X)=0.1, M\left(X^{2}\right)=0.9$. Find the probabilities
$p_{1}, p_{2}, p_{3}$, corresponding to the possible values $x_{1}$, $x_{2}, x_{3}$.
