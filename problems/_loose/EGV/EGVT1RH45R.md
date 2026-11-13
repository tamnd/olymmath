---
tag: EGVT1RH45R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Cauchy-Schwarz) Let $x_{1}, \ldots, x_{n}, y_{1}, \ldots, y_{n}$ be real numbers. Show that

$$
\left|x_{1} y_{1}+\cdots+x_{n} y_{n}\right| \leqslant \sqrt{x_{1}^{2}+\cdots+x_{n}^{2}} \sqrt{y_{1}^{2}+\ldots y_{n}^{2}}
$$

with equality if and only if $\left(x_{1}, \ldots, x_{n}\right)$ is proportional to $\left(y_{1}, \ldots, y_{n}\right)$.

The Cauchy-Schwarz inequality, which must be known, admits several proofs, one of which is very simple and involves squaring, simplifying, and using the AM-GM inequality. Another interesting proof is the geometric interpretation, which is also a good mnemonic: the absolute value of the dot product of two vectors is less than or equal to the product of their norms. The reader can find a more general definition of the dot product, and thus a more general inequality, in Vincent Jugé's course on inequalities from the Montpellier 2014 workshop. We will see here another proof that presents an interesting proof technique.
