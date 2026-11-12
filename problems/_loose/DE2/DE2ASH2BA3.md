---
tag: DE2ASH2BA3
kind: problem
type: answer
answer: \sqrt[n]{x_{0}^{n}+\Deltax}\approxx_{0}+\frac{\Deltax}{nx_{0}^{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Obtain the approximate formula

$$
\sqrt[n]{x_{0}^{n}+\Delta x} \approx x_{0}+\frac{\Delta x}{n x_{0}^{n-1}}
$$

under the condition $x_{0}>0,|\Delta x| \ll x_{0}^{n}$.
