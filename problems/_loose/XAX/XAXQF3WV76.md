---
tag: XAXQF3WV76
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154261
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 17th Philippine Mathematical Olympiad Area Stage
---
Suppose that the function $y=f(x)$ satisfies $1-y=\frac{9 e^{x}+2}{12 e^{x}+3}$. If $m$ and $n$ are consecutive integers so that $m<\frac{1}{y}<n$ for all real $x$, find the value of $m n$.
