---
tag: A9JFDCNHYG
kind: problem
type: answer
answer: \frac{1}{2} \left(1 - \frac{1}{3^{100}}\right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a function defined on $\{(i,j): i,j \in \mathbb{N}\}$ satisfying

(i) $f(i,i+1)=\frac{1}{3}$ for all $i$

(ii) $f(i,j)=f(i,k)+f(k,j)-2f(i,k)f(k,j)$ for all $k$ such that $i <k<j$.

Find the value of $f(1,100)$.
