---
tag: ZNFYC9GVS0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the following Heisenberg-Weyl relation

$$
\mathrm{pq}-\mathrm{qp}=1
$$

where $\mathbf{p}, \mathbf{q}$ are elements of some linear space $S$ with an associative multiplication and a unit element 1.

Remark. This relation was studied by C. Graves in [68] long before H. Weyl and W. Heisenberg, who considered it in connection with the needs of quantum mechanics.

(a) We will call the representation of a polynomial in $\mathbf{p}$ and $\mathbf{q}$ canonical if it decomposes into terms of the form $\mathbf{q}^{m} \mathbf{p}^{n}, m, n=0,1, \ldots$, and $\mathbf{p}^{0}=\mathbf{q}^{0}=\mathbf{1}$. For example, $\mathbf{p}^{2}+\mathbf{p q}+\mathbf{q p}+\mathbf{q}^{2}$ is a non-canonical representation of the polynomial $(\mathbf{p}+\mathbf{q})^{2}$, while $\mathbf{p}^{2}+2 \mathbf{q} \mathbf{p}+\mathbf{q}^{2}+\mathbf{1}$ is canonical.

Establish that for any polynomial $P=P(x)$ with integer coefficients, the equality holds

$$
\mathbf{p} P(\mathbf{q})=P(\mathbf{q}) \mathbf{p}+P^{\prime}(\mathbf{q})=\mathrm{E}(p+\xi) P(q+\xi),
$$

where $\xi \sim \mathscr{N}(0,1)$, and $\mathbf{E}$ is taken as if $p, q$ were ordinary real variables, then the resulting expression is written in canonical form and $\mathbf{p}$ and $\mathbf{q}$ are substituted for $p$ and $q$ respectively.

(b) Under the conditions of part (a), show that

$$
P(\mathbf{p}+\mathbf{q})=\mathrm{E} P(p+q+\xi)
$$

(c) Let $\mathbf{0} \neq \mathbf{1}$, where $\mathbf{0}$ is the zero element of the space $S$. Show that the property $\mathbf{p} P(\mathbf{q})=P(\mathbf{q}) \mathbf{p}+P^{\prime}(\mathbf{q})$ (see part (a)) ensures that it is impossible to define a norm $\|\cdot\|: S \rightarrow \mathbb{R}$ on $S$ such that $\|x y\| \leqslant\|x\| \cdot\|y\|$, $x, y \in S$.

Remark. In quantum mechanics, $\mathbf{p}$ and $\mathbf{q}$ have a specific physical meaning: $\mathbf{p}$ is the "annihilation" operator, and $\mathbf{q}$ is the "creation" operator. Due to part (c), the operators $\mathbf{p}$ and $\mathbf{q}$ cannot be bounded linear operators in any Banach space. This fact, in particular, stimulated the development of the theory of unbounded linear operators.
