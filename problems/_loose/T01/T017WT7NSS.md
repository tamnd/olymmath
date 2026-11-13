---
tag: T017WT7NSS
kind: problem
type: answer
answer: \ln2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85104
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Moldova/train/0000.parquet#row=137
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo
    source: hf-mathnet
    label: Moldova Olimpiada Republicană la Matematică
---
Let the functions $I:(0 ;+\infty) \rightarrow \mathbb{R}, I(a)=\int_{-a}^{a} \frac{d x}{\left(e^{x}+1\right)(|x|+a)}$. Show that $I$ is a constant function.
