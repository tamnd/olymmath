---
tag: 5RGVVEFAYR
kind: problem
type: answer
answer: "-2017"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88932
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=68
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatia Mathematical Competitions
---
Let $a, b$ and $c$ be real numbers and $f: \mathbb{R} \rightarrow \mathbb{R}$ be a function defined by

$$
f(x)=a x^{5}+b x^{3}+c \sin x-1
$$

If $f(-2015)=2015$, determine $f(2015)$.
