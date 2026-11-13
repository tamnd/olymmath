---
tag: TH4TWYD8F1
kind: problem
type: answer
answer: "-3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=192580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $t_{1}, t_{2}, \ldots, t_{n}, \ldots$ is defined as follows:

$$
\begin{aligned}
& t_{1}=14 \\
& t_{k}=24-5 t_{k-1}, \text { for each } k \geq 2
\end{aligned}
$$

For every positive integer $n, t_{n}$ can be expressed as $t_{n}=p \cdot q^{n}+r$, where $p, q$ and $r$ are constants. The value of $p+q+r$ is
(A) -5
(B) -3
(C) 3
(D) 17
(E) 31
