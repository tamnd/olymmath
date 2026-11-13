---
tag: ZP2DR88A7S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$a,b,c,d\in\mathbb{R}$, solve the system of equations:
$$ \begin{cases} a^3+b=c \\ b^3+c=d \\ c^3+d=a \\ d^3+a=b \end{cases} $$
