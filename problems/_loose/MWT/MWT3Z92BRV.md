---
tag: MWT3Z92BRV
kind: problem
type: answer
answer: "1944"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ be an integer greater than 1, and the sequence $\left\{a_{n}\right\}$ is defined as follows:
$$
\begin{array}{l}
a_{0}=m, a_{1}=\varphi(m), \\
a_{2}=\varphi^{(2)}(m)=\varphi(\varphi(m)), \cdots, \\
a_{n}=\varphi^{(n)}(m)=\varphi\left(\varphi^{(n-1)}(m)\right),
\end{array}
$$

where $\varphi(m)$ is the Euler's function.
If for any non-negative integer $k$, we have $a_{k+1} \mid a_{k}$, find the largest positive integer $m$ not exceeding 2016.
