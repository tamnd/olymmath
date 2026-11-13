---
tag: G1FC6QKK6B
kind: problem
type: answer
answer: (,n)=(0,15),(8,10),(16,5),(24,0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose we want to find all non-negative integers $x$ and $y$ that satisfy the equation

$$
7 x+11 y=154
$$

If we only use the fact that $7 x \leq 154$ implies $x \leq 22$ and test the possibilities, we will perform 23 case tests! On the other hand, we can rewrite the equation as

$$
11 y=154-7 x=7(22-x)
$$

Notice that 11 divides $7(22-x)$, but has no common factors with 7. Consequently, 11 is a divisor of $22-x$. Since $22-x \leq 22$, it suffices to test $x=0, x=11$ or $x=22$ to find the three solutions $(x, y)=(0,14),(11,7)$ or $(22,0)$ with only three case tests.

(a) Find all pairs $(m, n)$ of non-negative integers that satisfy the equation

$$
5 m+8 n=120
$$

(b) Let $a, b$ and $c$ be positive integers with $c>1$ such that

$$
\frac{1}{a}+\frac{1}{b}=\frac{1}{c}
$$

Prove that at least one of the numbers $a+c$ or $b+c$ is a composite number, i.e., has some divisor greater than 1 and less than itself.
