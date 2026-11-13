---
tag: WG25J0B8AQ
kind: problem
type: answer
answer: \frac{1}{24}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x \in \mathbf{R}$, prove: $\sin ^{6} x+\cos ^{6} x+\sin ^{2} x=2 \sin ^{4} x+\cos ^{4} x$. This is a common problem in the constant transformation of trigonometric functions of the same angle. Below, we will transform the premise and conclusion of this proposition to construct a new proposition.
$$
\text { Let } f(x)=\sin ^{6} x+\cos ^{6} x-2 \sin ^{4} x+\sin ^{2} x-\cos ^{4} x \text {, then } f(x) \equiv 0, x \in \mathbf{R} \text {. }
$$
