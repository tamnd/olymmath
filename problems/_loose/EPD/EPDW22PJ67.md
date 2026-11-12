---
tag: EPDW22PJ67
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the "distances" $d(A, B)$ and $\rho(A, B)$, defined by the formulas

$$
\begin{aligned}
& d(A, B)=\mathrm{P}(A \triangle B), \\
& \rho(A, B)= \begin{cases}\frac{\mathrm{P}(A \triangle B)}{\mathrm{P}(A \cup B)}, & \text { if } \mathrm{P}(A \cup B) \neq 0 \\
0, & \text { if } \mathrm{P}(A \cup B)=0\end{cases}
\end{aligned}
$$

where $A \Delta B$ is the symmetric difference of sets $A$ and $B$, satisfy the triangle inequality, but generally speaking, their equality to zero does not imply that $A=B$.

Remark. Symmetric "distances" that satisfy the triangle inequality and allow zero values between different points in the space are called pseudometrics. If all points in the space with zero pairwise "distances" are identified, pseudometrics become metrics.
