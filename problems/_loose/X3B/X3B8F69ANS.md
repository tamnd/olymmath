---
tag: X3B8F69ANS
kind: problem
type: answer
answer: "+2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that the graph of the function $y=f(x)$ is symmetric to the graph of $y=2-\frac{1}{x}$ with respect to the line $y=x$. The sequence $\left\{a_{n}\right\}$ satisfies $a_{n+1} = f\left(a_{n}\right)\left(n \in \mathbf{N}^{*}\right)$.
(1) If $a_{1}=3$, prove that there exists a positive integer $n_{0}$ such that when $n \geqslant n_{0}$, we have $a_{n+1}>a_{n}$;
(2) Let $1+\frac{1}{m}<a_{1}<\frac{m}{m-1}$, where $m$ is a constant, $m \in \mathbf{N}^{*}$ and $m \neq 1$. Find the smallest positive integer $N$ such that when $n \geqslant N$, we always have $0<a_{n}<1$.
