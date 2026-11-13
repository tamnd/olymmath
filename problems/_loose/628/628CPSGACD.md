---
tag: 628CPSGACD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246908
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=(a_{ij})\in \mathcal{M}_p(\mathbb{C})$ such that $a_{12}=a_{23}=\ldots=a_{p-1,p}=1$ and $a_{ij}=0$ for any other entry.

a)Prove that $A^{p-1}\neq O_p$ and $A^p=O_p$.

b)If $X\in \mathcal{M}_{p}(\mathbb{C})$ and $AX=XA$, prove that there exist $a_1,a_2,\ldots,a_p\in \mathbb{C}$ such that:

$$X=\left( \begin{array}{ccccc} a_1 & a_2 & a_3 & \ldots & a_p \\ 0 & a_1 & a_2 & \ldots & a_{p-1} \\ 0 & 0 & a_1 & \ldots & a_{p-2} \\ \ldots & \ldots & \ldots & \ldots & \ldots \\ 0 & 0 & 0 & \ldots & a_1 \end{array} \right)$$

c)If there exist $B,C\in \mathcal{M}_p(\mathbb{C})$ such that $(I_p+A)^n=B^n+C^n,\ (\forall)n\in \mathbb{N}^*$, prove that $B=O_p$ or $C=O_p$.
