---
tag: C9EZ1KXZNA
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181310
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many positive integers $n$ are there for which $\left(2022+\frac{1}{2}\right)^{n}+\left(25+\frac{1}{2}\right)^{n}$ is an integer?

A three-digit number, with distinct and non-zero digits (say $a b c$), is called petaloid if there exists an integer $n \geq 1$ such that the number $c b a \underbrace{00 \cdots 0}_{n \text { zeros }}$ is a multiple of $a b c$. The smallest $n$ that makes this divisibility true is called the flower of $a b c$.

Example. The number 132 is petaloid, as 132 divides 23100. Since 23100/132 = 175 is an integer but $2310 / 132=17.5$ is not, the flower of 132 is 2.

(a) Let $a b c$ be a three-digit number (with distinct and non-zero digits) of the form $2^{x} \cdot 3^{y} \cdot 5^{z}$ with $x, y, z$ non-negative integers and $y \leq 2$. Prove that $a b c$ is petaloid.

(b) What is the maximum value of the flower of a petaloid number (of three digits)?

(c) Let $a b c$ be a petaloid number. Prove that $a b c$ is not divisible by 13.
