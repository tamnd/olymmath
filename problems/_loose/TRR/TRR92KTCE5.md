---
tag: TRR92KTCE5
kind: problem
type: answer
answer: (n-1)^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Given any $n$ ($> 1$) coprime positive integers $a_1, a_2, \dots, a_n$, denote $A = a_1 + a_2 + \dots + a_n$. Let $d_i = (A, a_i)$ (the greatest common divisor), $i = 1, 2, \dots, n$.
Let $D_i$ be the greatest common divisor of $\{a_1, a_2, \dots, a_n\} \setminus \{a_i\}$, $i = 1, 2, \dots, n$. Find the minimum of $\prod_{i=1}^n \frac{A - a_i}{d_i D_i}$.
(posed by Zhang Sihui)
