---
tag: NEN95ZNJQY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the $3 \times 9$ table of non-negative numbers $P=\left(\begin{array}{lllllllll}x_{11} & x_{12} & x_{13} & x_{14} & x_{15} & x_{16} & x_{17} & x_{18} & x_{19} \\ x_{21} & x_{22} & x_{23} & x_{24} & x_{25} & x_{26} & x_{27} & x_{28} & x_{29} \\ x_{31} & x_{32} & x_{33} & x_{34} & x_{35} & x_{36} & x_{37} & x_{38} & x_{39}\end{array}\right)$, the numbers in each row are distinct, the sum of the three numbers in each of the first 6 columns is $1, x_{17}=x_{28}=x_{39}=0$, and $x_{27}, x_{37}, x_{18}, x_{38}, x_{19}, x_{29}$ are all greater than 1. If the first three columns of $P$ form the table $S=\left(\begin{array}{lll}x_{11} & x_{12} & x_{13} \\ x_{21} & x_{22} & x_{23} \\ x_{31} & x_{32} & x_{33}\end{array}\right)$ which satisfies the following property $(o)$: for any column $\left(\begin{array}{l}x_{1 k} \\ x_{2 k} \\ x_{3 k}\end{array}\right)$ $(k=1,2, \cdots, 9)$ in the table $P$, there exists some $i \in\{1,2,3\}$ such that $x_{i k} \leqslant u_{i}=\min \left\{x_{i 1}, x_{i 2}, x_{i 3}\right\}$. Prove: (1) the minimum values $u_{i}=\min \left\{x_{i 1}, x_{i 2}, x_{i 3}\right\}, i=1,2,3$ must come from different columns of the table $S$;
(2) there exists a unique column $\left(\begin{array}{l}x_{1 k^{*}} \\ x_{2 k^{*}} \\ x_{3 k^{*}}\end{array}\right), k^{*} \neq 1,2,3$ in the table $P$ such that the $3 \times 3$ table $S^{\prime}=\left(\begin{array}{lll}x_{11} & x_{12} & x_{1 k^{*}} \\ x_{21} & x_{22} & x_{2 k^{*}} \\ x_{31} & x_{32} & x_{3 k^{*}}\end{array}\right)$ still has property $(o)$, i.e., for any column $\left(\begin{array}{l}x_{1 k} \\ x_{2 k} \\ x_{3 k}\end{array}\right)$ $(k=1,2, \cdots, 9)$ in the table $P$, there exists some $i \in\{1,2,3\}$ such that $x_{i k} \leqslant u_{i}=\min \left\{x_{i 1}, x_{i 2}, x_{i k^{*}}\right\}$.
