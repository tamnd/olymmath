---
tag: PZSBQB1K7S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{n}$ be real numbers. In an undisturbed technical process, let

$$
x_{1}=a_{1}+a_{2}+\ldots+a_{n}
$$

be the measurement of a quantity dependent on $a_{1}, a_{2}, \ldots, a_{n}$. In a disturbed technical process, the measurement of this quantity is instead

$$
x_{2}=\frac{a_{1}}{1+\epsilon_{1}}+\frac{a_{2}}{1+\epsilon_{2}}+\ldots+\frac{a_{n}}{1+\epsilon_{n}}
$$

Here, $\epsilon_{1}, \epsilon_{2}, \ldots, \epsilon_{n}$ are real numbers for which there exists a natural number $m \geq 1$ such that for all $\mu=1,2, \ldots, n$, the inequality $|\epsilon_{\mu}| \leq 10^{-m}$ (3) holds.

Prove that from these assumptions (1), (2), (3), the inequality

$$
\left|x_{2}-x_{1}\right| \leq \frac{1}{10^{m}-1}\left(\left|a_{1}\right|+\left|a_{2}\right|+\ldots+\left|a_{n}\right|\right)
$$

always follows!
