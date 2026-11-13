---
tag: MBSJGHAQ6Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Set $\mathbb Q_1=\{x\in\mathbb Q\mid x\ge1\}$. Suppose that a function $f:\mathbb Q_1\to\mathbb R$ satisfies the inequality $\left|f(x+y)-f(x)-f(y)\right|<\epsilon$ for all $x,y\in\mathbb Q_1$, where $\epsilon>0$ is given. Prove that there exists a real number $q$ such that
$$\left|\frac{f(x)}x-q\right|<2\epsilon \text{for all }x\in\mathbb Q_1.$$
