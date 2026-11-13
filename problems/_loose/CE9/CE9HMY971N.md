---
tag: CE9HMY971N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the list of numbers $a_{1}, a_{2}, \ldots$, where

$$
a_{n}=\underbrace{111111 \ldots 1}_{3^{n} \text { digits }}
$$

that is, $a_{1}=\underbrace{111}_{\text {three ones }}, a_{2}=\underbrace{11111111}_{\text {nine ones }}, a_{3}=\underbrace{111 \ldots 1}_{\text {twenty-seven ones }}$, and so on.

a) Show that $a_{1}$ is a multiple of 3 but not of 9.

b) Show that $a_{2}$ is a multiple of 9 but not of 27.

c) Show that $a_{3}$ is a multiple of 27 but not of 81.
