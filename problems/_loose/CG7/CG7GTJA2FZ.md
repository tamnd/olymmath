---
tag: CG7GTJA2FZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a sequence $\left\{ {{x_n}} \right\}$ defined by:
$$\left\{ \begin{array}{l}
{x_0} = - 2 \\
{x_n} = \frac{{1 - \sqrt {1 - 4{x_{n - 1}}} }}{2},\forall n \ge 1 \\
\end{array} \right.$$
Denote $u_n=n.x_n$ and ${v_n} = \prod\limits_{i = 0}^n {\left( {1 + x_i^2} \right)} $. Prove that $\left\{ {{u_n}} \right\}$, $\left\{ {{v_n}} \right\}$ have finite limit.
