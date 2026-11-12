---
tag: AM1WE1Z5T4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Polar method.) Let the random vector $(U, V)$ have a uniform distribution on the unit circle centered at the origin. Set

$$
(X, Y)=(U, V) \sqrt{-\frac{2 \ln \left(U^{2}+V^{2}\right)}{U^{2}+V^{2}}}
$$

Show that $X$ and $Y$ are independent and have the distribution $\mathscr{N}(0,1)$.
