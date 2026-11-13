---
tag: EWTPWXBGD7
kind: problem
type: answer
answer: "14"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is well-known that the $n^{\text{th}}$ triangular number can be given by the formula $n(n+1)/2$. A Pythagorean triple of $\textit{square numbers}$ is an ordered triple $(a,b,c)$ such that $a^2+b^2=c^2$. Let a Pythagorean triple of $\textit{triangular numbers}$ (a PTTN) be an ordered triple of positive integers $(a,b,c)$ such that $a\leq b<c$ and
$$\dfrac{a(a+1)}2+\dfrac{b(b+1)}2=\dfrac{c(c+1)}2.$$
For instance, $(3,5,6)$ is a PTTN ($6+15=21$). Here we call both $a$ and $b$ $\textit{legs}$ of the PTTN. Find the smallest natural number $n$ such that $n$ is a leg of $\textit{at least}$ six distinct PTTNs.
