---
tag: KXPYR1K5KC
kind: problem
type: answer
answer: "59"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Consider a function $f$ with $f(1)=2$ and $f(f(n))=f(n)+3 n$ for all positive integers $n$. When we substitute $n=1$, the equation $f(f(n))=f(n)+3 n$ becomes $f(f(1))=f(1)+3(1)$. Since $f(1)=2$, then $f(2)=2+3=5$. Continuing in this way, determine the value of $f(26)$.

(b) Prove that there is no function $g$ with $g(1)=2$ and $g(g(n)+m)=n+g(m)$ for all positive integers $n$ and $m$.

(c) Prove that there is exactly one function $h$ with the following properties:

- the domain of $h$ is the set of positive integers,
- $h(n)$ is a positive integer for every positive integer $n$, and
- $h(h(n)+m)=1+n+h(m)$ for all positive integers $n$ and $m$.
