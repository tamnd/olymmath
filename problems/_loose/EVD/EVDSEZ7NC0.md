---
tag: EVDSEZ7NC0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252951
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb R\to \mathbb R$ such that \begin{align*} \left (x \left (f(x)-\dfrac{f(y)+f(z)}{2} \right) +y \left (f(y)-\dfrac{f(z)+f(x)}{2} \right ) +z\left (f(z)- \dfrac{f(x)+f(y)}{2} \right) \right )f(x+y+z)= \\ f(x^3)+f(y^3)+f(z^3)-3f(xyz) \end{align*} for all $x,y,z\in \mathbb R.$
