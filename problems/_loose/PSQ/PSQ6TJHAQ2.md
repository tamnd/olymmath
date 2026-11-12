---
tag: PSQ6TJHAQ2
kind: problem
type: answer
answer: F(p)=\frac{1}{b\sqrt{2}}e^{-p^{2}/(2b)^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the complex Fourier transform of the function

$$
f(x)=e^{-b^{2} x^{2}}
$$

using the formula

$$
e^{-x^{2}} \longmapsto \frac{1}{\sqrt{2}} e^{-p^{2} / 4}
$$
