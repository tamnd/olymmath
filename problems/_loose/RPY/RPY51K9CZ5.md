---
tag: RPY51K9CZ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74238
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Mathematical Olympiad, Nível 2
---
$$
\begin{gathered}
1^{2}+2^{2}+(1 \times 2)^{2}=3^{2} \\
2^{2}+3^{2}+(2 \times 3)^{2}=7^{2} \\
3^{2}+4^{2}+(3 \times 4)^{2}=13^{2}
\end{gathered}
$$

Prove that if $a$ and $b$ are consecutive integers, then the number

$$
a^{2}+b^{2}+(a b)^{2}
$$

is a perfect square.
