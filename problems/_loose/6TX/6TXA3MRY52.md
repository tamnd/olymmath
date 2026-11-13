---
tag: 6TXA3MRY52
kind: problem
type: answer
answer: f(2) · ln 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th NMO
---
Let $f : [\frac{1}{2}, 2] \to \mathbb{R}$ be a continuous and monotone function, for which the following equality holds:
$$
\int_{\frac{1}{2}}^{2} \frac{(1-x^2) \cdot f(x)}{1+x^2+x^4} dx = 0.
$$
Show that
$$
\int_{\frac{1}{2}}^{2} \frac{x f(x)}{1+x^2} dx = f(2) \cdot \ln 2.
$$
