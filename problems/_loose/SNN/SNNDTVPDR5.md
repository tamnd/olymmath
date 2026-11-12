---
tag: SNNDTVPDR5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random variable with a geometric distribution:

$$
\mathrm{P}(X=n)=p q^{n-1}, n \in \mathbb{N}, 0 \leqslant p \leqslant 1, q=1-p
$$

Show that for $m, n \in \mathbb{N}$ the following equality holds:

$$
\mathrm{P}(X>n+m \mid X>n)=\mathrm{P}(X>m) .
$$

Also prove the converse statement: if a discrete random variable taking values in $\mathbb{N}$ satisfies property ( $* *$ ), then it has a geometric distribution ( $(*)$ ).
