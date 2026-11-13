---
tag: KEWTTAFVMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be a natural number. Let $d_{1}, \ldots, d_{r}$ be all distinct positive divisors of $n$ that are smaller than $n$ itself. Determine all $n$ for which applies:

$$
\operatorname{kgV}\left(d_{1}, \ldots, d_{r}\right) \neq n
$$

Note: For $n=18$, for example, you would have $d_{1}=1, d_{2}=2, d_{3}=3, d_{4}=6, d_{5}=9$ and therefore $\operatorname{kgV}(1,2,3,6,9)=18$.
