---
tag: VHHZKPFXKQ
kind: problem
type: answer
answer: a_{i}=2^{i-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(x_{n}\right)_{n=1}^{\infty}$ of integers with the first term $x_{1}=1$ satisfies the condition

$$
x_{n}= \pm x_{n-1} \pm \ldots \pm x_{1}
$$

with an appropriate choice of signs "+" and "-" for any $n>1$, for example $x_{2}=-x_{1}$, $x_{3}=-x_{2}+x_{1}, x_{4}=x_{3}-x_{2}-x_{1}, \ldots$ For a given $n$, determine all possible values of $x_{n}$.
