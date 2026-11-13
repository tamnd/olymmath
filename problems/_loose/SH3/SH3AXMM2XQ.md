---
tag: SH3AXMM2XQ
kind: problem
type: answer
answer: (k,k,k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=146939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(a, b, c)$ of positive integers such that
$$
\begin{array}{l}
a^{2}+b^{2}=n \operatorname{lcm}(a, b)+n^{2} \\
b^{2}+c^{2}=n \operatorname{lcm}(b, c)+n^{2} \\
c^{2}+a^{2}=n \operatorname{lcm}(c, a)+n^{2}
\end{array}
$$
for some positive integer $n$.
