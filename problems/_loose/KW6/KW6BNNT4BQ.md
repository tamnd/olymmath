---
tag: KW6BNNT4BQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x), g(x)$ have continuous derivatives on $[0,1]$, and $f(0)=0, f^{\prime}(x) \geqslant 0, g^{\prime}(x) \geqslant 0$. Prove: For any $a \in[0,1]$, we have $\int_{0}^{a} g(x) f^{\prime}(x) \mathrm{d} x+\int_{0}^{1} f(x) g^{\prime}(x) \mathrm{d} x \geqslant f(a) g(1)$.
