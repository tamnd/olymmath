---
tag: SR12D5RVXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h360823
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Iran MO (3rd Round)
---
For each polynomial $p(x)=a_nx^n+a_{n-1}x^{n-1}+...+a_1x+a_0$ we define it's derivative as this and we show it by $p'(x)$ :

$$p'(x)=na_nx^{n-1}+(n-1)a_{n-1}x^{n-2}+...+2a_2x+a_1$$

a) For each two polynomials $p(x)$ and $q(x)$ prove that:(3 points)
$$(p(x)q(x))'=p'(x)q(x)+p(x)q'(x)$$

b) Suppose that $p(x)$ is a polynomial with degree $n$ and $x_1,x_2,...,x_n$ are it's zeros. prove that:(3 points)
$$\frac{p'(x)}{p(x)}=\sum_{i=1}^{n}\frac{1}{x-x_i}$$

c) $p(x)$ is a monic polynomial with degree $n$ and $z_1,z_2,...,z_n$ are it's zeros such that:
$$|z_1|=1, \forall i\in\{2,..,n\}:|z_i|\le1$$

Prove that $p'(x)$ has at least one zero in the disc with length one with the center $z_1$ in complex plane. (disc with length one with the center $z_1$ in complex plane: $D=\{z \in \mathbb C: |z-z_1|\le1\}$ )(20 points)
