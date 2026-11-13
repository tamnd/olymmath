---
tag: EQPKH0HK4C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Zhautykov_Olympiad/train/0000.parquet#row=24
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n > 1$ be a positive integer. A function $f: I
ightarrow \mathbb{Z}$ is given, where $I$ is the set of all integers coprime with $n$. ($\mathbb{Z}$ is the set of integers.) A positive integer $k$ is called a period of the function $f$ if $f(a) = f(b)$ for all $a, b \in I$ such that $a \equiv b \pmod{k}$. It is known that $n$ is a period of $f$. Prove that the minimal period of the function $f$ divides all its periods.

Example. For $n = 6$, the function $f$ with period $6$ is defined entirely by its values $f(1)$ and $f(5)$. If $f(1) = f(5)$, then the function has minimal period $P_{\min} = 1$, and if $f(1) \neq f(5)$, then $P_{\min} = 3$.
