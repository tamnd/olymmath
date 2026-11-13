---
tag: NYEZXM4NBT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\left(\begin{array}{lll}0 & 1 & 2 \\ 0 & 0 & 1 \\ 0 & 0 & 0\end{array}\right)$ and $C(A)=\left\{X \in M_{3}(\mathbb{R}): A \cdot X=X \cdot A\right\}$

(i) Show that $X \in C(A)$ if and only if there exist $a, b, c \in \mathbb{R}$ such that $X=\left(\begin{array}{lll}a & b & c \\ 0 & a & b \\ 0 & 0 & a\end{array}\right)$.

(ii) Prove that for any $n \in \mathbb{N}, n \geq 2$, the equation $X^{n}=A$ has no solution.
