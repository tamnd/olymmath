---
tag: 7R4KC7P1DR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69792
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Let $m_{0}$ and $m_{1}$ be integers, $0 < m_{1} < m_{0}$. Then there exist integers $a_{0}, a_{1}, \ldots, a_{k}$ and $m_{2}, \ldots, m_{k}$ such that

$m_{1}>m_{2}>m_{3}>\ldots>m_{k}>0, a_{k}>1$

$m_{0}=m_{1} a_{0}+m_{2}$

$m_{1}=m_{2} a_{1}+m_{3}$,

$m_{2}=m_{3} a_{2}+m_{4}$

$\cdots$

$m_{k-2}=m_{k-1} a_{k-1}+m_{k}$

$m_{k-1}=m_{k} a_{k}$

and $\left(m_{0}, m_{1}\right)=m_{k}$.

b) Prove that for any $s$ from $k-1$ to 0, there exist integers $u_{s}$, $v_{s}$ such that $m_{s} u_{s}+m_{s+1} v_{s}=d$, where $d=$ $\left(m_{0}, m_{1}\right)$.

In particular, for some $u$ and $v$, the equation $m_{0} u+m_{1} v=d$ holds.
