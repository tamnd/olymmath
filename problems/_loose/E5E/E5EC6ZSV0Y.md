---
tag: E5EC6ZSV0Y
kind: problem
type: answer
answer: "yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Do there exist six pairwise distinct positive integers $a$, $b$, $c$, $d$, $e$ and $m$, such that
$$
\begin{cases}
a+b+c = d+e+m, \\
ab+bc+ac = de+em+dm, \\
abc = dem + 3^{2021} \cdot 2^{2022}?
\end{cases}
$$
(Igor Voronovich)
