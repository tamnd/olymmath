---
tag: 27EDCY4HFZ
kind: problem
type: answer
answer: \frac{1}{\sqrt[2^{n-1}]{2} - 1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sequence {$x_n$} satisfies: $x_1=1$ , ${x_n=\sqrt{x_{n-1}^2+x_{n-1}}+x_{n-1}}$ ( ${n>=2}$ )
Find the general term of {$x_n$}
