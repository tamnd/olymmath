---
tag: P4Y7EEVF7D
kind: problem
type: answer
answer: \left\{0, \frac{8}{3}, \frac{128}{5}, 336, 691.2\right\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $ P_1(x)=\frac{d}{dx}(x^2-1),\ P_2(x)=\frac{d^2}{dx^2}(x^2-1)^2,\ P_3(x)=\frac{d^3}{dx^3}(x^2-1)^3$.

Find all possible values for which $ \int_{-1}^1 P_k(x)P_l(x)\ dx\ (k=1,\ 2,\ 3,\ l=1,\ 2,\ 3)$ can be valued.
