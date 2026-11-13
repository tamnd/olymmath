---
tag: G2NJHXBV8Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144654
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ satisfy
$$
a_{n+1}=a_{n}+1, b_{n+1}=\frac{1}{2} a_{n}+b_{n} \text {. }
$$

For a positive integer $n$, define the function
$$
f_{n}(x)=x^{2}+a_{n} x+b_{n} \text {. }
$$

Prove: If $a_{k}$ and $b_{k}$ are integers, and $f_{k}(x)$ has two integer roots, then there must be infinitely many $f_{n}(x)$ that have two integer roots.
