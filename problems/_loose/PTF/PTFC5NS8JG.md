---
tag: PTFC5NS8JG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56846
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players are playing a game. One thinks of a natural number $n$, and the other asks questions of the type "is it true that $n$ is not less than $x$" (the number $x$ he can choose at his discretion) and receives answers "yes" or "no". For each possible strategy $T$ of the second player, we associate a function $f_{T}(n)$, equal to the number of questions (until guessing), if the number $n$ was thought of. For example, let the strategy $T$ be such that first the questions are asked: "is it true that $n$ is not less than 10?", "is it true that $n$ is not less than 20?", ... until the answer to the question "is it true that $n$ is not less than $10(k+1)$" is "no", and then the questions "is it true that $n$ is not less than $10 k+1$", "is it true that $n$ is not less than $10 k+2$" and so on. Then $f_{T}(n)=a+2+{ }^{(n-a)} / 10$, where $a$ is the last digit of the number $n$, that is, $f_{T}(n)$ grows approximately as $n / 10$.

a) Propose a strategy for which the function $f_{T}$ grows more slowly.

b) When comparing two strategies, it is convenient for an arbitrary strategy $T$ instead of the function $f_{T}$ to introduce the function $\bar{f}_{T}$, the value of which for any natural number $n$ is the greatest of the numbers $f_{T}(k)$, where $k$ takes values from 1 to $n$. Estimate $\bar{f}_{T}$ from below for an arbitrary strategy $T$.
