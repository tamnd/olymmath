---
tag: 3F9XR2V8VK
kind: problem
type: answer
answer: S_{2n+1}(x)=0,\quadS_{2n}(x)=(1-x)(1-x^{3})\ldots(1-x^{2n-1})=\frac{h_{2n}(x)}{h_{n}(x^{2})}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=70153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the sum $S_{l}(x)=g_{0, l}(x)-g_{1, l-1}(x)+g_{2, l-2}(x)-\ldots+(-1)^{l} g_{l, 0}(x)$.

The definition of Gauss polynomials $g_{k, 1}(x)$ can be found in the reference manual.
