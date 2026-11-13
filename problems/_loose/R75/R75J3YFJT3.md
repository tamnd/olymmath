---
tag: R75J3YFJT3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90779
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $x$ a positive real number with finitely many decimal places, denote by $r(x)$ the number formed by reversing the digits and decimal point of $x$. For instance, $r(98.6)=6.89$ and $r(740)=0.047$.

(a) Prove that for all positive real numbers $x$ and $y$ with finitely many decimal places,

$$
r(x y) \leq 10 r(x) r(y) .
$$

(b) Determine whether there exist values of $x$ and $y$, each having at least 2015 nonzero digits, such that equality holds.
