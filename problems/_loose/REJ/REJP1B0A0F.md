---
tag: REJP1B0A0F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Give an example of a function with the above property, which is primitivable and is non-identically vanishing on any interval included in $[0, 1]$.

b) If $f$ is continuous on $(0, 1]$, show that $f$ is primitivable on $[0, 1]$.

where $f : [0, 1] \to \mathbb{R}$ is an integrable function with $f(0) = 0$, such that
$$
\int_{0}^{1} \left( f\left(\frac{x}{n}\right) + f\left(\frac{x}{n+1}\right) \right) dx = 0, \text{for any } n \in \mathbb{N}^{*}.
$$
