---
tag: DN6KHXCCN3
kind: problem
type: answer
answer: n=4n=5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186137
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) For each natural number $n$, a function $f$ (with the domain of all real $x \neq 0$) is defined by

$$
f(x)=\sum_{k=0}^{n}(k-2) \cdot x^{k}
$$

Determine all natural numbers $n$ for which the function $f$ satisfies the equation $f(-1)=-f(1)$.

b) For each natural number $n$, a function $g$ (with the same domain) is defined by

$$
g(x)=\sum_{k=0}^{n} \frac{1}{3 k-2} \cdot x^{k}
$$

Investigate whether there exists a natural number $n$ for which the function $g$ satisfies the equation $g(-1)=-g(1)$.
