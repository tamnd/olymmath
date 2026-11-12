---
tag: 5VSEHMM7TY
kind: problem
type: answer
answer: '{\begin{pmatrix}(x-1)(x-2)(x-3)=0\\(|x-1|+|y-1|)(|x-2|+|y-2|)(|x-3|+|y-4|)=0\end{pmatrix}.}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Come up with a system of two equations with two unknowns $x$ and $y$, so that its solutions are only the following three pairs of numbers: $x=y=1, x=y=2$ and $x=3, y=4$. In the equations of the system, in addition to numbers and the unknowns $x$ and $y$ themselves, you are allowed to use parentheses, the equality sign $=$, standard arithmetic operations, and elementary functions.
