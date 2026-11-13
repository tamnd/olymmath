---
tag: QNAMNS2523
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=158608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An infinite square grid is colored in the chessboard pattern. For any pair of positive integers $m, n$ consider a right-angled triangle whose vertices are grid points and whose legs, of lengths $m$ and $n$, run along the lines of the grid. Let $S_{b}$ be the total area of the black part of the triangle and $S_{\infty}$ the total area of its white part. Define the function $f(m, n)=\left|S_{0}-S_{w}\right|$.
(a) Calculate $f(m, n)$ for all $m, n$ that have the same parity.
(b) Prove that $f(m, n) \leq \frac{1}{2} \max (m, n)$.
(c) Show that $f(m, n)$ is not bounded from above.
