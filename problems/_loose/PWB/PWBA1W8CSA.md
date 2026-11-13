---
tag: PWBA1W8CSA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be a set for which the following holds:

(1) For each ordered pair $(a, b)$ of elements from $M$, there is exactly one element from $M$ denoted by $a \circ b$.

(2) For each $b \in M$ and each $c \in M$, there is exactly one $x \in M$ such that $x \circ b = c$; this element $x$ is denoted by $x = \frac{c}{b}$.

Under these assumptions, prove the following statement:

If for all $a \in M, b \in M, c \in M, d \in M$ the relation $(a \circ b) \circ (c \circ d) = (a \circ c) \circ (b \circ d)$ holds, then for all $p \in M, q \in M, r \in M, s \in M$ the relation

$$
\frac{p}{q} : \frac{r}{s} = \frac{p}{r} : \frac{q}{s}
$$

holds.
