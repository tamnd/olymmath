---
tag: TRG26XRNF3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
1 First prove a lemma
Lemma Let $a_{1}, a_{2}, \cdots, a_{k} ; B_{1}, B_{2}, \cdots, B_{k}$; $A_{0}, A_{1}, \cdots, A_{r}$ be fixed constants, $B_{1} \neq 0, B_{k} \neq 0$, $A_{0} \neq 0$. The sequence $\left\{a_{n}\right\}$ satisfies: for any $n \in \mathbf{Z}_{+}$,
$$
\begin{array}{l}
a_{n+k}-B_{1} a_{n+k-1}-B_{2} a_{n+k-2}-\cdots-B_{k} a_{n} \\
=A_{0} n^{r}+A_{1} n^{r-1}+\cdots+A_{r} .
\end{array}
$$

If $B_{1}+B_{2}+\cdots+B_{k} \neq 1$, then there exists a unique sequence $\left\{b_{n}\right\}$ satisfying
$$
b_{n}=E_{0} n^{r}+E_{1} n^{r-1}+\cdots+E_{r},
$$

such that
$$
\begin{array}{l}
\left(a_{n+k}-b_{n+k}\right)-B_{1}\left(a_{n+k-1}-b_{n+k-1}\right)-\cdots- \\
B_{k-1}\left(a_{n+1}-b_{n+1}\right)-B_{k}\left(a_{n}-b_{n}\right)=0,
\end{array}
$$

where $E_{0}, E_{1}, \cdots, E_{r}$ are all fixed constants, $E_{0} \neq 0$.
