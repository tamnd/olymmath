---
tag: DYYXB5BWTC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266571
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider the set of expressions that can be written with real numbers, $\pm$, $+$, $\times$, and parenthesis, such that if each $\pm$ is independently replaced with either $+$ or $-$, we are left with a valid arithmetic expression. For example, this includes:
$$0\pm 1, 1 \pm 2, 1+2\times (1+2\pm 3), (1 \pm 2) \times (3 \pm 4).$$
We define the *range* of an expression of this form to be the set of all of the possible values when replacing each $\pm$ with either a $+$ or a $-$. For example,

- $1 \pm 2$ has range $\{-1,3\}$, since $1-2=-1$ and $1+2=3$.

- $(1 \pm 1) \times (1 \pm 1)$ has range $\{0,4\}$, since $(1-1)(1-1)=(1-1)(1+1)=(1+1)(1-1)=0$ and $(1+1)(1+1)=4.$

- $(1 \pm 2)(3\pm 4)$ has range $\{-7,-3,1,21\}$, since $(1-2)(3+4)=-7$, $(1+2)(3-4)=-3$, $(1-2)(3-4)=1$, and $(1+2)(3+4)=21$.

We will prove that every finite nonempty set of real numbers is the range of some expression of this form. Call a nonempty set of real numbers *good* if it is the range of some expression of this form.

(a) For each of the following sets, find an expression with a range equal to the given set. You do not need to justify the expression.
[list=i]

- $\{1\}$

- $\{1,3\}$

- $\{-1,0,1\}$

(b) Prove that if $S$ and $T$ are good sets, the product set $S \cdot T = \{ xy \mid x \in S, y \in T \}$ (the set of product of elements of $S$ with elements of $T$) is good.

(c) Prove that if a set $S$ not containing $0$ is good, the set $S \cup \{ 0 \}$ (obtained upon adding $0$ to $S$) is good.

(d) Prove that every finite nonempty set of real numbers is good.
