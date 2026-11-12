---
tag: RT9M71BRGH
kind: problem
type: answer
answer: F(p)=i\sqrt{\frac{\pi}{2}}\operatorname{sign}(p)e^{-|p|}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the complex Fourier transform of the function

$$
f(x)=\frac{x}{x^{2}+1}
$$

using the formula

$$
\frac{1}{x^{2}+1} \longmapsto \sqrt{\frac{\pi}{2}} e^{-|p|}
$$
