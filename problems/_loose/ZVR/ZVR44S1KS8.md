---
tag: ZVR44S1KS8
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=1, a_{n+1} a_{n-1}=a_{n} a_{n-1}+a_{n}^{2}\left(n \in \mathbf{N}^{*}, n \geqslant 2\right), \frac{a_{n+1}}{a_{n}}=k n+1$. Let $f(n)=\left\{\begin{array}{l}a_{n}+5 a_{n-1}\left(n=2 l-1, l \in \mathbf{N}^{*}\right) \\ 3 a_{n}+2 a_{n-1}\left(n=2 l, l \in \mathbf{N}^{*}\right)\end{array}\right.$, find the positive integer $m$, such that $f(m+15)=5 A_{m+14}^{15}$ $f(m)$ holds.
