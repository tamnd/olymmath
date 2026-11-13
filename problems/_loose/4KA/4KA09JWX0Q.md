---
tag: 4KA09JWX0Q
kind: problem
type: answer
answer: +n+p=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74517
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=16
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Mathematical Olympiad
---
Let $a$ and $b$ be real numbers such that there exist distinct real numbers $m$, $n$, and $p$, satisfying the equalities below:

$$
\left\{\begin{array}{l}
m^{3}+a m+b=0 \\
n^{3}+a n+b=0 \\
p^{3}+a p+b=0
\end{array}\right.
$$

Show that $m+n+p=0$.
