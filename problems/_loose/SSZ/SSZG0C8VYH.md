---
tag: SSZG0C8VYH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4084
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151261
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
Let $f:(0,1) \rightarrow(0,1)$ be a differentiable function with a continuous derivative such that for every positive integer $n$ and odd positive integer $a<2^{n}$, there exists an odd positive integer $b<2^{n}$ such that $f\left(\frac{a}{2^{n}}\right)=\frac{b}{2^{n}}$. Determine the set of possible values of $f^{\prime}\left(\frac{1}{2}\right)$.
