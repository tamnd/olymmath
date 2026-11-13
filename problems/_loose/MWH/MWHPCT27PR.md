---
tag: MWHPCT27PR
kind: problem
type: answer
answer: \prod_{i=0}^{}\mathrm{C}_{n_{i}+2}^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95706
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime, $n \in Z_{+}$, and
$$
n=n_{0}+n_{1} p+\cdots+n_{t} p^{t} \text {, }
$$

where, $n_{i} \in \mathbf{N}, 0 \leqslant n_{i} \leqslant p-1, i=0,1, \cdots, t$.
Let $S_{n}$ denote the set of ordered triples $(a, b, c)$ that satisfy the following conditions:
(1) $a, b, c \in \mathbf{N}$;
(2) $a+b+c=n$;
(3) $p \nmid \frac{n!}{a!\cdot b!\cdot c!}$.
Question: How many ordered triples
$$
(a, b, c)
$$
are there in the set $S_{n}$?
