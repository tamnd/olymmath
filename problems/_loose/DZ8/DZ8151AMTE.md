---
tag: DZ8151AMTE
kind: problem
type: answer
answer: "25"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91217
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=26
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The real numbers $a_{1}, a_{2}, \ldots, a_{16}$ fulfill the two conditions

$$
\sum_{i=1}^{16} a_{i}=100 \text { and } \sum_{i=1}^{16} a_{i}^{2}=1000
$$

What is the largest possible value that $a_{16}$ can take?
