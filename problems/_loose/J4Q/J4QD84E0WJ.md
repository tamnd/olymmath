---
tag: J4QD84E0WJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231770
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let it $k \geq 1$ be an integer. Define the sequence $(a_n)_{n \geq 1}$ by $a_0=0,a_1=1$ and

$$ a_{n+2} = ka_{n+1}+a_n $$

for $n \geq 0$.
Let it $p$ an odd prime number.
Denote $m(p)$ as the smallest positive integer $m$ such that $p | a_m$.
Denote $T(p)$ as the smallest positive integer $T$ such that for every natural $j$ we gave $p | (a_{T+j}-a_j)$.

[list='i']

- Show that $T(p) \leq (p-1) \cdot m(p)$.

- Show that if $T(p) = (p-1) \cdot m(p)$ then

$$ \prod_{1 \leq j \leq T(p)-1}^{j \not \equiv 0 \pmod{m(p)}}{a_j} \equiv (-1)^{m(p)-1} \pmod{p} $$
