---
tag: WGRP9Y3YC4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:\mathbb{R}\to\mathbb{R}$ be a differentiable function such that its derivative $f'$ is a continuous function. Moreover, assume that for all $x\in\mathbb{R}$, $$0\leqslant \vert f'(x)\vert\leqslant \frac{1}{2}$$ Define a sequence of real numbers $\{a_n\}_{n\in\mathbb{N}}$ by :$$a_1=1~~\text{and}~~a_{n+1}=f(a_n)~\text{for all}~n\in\mathbb{N}$$ Prove that there exists a positive real number $M$ such that for all $n\in\mathbb{N}$, $$\vert a_n\vert \leqslant M$$
