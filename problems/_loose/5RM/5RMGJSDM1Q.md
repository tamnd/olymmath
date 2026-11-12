---
tag: 5RMGJSDM1Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of events $\left(A_{n}\right)_{n \geqslant 1}$ is called exchangeable (or interchangeable) if the probabilities $p_{n}=\mathrm{P}\left(A_{i_{1}} \ldots A_{i_{n}}\right)$ are the same for any choice of indices $i_{1}<\ldots<i_{n}$ and all $n$. Prove that for such $A_{n}$ the following formulas hold:

$$
\begin{aligned}
& \mathrm{P}\left(\bigcup_{i=1}^{n} A_{i}\right)=n p_{1}-C_{n}^{2} p_{2}+C_{n}^{3} p_{3}-\ldots+(-1)^{n-1} p_{n} \\
& \mathrm{P}\left(\lim _{n} A_{n}\right)=\mathrm{P}\left(\bigcap_{n=1}^{\infty} A_{n}\right)=\lim _{n} p_{n} \\
& \mathrm{P}\left(\overline{\lim }_{n} A_{n}\right)=\mathrm{P}\left(\bigcup_{n=1}^{\infty} A_{n}\right)=1-\lim _{n}(-1)^{n} \Delta^{n}\left(p_{0}\right)
\end{aligned}
$$

where $p_{0}=1, \Delta^{1}\left(p_{k}\right)=p_{k+1}-p_{k}, \Delta^{n+1}\left(p_{k}\right)=\Delta^{1}\left(\Delta^{n}\left(p_{k}\right)\right), n \in \mathbb{N}$.
