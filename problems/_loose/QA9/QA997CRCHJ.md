---
tag: QA997CRCHJ
kind: problem
type: answer
answer: "2014"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of real numbers is given by the formula $x_{n+1}=\frac{n+1}{x_{n}}$, for all $n \geq 1$, where $x_{1}=123456789$. What is $x_{1} \cdot x_{2} \cdot x_{18} \cdot x_{19} \cdot x_{52} \cdot x_{53}$?
