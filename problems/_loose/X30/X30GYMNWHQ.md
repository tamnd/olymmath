---
tag: X30GYMNWHQ
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya and Vasya are playing the following game. Petya chooses a non-negative random value $\xi$ with expectation $\mathbb{E} [\xi ] = 1$, after which Vasya chooses his own value $\eta$ with expectation $\mathbb{E} [\eta ] = 1$ without reference to the value of $\xi$. For which maximal value $p$ can Petya choose a value $\xi$ in such a way that for any choice of Vasya's $\eta$, the inequality $\mathbb{P}[\eta \geq \xi ] \leq p$ holds?
