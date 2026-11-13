---
tag: 4WAGHBKK72
kind: problem
type: answer
answer: x_{1}x_{2}<y_{1}y_{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145008
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}$ be different positive real numbers, $a$ be a real number in $(0,1)$, $y_{1}=\frac{x_{1}}{1+a}+\frac{a x_{2}}{1+a}, y_{2}=\frac{x_{2}}{1+a}+$ $\frac{a x_{1}}{1+a}$, then the relationship between $x_{1} x_{2} \leftrightarrows y_{1} y_{2}$ is
(A) $x_{1} \cdot x_{2}>y_{1} y_{2}$
(B) $x_{1} x_{2}=y_{1} y_{2}$
(C) $x_{1} x_{2}<y_{1} y_{2}$
(D) Cannot be determined, depends on the value of $a$
