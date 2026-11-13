---
tag: SV1TQJK8BG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geqslant 1$, Élodie wants to draw $n$ rectangles $R_{1}, R_{2}, \ldots, R_{n}$ whose sides are vertical and horizontal. We say that two rectangles $R_{i}$ and $R_{j}$ meet if they have at least one point in common (even on their boundary), and that they follow each other if $i \equiv j \pm 1 \bmod n$.

For which integers $n$ can Élodie draw her $n$ rectangles so that two rectangles meet if and only if they do not follow each other?
