---
tag: TVHNQVN55M
kind: problem
type: answer
answer: "0.08926"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
By first dividing the integration interval into 10 equal parts and then into 20 parts, find the approximate integrals $J_{10}$ and $J_{20}$. Determine the accuracy using the difference $\varepsilon=\left|J_{10}-J_{20}\right|$.

$$
J=\int_{-1}^{9} \sqrt{x^{2}+4} d x
$$

a) using the trapezoidal rule;

b) using Simpson's rule
