---
tag: F7PHDBEFFF
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies
$$
a_{n+1}+(-1)^{n} a_{n}=2 n-1 \text {, }
$$

and the sum of the first 2019 terms of the sequence $\left\{a_{n}-n\right\}$ is 2019. Then the value of $a_{2020}$ is $ $ .
6.1.
$$
\begin{array}{l}
\text { From } a_{n+1}+(-1)^{n} a_{n}=2 n-1 \\
\Rightarrow\left\{\begin{array}{l}
a_{2 n+1}+a_{2 n}=4 n-1, \\
a_{2 n}-a_{2 n-1}=4 n-3, \\
a_{2 n+2}-a_{2 n+1}=4 n+1
\end{array}\right. \\
\Rightarrow\left\{\begin{array}{l}
a_{2 n+1}+a_{2 n-1}=2, \\
a_{2 n+2}+a_{2 n}=8 n
\end{array}\right. \\
\Rightarrow a_{2 n-1}+a_{2 n}+a_{2 n+1}+a_{2 n+2}=8 n+2 \\
\Rightarrow\left(a_{2 n-1}-(2 n-1)\right)+\left(a_{2 n}-2 n\right)+a_{2 n+1}- \\
(2 n+1)+\left(a_{2 n+2}-(2 n+2)\right)=0 .
\end{array}
$$
