---
tag: 74YAJ6RMJJ
kind: problem
type: answer
answer: \frac{2}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer such that $n \geq 2$. Let $x_1, x_2,..., x_n$ be $n$ distinct positive integers and $S_i$ sum of all numbers between them except $x_i$ for $i=1,2,...,n$. Let $f(x_1,x_2,...,x_n)=\frac{GCD(x_1,S_1)+GCD(x_2,S_2)+...+GCD(x_n,S_n)}{x_1+x_2+...+x_n}.$
Determine maximal value of $f(x_1,x_2,...,x_n)$, while $(x_1,x_2,...,x_n)$ is an element of set which consists from all $n$-tuples of distinct positive integers.
