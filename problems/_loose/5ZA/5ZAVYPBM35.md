---
tag: 5ZAVYPBM35
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=27712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the lines $A B, B C, C A$, points $C_{1}$ and $C_{2}, A_{1}$ and $A_{2}, B_{1}$ and $B_{2}$ are given. Points $C_{1}$ and $C_{2}$ determine numbers $\gamma_{1}$ and $\gamma_{2}$, for which $\left(1+\gamma_{1}\right) \overrightarrow{A C_{1}}=\overrightarrow{A B}$ and $\left(1+\gamma_{2}\right) \overrightarrow{C_{2} B}=\overrightarrow{A B}$; numbers $\alpha_{1}, \alpha_{2}, \beta_{1}, \beta_{2}$ are defined similarly. Prove that the lines $A_{2} B_{1}, B_{2} C_{1}$ and $C_{2} A_{1}$ intersect at one point if and only if

$$
\alpha_{1} \beta_{1} \gamma_{1}+\alpha_{2} \beta_{2} \gamma_{2}+\alpha_{1} \alpha_{2}+\beta_{1} \beta_{2}+\gamma_{1} \gamma_{2}=1
$$

Remark. When $\alpha_{2}=\beta_{2}=\gamma_{2}=0$, points $A_{2}, B_{2}, C_{2}$ coincide with $B$, $C, A$; in this case, we obtain Ceva's theorem. When $\alpha_{1} \alpha_{2}=\beta_{1} \beta_{2}=\gamma_{1} \gamma_{2}=1$, points $A_{1}$ and $A_{2}, B_{1}$ and $B_{2}, C_{1}$ and $C_{2}$ coincide. (Indeed, the coincidence of points $A_{1}$ and $A_{2}$ is equivalent to $\frac{1}{\alpha_{1}}+\frac{1}{\alpha_{2}}=1$; this equality is equivalent to $\alpha_{1} \alpha_{2}=1$.) The lines $A_{1} B_{1}, B_{1} C_{1}$ and $C_{1} A_{1}$ intersect at one point if and only if they coincide. In this case, we obtain Menelaus' theorem.
