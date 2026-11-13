---
tag: YS5C6KRER5
kind: problem
type: answer
answer: "186"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0009.parquet#row=341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Ana and Banana play a game. Banana thinks of a function $f: \mathbb{Z} \to \mathbb{Z}$ and a prime number $p$. He tells Ana that $f$ is nonconstant, $p < 100$, and $f(x+p) = f(x)$ for all integers $x$. Ana's goal is to determine the value of $p$. She writes down $n$ integers $x_1, \dots, x_n$. After seeing this list, Banana writes down $f(x_1), \dots, f(x_n)$ in order. Ana wins if she can determine the value of $p$ from this information. Find the smallest value of $n$ for which Ana has a winning strategy.
