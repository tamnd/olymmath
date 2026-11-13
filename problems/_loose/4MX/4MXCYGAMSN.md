---
tag: 4MXCYGAMSN
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54211
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=49
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian mathematical olympiad
---
Numbers $a, b$ and $c$ are such that $(a+b)(b+c)(c+a)=a b c,\left(a^{3}+b^{3}\right)\left(b^{3}+c^{3}\right)\left(c^{3}+a^{3}\right)=a^{3} b^{3} c^{3}$. Prove that $a b c=0$.
