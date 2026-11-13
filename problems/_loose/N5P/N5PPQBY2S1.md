---
tag: N5PPQBY2S1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134997
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n}, b_{1}, b_{2}, \cdots, b_{n} \in \mathbf{R}$.
$$
\text { Let } c_{i}=\left|a b_{i}+a_{i} b-a_{i} b_{i}\right|(i=1,2, \cdots, n) \text {, }
$$

where, $a=\frac{1}{n} \sum_{i=1}^{n} a_{i}, b=\frac{1}{n} \sum_{i=1}^{n} b_{i}$.
Prove: $\left(\sum_{i=1}^{n} c_{i}\right)^{2} \leqslant\left(\sum_{i=1}^{n} a_{i}^{2}\right)\left(\sum_{i=1}^{n} b_{i}^{2}\right)$.
In 2012, I provided a test question for the Chinese National Training Team, and Example 4 is the real number version of that test question.
The test question is:
Let $x_{1}, x_{2}, \cdots, x_{n}, y_{1}, y_{2}, \cdots, y_{n}$ all be complex numbers with modulus equal to 1. Let
$$
z_{i}=x y_{i}+y x_{i}-x_{i} y_{i}(i=1,2, \cdots, n),
$$

where, $x=\frac{1}{n} \sum_{i=1}^{n} x_{i}, y=\frac{1}{n} \sum_{i=1}^{n} y_{i}$.
Prove: $\sum_{i=1}^{n}\left|z_{i}\right| \leqslant n$.
Example 4 is not difficult, it is at the level of a national league, but some students made mistakes by incorrectly using homogeneity. Since the inequality is homogeneous with respect to $a_{1}, a_{2}, \cdots, a_{n}$ and $b_{1}, b_{2}, \cdots, b_{n}$, one might assume $\sum_{i=1}^{n} a_{i}=1$ and $\sum_{i=1}^{n} b_{i}=1$, and prove the problem under these conditions. In fact, the key case in this problem is $\sum_{i=1}^{n} a_{i}=\sum_{i=1}^{n} b_{i}=0$.
For Example 4, the following proof is elegant.
