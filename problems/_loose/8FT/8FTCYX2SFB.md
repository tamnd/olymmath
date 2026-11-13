---
tag: 8FTCYX2SFB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider the functions $f: \mathbb{R} \to \mathbb{R}$ for which:
$f(x+y)f(x-y) \geq (f(x))^2 - (f(y))^2$, for all $x, y \in \mathbb{R}$.
We suppose that there exists $x_0, y_0 \in \mathbb{R}$ such that
$$
f(x_0 + y_0)f(x_0 - y_0) > (f(x_0))^2 - (f(y_0))^2.
$$
Prove that $f(x) \geq 0$, for every $x \in \mathbb{R}$ or $f(x) \leq 0$, for every $x \in \mathbb{R}$.
