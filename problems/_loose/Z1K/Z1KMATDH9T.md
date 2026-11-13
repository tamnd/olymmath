---
tag: Z1KMATDH9T
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154416
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=58
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Philippine Mathematical Olympiad Area Stage
---
Given $a_{n} \in \mathbb{Z}$ with $a_{10}=11$ and $a_{9}=-143$, determine the number of polynomials of the form
$$
P(x)=\sum_{n=0}^{10} a_{n} x^{n}
$$
such that the zeros of $P(x)$ are all positive integers.
