---
tag: N0H3MDNJPF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136846
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(n)$ be a function defined on the set of positive integers, and for any positive integer $n$, we have
$$
\begin{array}{l}
f(1)=f(2)=1, \\
f(3 n)=f(n)+2020, \\
f(3 n+1)=3 f(n)+2019, \\
f(3 n+2)=2019 f(n) . \\
\text { Let } A_{n}=\{i \mid 1 \leqslant i \leqslant n, f(i) \text { is odd }\}, \\
B_{n}=\{i \mid 1 \leqslant i \leqslant n, f(i) \text { is even }\} .
\end{array}
$$

(1) Prove: For any positive integer $n$, we have
$$
\left|A_{n}\right|>\left|B_{n}\right| \text {; }
$$
(2) Determine the parity of $f(2019)$.
