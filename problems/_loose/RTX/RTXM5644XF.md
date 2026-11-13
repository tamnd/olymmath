---
tag: RTXM5644XF
kind: problem
type: answer
answer: "1990"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
\left\{a_{n}\right\}(n \geqslant 1)$ is a sequence of complex numbers, where $a_{n}$ is defined as:
$$
a_{n}=(1+\mathrm{i})\left(1+\frac{\mathrm{i}}{\sqrt{2}}\right) \cdots\left(1+\frac{\mathrm{i}}{\sqrt{n}}\right) .
$$

Does there exist a natural number $m$ such that
$$
\sum_{n=1}^{m}\left|a_{n}-a_{n+1}\right|=1990 ?
$$
(1990-1991 Spanish Mathematical Olympiad)
