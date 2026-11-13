---
tag: 8XC54FHGRV
kind: problem
type: answer
answer: "1997"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f(x)$ defined on the set of integers satisfy
$$
f(n)=\left\{\begin{array}{ll}
n-5 & n \geqslant 2000 \\
f[f(n+8)] & n<2000
\end{array} \text {, then } f(1993)=\right.
$$
$ $ .
