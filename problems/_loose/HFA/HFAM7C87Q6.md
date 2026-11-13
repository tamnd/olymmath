---
tag: HFAM7C87Q6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160983
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a function $f: \mathbb{N} \rightarrow \mathbb{N}$, we say it is lively if for all $a, b \in \mathbb{N}$, the following holds:

$$
f(a+b-1)=\underbrace{f(f(\cdots f}_{a \text { times }}(b) \cdots)) .
$$

Let $g$ be a lively function such that for some $A \geqslant 2$, we have $g(A+2018)=g(A)+1$.

(a) Prove that for all $n \geqslant A+2$, $g\left(n+2017^{2017}\right)=g(n)$.

(b) If $g\left(A+2017^{2017}\right) \neq g(A)$, determine $g(n)$ for $n \leqslant A-1$.

(Marco Radovanović)
