---
tag: A0EVEAKMGK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187887
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be subsets of $\mathbb{R}^{2}=\mathbb{R} \times \mathbb{R}$ defined by:

$$
\begin{aligned}
& A=\left\{(x, y) \mid \text { for every } a \in \mathbb{R}, y \neq \frac{x-a}{a x-1}\right\} \\
& B=\{(x, y) \mid \text { there exists } a \in \mathbb{R}, a(1+x y)=x+y\}
\end{aligned}
$$

Find $A \cap B$, and then represent it graphically.
