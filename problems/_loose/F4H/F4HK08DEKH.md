---
tag: F4HK08DEKH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\Gamma = \{\varepsilon,0,00,\ldots\}$ be the set of all finite strings consisting of only zeroes. We consider $\textit{six-state unary DFAs}$ $D = (F,q_0,\delta)$ where $F$ is a subset of $Q = \{1,2,3,4,5,6\}$, not necessarily strict and possibly empty; $q_0\in Q$ is some $\textit{start state}$; and $\delta: Q\rightarrow Q$ is the $\textit{transition function}$.
For each such DFA $D$, we associate a set $F_D\subseteq\Gamma$ as the set of all strings $w\in\Gamma$ such that
$$\underbrace{\delta(\cdots(\delta(q_0))\cdots)}_{|w|\text{ applications}}\in F,$$

We say a set $\mathcal D$ of DFAs is $\textit{diverse}$ if for all $D_1,D_2\in\mathcal D$ we have $F_{D_1}\neq F_{D_2}$. What is the maximum size of a diverse set?
