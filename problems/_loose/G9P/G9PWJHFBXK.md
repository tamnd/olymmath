---
tag: G9PWJHFBXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the modified Euclidean algorithm computes the greatest common divisor of integers $a$ and $b$ in time $\mathcal{O}\left(\log (a)^{2}+\log (b)^{2}\right)$.

```
Algorithm 5: Modified Euclidean Algorithm
Argument(s): $(a, b)$
$\triangleright$ We want to compute $a \wedge b$
if $b=0$ then return $a$
$\hat{a} \leftarrow a, \hat{b} \leftarrow b$ and $d \leftarrow 1$
while $\hat{a} \equiv \hat{b} \equiv 0(\bmod 2): d \leftarrow 2 d, \hat{a} \leftarrow \hat{a} / 2$ and $\hat{b} \leftarrow \hat{b} / 2 $ Loop $\mathrm{n}^{\circ} 1$
while $\hat{a} \neq 0$ :
Loop $n^{\circ} 2$
while $\hat{a} \equiv 0(\bmod 2): \hat{a} \leftarrow \hat{a} / 2$
while $\hat{b} \equiv 0(\bmod 2): \hat{b} \leftarrow \hat{b} / 2$
$\boldsymbol{\operatorname { if }} \hat{a} \geqslant \hat{b}$ then $\hat{a} \leftarrow(\hat{a}-\hat{b}) / 2 \boldsymbol{\operatorname { else }} \hat{b} \leftarrow(\hat{b}-\hat{a}) / 2$
return $\hat{b} d$
```

Let $f$ be the function $x \mapsto x^{2}+1$ defined in $\mathbb{Z} / n \mathbb{Z}$, $u_{1}$ the initial value of the variable $u$, and $u_{k}$ the integer $f^{k-1}\left(u_{1}\right)(\bmod n)$, where $f^{k}$ denotes the $k^{\text {th }}$ iterate of $f$.
