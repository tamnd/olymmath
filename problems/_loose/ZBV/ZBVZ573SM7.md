---
tag: ZBVZ573SM7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [42].) The Lebesgue Differentiation Theorem for monotone functions states that

any non-decreasing function $f=f(x)$ on the interval $[a, b]$ has a finite derivative $f' = f'(x)$ almost everywhere (with respect to Lebesgue measure) on the interval $[a, b]$. Prove this theorem according to the following scheme.

(a) Verify that if $g=g(x)$ is a function of bounded variation on $[a, b]$, then for any $r>0$ the Lebesgue measure of the set

$D_{r}=\{x: \text{the function } g \text{ is continuous at point } x, \bar{D} g(x)>r, \underline{D} g(x)<-r\}$ is zero (i.e., it can be covered by a countable system of intervals with arbitrarily small total length), where

$$
\bar{D} g(x)=\varlimsup_{y \rightarrow x} \frac{g(x)-g(y)}{x-y}, \underline{D} g(x)=\varliminf_{y \rightarrow x} \frac{g(x)-g(y)}{x-y}
$$

Recall that the variation of the function $g$ over the interval $[a, b]$ is the number

$$
V(g)=\sup \sum_{i=0}^{n-1}\left|g\left(x_{i+1}\right)-g\left(x_{i}\right)\right|
$$

where the supremum is taken over all $\left(x_{i}\right)_{i=1}^{n}, a=x_{0}<x_{1}<\ldots<x_{n}=b, n \geqslant 1$.

(b) Deduce from part (a) that $\bar{D} f(x)=\underline{D} f(x)$ almost everywhere on $[a, b]$ and, therefore, $f'(x) \in [0, \infty]$ exists almost everywhere on $[a, b]$.

(c) Finally, prove that $f'(x) < \infty$ almost everywhere on $[a, b]$.
