---
tag: 40WNDQJNQG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The integers $a$ and $b$ are coprime, with $a > b$. Compare the numbers:

$$
m=\left\lfloor\frac{a}{b}\right\rfloor+\left\lfloor\frac{2 a}{b}\right\rfloor+\cdots+\left\lfloor\frac{(b-1) a}{b}\right\rfloor
$$

and:

$$
n=\left\lfloor\frac{b}{a}\right\rfloor+\left\lfloor\frac{2 b}{a}\right\rfloor+\cdots+\left\lfloor\frac{(a-1) b}{a}\right\rfloor
$$

where $\lfloor x\rfloor$ denotes the integer part of the real number $x$.
