---
tag: GKN6EWXEJN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime. Define $f_n(k)$ to be the number of positive integers $1\leq x\leq p-1$ such that $$\left(\left\{\frac{x}{p}\right\}-\left\{\frac{k}{p}\right\}\right)\left(\left\{\frac{nx}{p}\right\}-\left\{\frac{k}{p}\right\}\right)<0.$$ Let $a_n=f_n\left(\frac 12\right)+f_n\left(\frac 32\right)+\dots+f_n\left(\frac{2p-1}{2}\right)$, find $\min\{a_2, a_3, \dots, a_{p-1}\}$.
