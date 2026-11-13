---
tag: X56FJ0HFJ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94688
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the $n$-element set $A=\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$, define the multiset
$$
A^{+}=\left\{a_{i}+a_{j} \mid a_{i} 、 a_{j} \in A, i<j\right\},
$$

For example, for the set $A=\{1,2,3,4,5\}$, then
$$
A^{+}=\{3,4,5,5,6,6,7,7,8,9\} \text {. }
$$

Let $n(n \geqslant 2)$-element rational number sets
$$
A=\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}, B=\left\{b_{1}, b_{2}, \cdots, b_{n}\right\}
$$

satisfy $A \cap B=\varnothing, A^{+}=B^{+}$.
Prove: There exists a positive integer $k$, such that $n=2^{k}$; conversely, for any positive integer $k$, if $n=2^{k}$, then there exist $n$-element rational number sets
$$
A=\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}, B=\left\{b_{1}, b_{2}, \cdots, b_{n}\right\}
$$

satisfy $A \cap B=\varnothing, A^{+}=B^{+}$.
