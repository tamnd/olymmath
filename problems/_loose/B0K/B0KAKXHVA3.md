---
tag: B0KAKXHVA3
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102927
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=33
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2003
    source: hf-mathnet
    label: Vietnam 2003 Vietnamese Mathematical Olympiad
---
Find the largest positive integer $n$, such that the system of equations
$$
(x+1)^{2}+y_{1}^{2}=(x+2)^{2}+y_{2}^{2}=\cdots=(x+k)^{2}+y_{k}^{2}=\cdots=(x+n)^{2}+y_{n}^{2}
$$

has integer solutions $\left(x, y_{1}, y_{2}, \cdots, y_{n}\right)$.
