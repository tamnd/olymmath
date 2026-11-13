---
tag: QR4VQT039R
kind: problem
type: answer
answer: \frac{(2n-1)\cdot3^{n}+1}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f(x)=\frac{x^{3}+3 x}{3 x^{2}+1}$, the sequence $\left\{x_{n}\right\}$ satisfies: $x_{1}=2, x_{n+1}=f\left(x_{n}\right)\left(n \in N^{*}\right)$, and let $b_{n}=\log _{3}\left(\frac{x_{n+1}-1}{x_{n+1}+1}\right) \left(n \in N^{*}\right)$.
(I) Prove that the sequence $\left\{b_{n}\right\}$ is a geometric sequence, and find the general term formula for the sequence $\left\{b_{n}\right\}$;
(II) Let $c_{n}=-n b_{n}\left(n \in N^{*}\right)$, find the sum of the first $n$ terms of the sequence $\left\{c_{n}\right\}$, denoted as $T_{n}$.
