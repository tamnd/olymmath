---
tag: Y7XK98GW0Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h571187
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11556
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213513
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Define the function $\xi : \mathbb Z^2 \to \mathbb Z$ by $\xi(n,k) = 1$ when $n \le k$ and $\xi(n,k) = -1$ when $n > k$ , and construct the polynomial $$ P(x_1, \dots, x_{1000}) = \prod_{n=1}^{1000} \left( \sum_{k=1}^{1000} \xi(n,k)x_k \right). $$
(a) Determine the coefficient of $x_1x_2 \dots x_{1000}$ in $P$ .
(b) Show that if $x_1, x_2, \dots, x_{1000} \in \left\{ -1,1 \right\}$ then $P(x_1,x_2,\dots,x_{1000}) = 0$ .

*Proposed by Evan Chen*
