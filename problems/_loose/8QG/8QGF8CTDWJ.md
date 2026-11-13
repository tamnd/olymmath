---
tag: 8QGF8CTDWJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a function $f:\mathbb{R}\rightarrow \mathbb{R}$. For $x\in \mathbb{R}$ we say that $f$ is *increasing in $x$* if there exists $\epsilon_x > 0$ such that $f(x)\geq{f(a)}$, $\forall a\in (x-\epsilon_x,x)$ and $f(x)\leq f(b)$, $\forall b\in (x,x+\epsilon_x)$.
$\textbf{(a)}$ Prove that if $f$ is increasing in $x$, $\forall x\in \mathbb{R}$ then $f$ is increasing over $\mathbb{R}$.
$\textbf{(b)}$ We say that $f$ is *increasing to the left* in $x$ if there exists $\epsilon_x > 0$ such that $f(x)\geq f(a) $, $ \forall a \in (x-\epsilon_x,x)$. Provide an example of a function $f: [0,1]\rightarrow \mathbb{R}$ for which there exists an infinite set $M \subset (0,1)$ such that $f$ is increasing to the left in every point of $M$, yet $f$ is increasing over no proper subinterval of $[0,1]$.
