---
tag: BAMR0H710Z
kind: problem
type: answer
answer: \sum_{k=0}^{\lfloor n/2 \rfloor} \frac{n!}{2^k k! (n-2k)!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer bigger than $0$. Let $\mathbb{A}= ( a_1,a_2,...,a_n )$ be a set of real numbers. Find the number of functions $f:A \rightarrow A$ such that $f(f(x))-f(f(y)) \ge x-y$ for any $x,y \in \mathbb{A}$, with $x>y$.
