---
tag: Y53NQZ6G0S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
f(x)=\sin \left(x+\alpha_{1}\right)+\frac{1}{1 \times 2} \sin \left(x+\alpha_{2}\right)+\cdots+\frac{1}{(n-1) n} \sin \left(x+\alpha_{n}\right) \text {, }
$$

where $n \in \mathbf{N}^{*}, \alpha_{i}(i=1,2, \cdots, n)$ are constants. Prove:
( I ) There exists a real number $x_{0}$ such that $f\left(x_{0}\right) \neq 0$;
(II) If $f\left(x_{1}\right)=f\left(x_{2}\right)=0$, then $\left|x_{1}-x_{2}\right|=k \pi$, where $k$ is a positive integer.
