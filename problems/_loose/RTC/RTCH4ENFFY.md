---
tag: RTCH4ENFFY
kind: problem
type: answer
answer: "2.16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Try to find the minimum value of the following expression:
$$
\max _{0 \leq x_{1} \leq 1}\left|F_{1}\left(x_{1}\right)+F_{2}\left(x_{2}\right)+\ldots+F_{2017}\left(x_{2017}\right)-x_{1} x_{2} \ldots x_{2017}\right|
$$
(for all possible real-valued functions $F_{i}(t), 1 \leq i \leq 2017,0 \leq t \leq 1$ )
