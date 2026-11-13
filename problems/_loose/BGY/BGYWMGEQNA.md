---
tag: BGYWMGEQNA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2015
    source: hf-mathnet
    label: Baltic Way Baltic Way 2015 Shortlisted Problems
---
A function $f: \mathbb{R} \to \mathbb{R}$ satisfies
$$
f(f(a)) = f(a) \text{and} f(a+b) = f(a) + f(b)
$$
for all real numbers $a, b$. Prove that, for all real $x$, there exists a unique $y$ such that $f(y) = 0$ and $x = y + f(z)$ for some real $z$.
