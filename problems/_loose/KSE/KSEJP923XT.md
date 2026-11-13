---
tag: KSEJP923XT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number and $k \leqslant n$ two natural numbers. We consider the base $p$ decompositions of $n$ and $k$:

$$
\begin{array}{r}
\mathrm{n}=\mathrm{n}_{\mathrm{d}} p^{\mathrm{d}}+\cdots+\mathrm{n}_{1} p+\mathrm{n}_{0} \\
\mathrm{k}=\mathrm{k}_{\mathrm{d}} p^{\mathrm{d}}+\cdots+\mathrm{k}_{1} p+\mathrm{k}_{0}
\end{array}
$$

$k_{d}$ can be 0. Show that $\binom{n}{k} \equiv\binom{n_{d}}{k_{d}} \cdots\binom{n_{0}}{k_{0}}$ mod $p$.
