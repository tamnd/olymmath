---
tag: WNE0F4ZX6C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequences $\left\{a_{n}\right\},\left\{b_{n}\right\}$ satisfy $a_{1}=3, a_{n+1}=2 a_{n}+2^{n+1}-1, b_{n}=\frac{a_{n}-1}{2^{n}}\left(n \in \mathbf{N}^{*}\right)$.
(1) Find the general term formula for the sequence $\left\{b_{n}\right\}$;
(2) Let $c_{n}=\frac{(-1)^{n}}{b_{n}}, T_{n}$ be the sum of the first $n$ terms of the sequence $\left\{c_{n}\right\}$, prove that: $T_{2 n}>-\frac{\sqrt{2}}{2}$.
