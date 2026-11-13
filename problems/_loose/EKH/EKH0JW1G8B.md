---
tag: EKH0JW1G8B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1955 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1898941
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56806
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249704
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1955
    source: hf-ai-mo-aops
    label: 1955 Moscow Mathematical Olympiad
---
Consider $\vartriangle A_0B_0C_0$ and points $C_1, A_1, B_1$ on its sides $A_0B_0, B_0C_0, C_0A_0$ , points $C_2, A_2,B_2$ on the sides $A_1B_1, B_1C_1, C_1A_1$ of $\vartriangle A_1B_1C_1$ , respectively, etc., so that $$ \frac{A_0B_1}{B_1C_0}= \frac{B_0C_1}{C_1A_0}= \frac{C_0A_1}{A_1B_0}= k, \frac{A_1B_2}{B_2C_1}= \frac{B_1C_2}{C_2A_1}= \frac{C_1A_2}{A_2B_1}= \frac{1}{k^2} $$ and, in general, $$ \frac{A_nB_{n+1}}{B_{n+1}C_n}= \frac{B_nC_{n+1}}{C_{n+1}A_n}= \frac{C_nA_{n+1}}{A_{n+1}B_n}
=k^{2n} $$ for $n$ even , $\frac{1}{k^{2n}}$ for $n$ odd. Prove that $\vartriangle ABC$ formed by lines $A_0A_1, B_0B_1, C_0C_1$ is contained in $\vartriangle A_nB_nC_n$ for any $n$ .
