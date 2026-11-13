---
tag: TWDMN1Q2KX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240838
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ H(n)$ be the number of simply connected subsets with $ n$ hexagons in an infinite hexagonal network. Also let $ P(n)$ be the number of paths starting from a fixed vertex (that do not connect itself) with lentgh $ n$ in this hexagonal network.
a) Prove that the limits $$ \alpha: =\lim_{n\rightarrow\infty}H(n)^{\frac1n}, \beta: =\lim_{n\rightarrow\infty}P(n)^{\frac1n}$$exist.

b) Prove the following inequalities:
$ \sqrt2\leq\beta\leq2$
$ \alpha\leq 12.5$
$ \alpha\geq3.5$
$ \alpha\leq\beta^4$
