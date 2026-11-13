---
tag: T3YHQ5D2PX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geq 3$, let $C_{n}$ be the collection of all $n$-tuples $a=(a_{1},a_{2},...,a_{n})$ of nonnegative reals $a_i$, $i=1,...,n$, such that $a_{1}+a_{2}+...+a_{n}=1$. For $k \in \left \{ 1,...,n-1 \right \}$ and $a \in C_{n}$, consider the sum set $\sigma_{k}(a) = \left \{a_{1}+...+a_{k},a_{2}+...+a_{k+1},...,a_{n-k+1}+...+a_{n} \right \}$.
Show the following.
(a) There exist $m_k=\max\{\min\sigma_k(a):a\in\mathcal{C}_n\}$ and $M_k=\min\{\max\sigma_k(a):a\in\mathcal{C}_n\}$.
(b) It holds that $ {1\leq\sum_{k=1}^{n-1}(\frac{1}{M_k}-\frac{1}{m_k})\leq n-2}$. Moreover, on the left side, equality is attained only for finitely many values of $n$, whereas on the right side, equality holds for infinitely values of $n$.
