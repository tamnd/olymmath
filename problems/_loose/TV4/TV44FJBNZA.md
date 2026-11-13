---
tag: TV44FJBNZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
Let $a$, $b$, $c$, $d$ be integers with $a$, $c$ both nonzero, and define $x_n = \gcd(an + b, cn + d)$ for all positive integers $n$. Show that the sequence $x_1, x_2, x_3, \dots$ is unbounded if and only if $ad = bc$.
