---
tag: 746GBQW6WD
kind: problem
type: answer
answer: a_{n}=n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the general term of the sequence $\left(x_{n}\right)_{n \geq 1}$ defined by:

$$
x_{1}=1, x_{2}=2 \text { and } x_{n+2}=\frac{x_{n+1}^{2}}{\left[\sqrt{x_{n}^{2}+x_{n+1}}\right]}-\frac{1}{n}, n \geq 1
$$

Marius Perianu, Slatina
