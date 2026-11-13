---
tag: XP5RFF43YR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Carnegie Corporation is trying to promote a new department director from its employees. Carnegie Corporation has $n$ employees each with some unknown real-valued score and wants to pick the $M$-th highest scoring employee to be the new department director. The corporation has a magical machine that, once a day, can be used to compare two employees to see which one has a higher score. Unfortunately, this machine has a magical consequence: after every $k$ uses of this machine, if a new department director has not been chosen by the end of the day, one random employee is fired and a new employee (who has not necessarily the same score) is hired. Assume no two employees have equal scores and scores don't change over time.

Machines with a higher constant of $k$ will be more expensive, so management wants to minimize the value of $k$. Devise an algorithm which uses the minimum possible $k$ guaranteeing that, given any $1\leq M \leq n$, we can promote the $M$-th highest scoring employee as the new department director in finitely many days.

**Scoring:** An algorithm that solves the case for a certain $k$ in terms of $n\geq 2$ and some constant $c\in \mathbb{R}^+$ will be awarded:

- $10$ pts for any finite $k$

- $20$ pts for any $k\leq cn\log(n)$ for some constant $c>0$

- $40$ pts for any $k\leq cn$ for some constant $c>1$

- $70$ pts for $k\leq n$

- $85$ pts for $k\leq n-\lfloor\sqrt{n/2}-\tfrac{1}{2}\rfloor + 1$

- $100$ pts for $k\leq n-\lfloor\sqrt{n}-\tfrac{1}{2}\rfloor + 1$

*Proposed by David Tang*
