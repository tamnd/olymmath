---
tag: 9N0YHEMACZ
kind: problem
type: answer
answer: "1009"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73699
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0000.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil
---
Let $S(n)$ be the sum of the digits of an integer $n$. For example, $S(327)=3+2+7=12$. Find the value of

$$
A=S(1)-S(2)+S(3)-S(4)+\ldots-S(2016)+S(2017)
$$
