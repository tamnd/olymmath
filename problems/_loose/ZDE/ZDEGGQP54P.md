---
tag: ZDEGGQP54P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be a positive integer, and let $\mathbf{a}=(a(1), \ldots, a(N))$ and $\mathbf{b}=(b(1), \ldots, b(N))$ be sequences of non-negative integers, each written on a circle (so we assume $a(i \pm N)=a(i)$ and $b(i \pm N)=b(i))$. We say a is $\mathbf{b}$-harmonic, if each $a(i)$ is the arithmetic mean of the counterclockwise nearest $b(i)$ numbers, the clockwise nearest $b(i)$ numbers, and $a(i)$ itself; that is,

$$
a(i)=\frac{1}{2 b(i)+1} \sum_{s=-b(i)}^{b(i)} a(i+s)
$$

(A term of a may appear more than once in the above sum.) Suppose that neither $\mathbf{a}$ nor $\mathbf{b}$ is constant, and that both $\mathbf{a}$ is $\mathbf{b}$-harmonic, and $\mathbf{b}$ is a-harmonic. Prove that more than half of the $2 N$ terms across both sequences vanish.

United KingDOM, DominiC YeO
