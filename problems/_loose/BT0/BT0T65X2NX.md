---
tag: BT0T65X2NX
kind: problem
type: answer
answer: f()=\frac{1}{2}\cdot\sqrt{\frac{}{1+}},\forall\in[\frac{1}{e^{2}};e^{2}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the continuous functions $f:\left[\frac{1}{e^{2}} ; e^{2}\right] \rightarrow \mathbb{R}$, for which

$$
\int_{-2}^{2} \frac{1}{\sqrt{1+e^{x}}} f\left(e^{-x}\right) d x-\int_{-2}^{2} f^{2}\left(e^{x}\right) d x=\frac{1}{2}
$$
