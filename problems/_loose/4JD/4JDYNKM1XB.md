---
tag: 4JDYNKM1XB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Check that for Brownian motion $B=\left(B_{t}\right)_{t \geqslant 0}$ the following processes are also Brownian motions:

$$
\begin{gathered}
\left(-B_{t}\right)_{t \geqslant 0}, \left(B_{t+a}-B_{a}\right)_{t \geqslant 0}, \left(B_{a}-B_{a-t}\right)_{0 \leqslant t \leqslant a}, \\
\left(a^{-1} B_{a^{2} t}\right)_{t \geqslant 0} (\text { self-similarity property }) \\
W_{t}(\omega)=\left\{\begin{array}{ll}
t B_{1 / t}(\omega), & t>0, \\
0, & t=0,
\end{array} \omega \in \Omega,\right.
\end{gathered}
$$

where $a>0$. If the trajectories of the process $B$ are continuous with probability one, i.e., $\mathrm{P}(B \in C[0, \infty))=1$, then the same is true for the processes listed above.
