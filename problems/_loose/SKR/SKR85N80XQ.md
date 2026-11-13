---
tag: SKR85N80XQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a, b, c \in \mathbf{R}, a+b+c=1$. For $x_{1}, x_{2}, x_{3} \in \mathbf{R}^{+}$, let $y_{1}=a x_{1}+b x_{2}+c x_{3}, y_{2}=a x_{2}+b x_{3}+c x_{1}, y_{3}=a x_{3}+b x_{1}+c x_{2}$.
Prove: $y_{1} y_{2} y_{3} \geqslant x_{1} x_{2} x_{3}$.
