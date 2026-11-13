---
tag: W90RSBF6Z5
kind: problem
type: answer
answer: \in(12,+\infty)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the constant $a \in \mathbf{R}$, and the function
$$
f(x)=(a-x)|x|
$$

has an inverse function $f^{-1}(x)$. If the inequality
$$
f^{-1}\left(x^{2}+m\right)<f(x)
$$

holds for all $x \in[-2,2]$, find the range of the real number $m$.
