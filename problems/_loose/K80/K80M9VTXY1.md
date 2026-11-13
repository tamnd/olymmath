---
tag: K80M9VTXY1
kind: problem
type: answer
answer: (n+1)(\begin{pmatrix}2n\\n\end{pmatrix})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75867
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To each sequence composed of n zeros and n ones, we assign a number which is the count of maximal segments of identical digits in it. (For example, the sequence 00111001 has 4 such segments $00,111,00,1$.) For a given $n$, we sum all numbers assigned to individual such sequences. Prove that the resulting sum is equal to

$$
(n+1)\left(\begin{array}{c}
2 n \\
n
\end{array}\right)
$$

(Patrik Bak)
