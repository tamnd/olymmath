---
tag: JZ258GRQTP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi, \eta$ be independent random variables. Prove Cramér's theorem.

The variable $\xi+\eta$ has a Gaussian distribution if and only if $\xi$ and $\eta$ are Gaussian variables.

To derive this statement, use a variant of Hadamard's theorem.

If $f(z)=\sum_{n \geqslant 0} a_{n} z^{n}$ for all $z \in \mathbb{C}$, and $f$ does not vanish and

$$
|f(z)| \leqslant C e^{c|z|^{\rho}}, z \in \mathbb{C}
$$

for some constants $\rho, c, C>0$, then $f(z)=e^{P(z)}$, where $P(z)$ is a polynomial of degree not exceeding $\rho$.
