---
tag: M76T5HW0ZQ
kind: problem
type: answer
answer: P(x)=(x-1)(x-2)\ldots(x-n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We know that $P(x)$ is an $n$-th degree polynomial, and that the function

$$
f(x)=P(x) \cdot \sum_{i=1}^{n}|x-i|
$$

is differentiable for all real $x$. Determine all polynomials with this property!
