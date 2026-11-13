---
tag: 3S97RFHEYT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h553576
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9679
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2013
    source: hf-ai-mo-aops
    label: 2013 Iran MO (3rd Round)
---
$p=3k+1$ is a prime number. For each $m \in \mathbb Z_p$ , define function $L$ as follow: $L(m) = \sum_{x \in \mathbb{Z}_p}^{ } \left ( \frac{x(x^3 + m)}{p} \right )$ *a)* For every $m \in \mathbb Z_p$ and $t \in {\mathbb Z_p}^{*}$ prove that $L(m) = L(mt^3)$ . (5 points)

*b)* Prove that there is a partition of ${\mathbb Z_p}^{*} = A \cup B \cup C$ such that $|A| = |B| = |C| = \frac{p-1}{3}$ and $L$ on each set is constant.
Equivalently there are $a,b,c$ for which $L(x) = \left\{\begin{matrix}
a & & &x \in A
b& & &x \in B
c& & & x \in C
\end{matrix}\right.$ . (7 points)

*c)* Prove that $a+b+c = -3$ . (4 points)

*d)* Prove that $a^2 + b^2 + c^2 = 6p+3$ . (12 points)

*e)* Let $X= \frac{2a+b+3}{3},Y= \frac{b-a}{3}$ , show that $X,Y \in \mathbb Z$ and also show that : $p= X^2 + XY +Y^2$ . (2 points)

( ${\mathbb Z_p}^{*} = \mathbb Z_p \setminus \{0\}$ )
