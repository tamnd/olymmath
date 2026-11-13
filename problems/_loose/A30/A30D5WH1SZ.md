---
tag: A30D5WH1SZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x, y)=a x^{2}+2 b x y+c y^{2}$, for all real numbers $x, y$ we have $f(x, y) \geqslant 0$, where $a, b, c$ are positive real numbers.
Prove: For all real numbers $x_{1}, x_{2}, y_{1}, y_{2}$,
$$
\sqrt{f\left(x_{1}, y_{1}\right) f\left(x_{2}, y_{2}\right)} f\left(x_{1}-x_{2}, y_{1}-y_{2}\right) \geqslant\left(a c-b^{2}\right)\left(x_{1} y_{2}-x_{2} y_{1}\right)^{2} .
$$
