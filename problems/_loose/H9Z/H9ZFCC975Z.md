---
tag: H9ZFCC975Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In this problem, we wish to find all integers $m$ and $n$ that satisfy the condition $m n \geq 0$ and the equation:

$$
m^{3}+n^{3}+99 m n=33^{3}
$$

Let $s=m+n$ and $p=m n$. It is possible to express $m^{3}+n^{3}$ in terms of $s$ and $p$, using the factorization

$$
\begin{aligned}
m^{3}+n^{3} & =(m+n)\left(m^{2}-m n+n^{2}\right) \\
& =s\left(m^{2}+2 m n+n^{2}-3 m n\right) \\
& =s\left(s^{2}-3 p\right) \\
& =s^{3}-3 s p
\end{aligned}
$$

(a) Substitute the result of the expression given in terms of $s$ and $p$ into the equation we want to solve. Then, write it as a product of factors equal to zero.

(b) The product of factors is zero only when one of them is zero. Show that one of the factors being zero implies 34 solutions with $m$ and $n$ non-negative integers.

(c) For the other factor, show that it being zero is equivalent to

$$
(m-n)^{2}+(m+33)^{2}+(n+33)^{2}=0
$$

In this case, the only solution will be $m=n=-33$.
