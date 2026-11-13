---
tag: 52P8MYGA1B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $\mathrm{m}$ greater than 1, the sequence $\mathrm{x}_{0}, \mathrm{x}_{1}, \mathrm{x}_{2}, \ldots$ is defined as follows: $\mathrm{x}_{\mathrm{i}}=$ $\left\{\begin{array}{c}2^{i}, 0 \leq i \leq m-1 \\ \sum_{j=1}^{\mathrm{m}} \mathrm{x}_{\mathrm{i}-\mathrm{j}}, \mathrm{i} \geq \mathrm{m}\end{array}\right.$ . Find the maximum value of $k$ such that there are $k$ consecutive terms in the sequence that are divisible by $m$.
