---
tag: 50DJZZ4T6Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250568
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=43
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Let $f : N \to [0, \infty)$ be a function satisfying the following conditions:

a) $f(4)=2$

b) $\frac{1}{f( 0 ) + f( 1)} + \frac{1}{f( 1 ) + f( 2 )} + ... + \frac{1}{f (n ) + f(n + 1) }= f ( n + 1)$ for all integers $n \ge 0$.

Find $f(n)$ in closed form.
