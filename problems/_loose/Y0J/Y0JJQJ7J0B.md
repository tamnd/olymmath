---
tag: Y0JJQJ7J0B
kind: problem
type: answer
answer: a_{n}=3^{n}-2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88543
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=9
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo
    source: hf-mathnet
    label: South Africa South-Afrika 2011-2013
---
Given is the sequence $\left(a_{n}\right)$,

$$
a_{1}=1, a_{n}=3 a_{n-1}+2^{n-1}, \text { for } n \geq 2
$$

Express the general term of the sequence $a_{n}$ in terms of $n$.
