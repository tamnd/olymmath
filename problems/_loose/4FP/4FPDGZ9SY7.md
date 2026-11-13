---
tag: 4FPDGZ9SY7
kind: problem
type: answer
answer: \frac{1}{2}\ln^{2}(x+\sqrt{x^{2}+1})+C
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178606
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $I$, $J$ be intervals and $f: I \rightarrow \mathbf{R}^{*}$ a function with a primitive $F: I \rightarrow \mathbf{R}$ that is bijective.

a) Calculate $\int \frac{F^{-1}(x)}{f\left(F^{-1}(x)\right)} d x, x \in J$.

b) Calculate $\int \frac{\ln \left(x+\sqrt{x^{2}+1}\right)}{\sqrt{x^{2}+1}} d x, x \in \mathbf{R}$.
