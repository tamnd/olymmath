---
tag: P00R6TSWF8
kind: problem
type: answer
answer: m > 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220565
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n\in\mathbb N}$ be a sequence, given by the recurrence:
$$ma_{n+1}+(m-2)a_n-a_{n-1}=0$$
where $m\in\mathbb R$ is a parameter and the first two terms of $a_n$ are fixed known real numbers. Find $m\in\mathbb R$, so that
$$\lim_{n\to\infty}a_n=0$$

*Proposed by Laurențiu Modan*
