---
tag: KJ894GZKRK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an integer $n \ge 2$, let $G_n$ be an $n \times n$ grid of unit cells. A subset of cells $H \subseteq G_n$ is considered \textit{quasi-complete} if and only if each row of $G_n$ has at least one cell in $H$ and each column of $G_n$ has at least one cell in $H$. A subset of cells $K \subseteq G_n$ is considered \textit{quasi-perfect} if and only if there is a proper subset $L \subset K$ such that $|L| = n$ and no two elements in $L$ are in the same row or column.

Let $\vartheta(n)$ be the smallest positive integer such that every quasi-complete subset $H \subseteq G_n$ with $|H| \ge \vartheta(n)$ is also quasi-perfect. Moreover, let $\varrho(n)$ be the number of quasi-complete subsets $H \subseteq G_n$ with $|H| = \vartheta(n) - 1$ such that $H$ is not quasi-perfect. Compute $\vartheta(20) + \varrho(20)$.
