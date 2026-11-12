---
tag: 1HNVM78HWX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2567038
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39075
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1986
    source: hf-ai-mo-aops
    label: 1986 French Mathematical Olympiad
---
For every sequence $\{a_n\}~(n\in\mathbb N)$ we define the sequences $\{\Delta a_n\}$ and $\{\Delta^2a_n\}$ by the following formulas:
\begin{align*}\Delta a_n&=a_{n+1}-a_n,\Delta^2a_n&=\Delta a_{n+1}-\Delta a_n.\end{align*}Further, for all $n\in\mathbb N$ for which $\Delta a_n^2\ne0$ , define $$ a_n'=a_n-\frac{(\Delta a_n)^2}{\Delta^2a_n}. $$ (a) For which sequences $\{a_n\}$ is the sequence $\{\Delta^2a_n\}$ constant?
(b) Find all sequences $\{a_n\}$ , for which the numbers $a_n'$ are defined for all $n\in\mathbb N$ and for which the sequence $\{a_n'\}$ is constant.
(c) Assume that the sequence $\{a_n\}$ converges to $a=0$ , and $a_n\ne a$ for all $n\in\mathbb N$ and the sequence $\{\tfrac{a_{n+1}-a}{a_n-a}\}$ converges to $\lambda\ne1$ .
i. Prove that $\lambda\in[-1,1)$ .
ii. Prove that there exists $n_0\in\mathbb N$ such that for all integers $n\ge n_0$ we have $\Delta^2a_n\ne0$ .
iii. Let $\lambda\ne0$ . For which $k\in\mathbb Z$ is the sequence $\{\tfrac{a_n'}{a_{n+k}}\}$ not convergent?
iv. Let $\lambda=0$ . Prove that the sequences $\{a_n'/a_n\}$ and $\{a_n'/a_{n+1}\}$ converge to $0$ . Find an example of $\{a_n\}$ for which the sequence $\{a_n'/a_{n+2}\}$ has a non-zero limit.
(d) What happens with part (c) if we remove the condition $a=0$ ?
