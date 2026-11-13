---
tag: JT24K86BXR
kind: problem
type: answer
answer: ^{1989}-^{117}-^{153}-^{663}+^{51}+^{39}+^{9}-^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6-105 Let $S$ be the unit circle in the complex plane (i.e., the set of complex numbers with modulus 1), and $f$ be a mapping from $S$ to $S$. For any $z \in S$, define
$$
\begin{array}{l}
f^{(1)}(z)=f(z), f^{(2)}(z)=f(f(z)), \cdots, \\
f^{(k)}(z)=\underbrace{f(f(\cdots(f}_{k \uparrow f}(z) \cdots))),
\end{array}
$$

If $c \in S$, such that
$$
\begin{array}{l}
f^{(1)}(C) \neq C, f^{(2)}(C) \neq C, \cdots, \\
f^{(n-1)}(C) \neq C, f^{(n)}(C)=C .
\end{array}
$$

we say that $C$ is an $n$-periodic point of $f$.
Let $m$ be a natural number greater than 1, and $f$ is defined as follows:
$$
f(z)=z^{m}(z \in S) .
$$

Try to calculate the total number of 1989-periodic points of $f$.
