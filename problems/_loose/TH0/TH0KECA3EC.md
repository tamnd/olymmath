---
tag: TH0KECA3EC
kind: problem
type: answer
answer: "6048"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154350
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=11
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 19th Philippine Mathematical Olympiad
---
Let $f$ be a real-valued function such that
$$
f(x-f(y))=f(x)-x f(y)
$$
for any real numbers $x$ and $y$. If $f(0)=3$, determine $f(2016)-f(2013)$.
