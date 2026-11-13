---
tag: SGD019WPJ4
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ketten play the following game according to the system below:

$$
\begin{aligned}
& a_{1} x_{1}+\ldots+a_{n} x_{n}=c \\
& b_{1} x_{1}+\ldots+b_{n} x_{n}=d
\end{aligned}
$$

They take turns writing arbitrary real numbers in place of the $a_{i}, b_{i}, x_{i}(i=1,2, \ldots, n)$ and $c, d$ letters. However, they can only write 0 in place of a letter if there is a row in which this letter appears, and all other letters in that row have already been assigned values. The player who starts wants to achieve that both equalities are valid.

For which $n$ can they achieve this, no matter what the other does?
