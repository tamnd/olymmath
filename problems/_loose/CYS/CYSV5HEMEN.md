---
tag: CYSV5HEMEN
kind: problem
type: answer
answer: x\in\mathbb{R}\backslash{0,1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178887
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the matrix $A=\left(\begin{array}{lll}0 & 1 & 0 \\ 0 & 0 & 1 \\ x & 0 & 0\end{array}\right), x \in \mathbb{R}$.

a) Show that $A^{2016}=x^{672} I_{3}$.

b) Determine $x \in \mathbb{R}$ for which the matrix $B=A^{4}+A^{5}+A^{6}$ is invertible.
