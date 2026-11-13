---
tag: PMFTQRXF3G
kind: problem
type: answer
answer: f(x)=cx
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{R} \longrightarrow \mathbb{R}$ such that $f(0)=0$, and for all $x, y \in \mathbb{R}$,

$$
(x-y)\left(f\left(f(x)^{2}\right)-f\left(f(y)^{2}\right)\right)=(f(x)+f(y))(f(x)-f(y))^{2}
$$
