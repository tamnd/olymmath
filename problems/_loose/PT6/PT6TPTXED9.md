---
tag: PT6TPTXED9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178400
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a<b$ be real numbers and $f:(a, b) \rightarrow \mathbb{R}$ a function such that the functions $g:(a, b) \rightarrow \mathbb{R}$, $g(x)=(x-a) f(x)$ and $h:(a, b) \rightarrow \mathbb{R}, h(x)=(x-b) f(x)$ are increasing. Show that the function $f$ is continuous on $(a, b)$.
