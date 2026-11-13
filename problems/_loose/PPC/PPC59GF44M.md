---
tag: PPC59GF44M
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{1,2,3,4\}, a_{1}, a_{2}, \cdots, a_{k}$ be a sequence composed of numbers from $S$, and it includes all permutations of $S$ that do not end with 1, i.e., for any permutation $\left(b_{1}, b_{2}, b_{3}, b_{4}\right)$ of the 4 numbers in $S$, where $b_{4} \neq 1$, there exist $i_{1}, i_{2}, i_{3}, i_{4}$, such that
$$
a_{i_{j}}=b_{j}, j=1,2,3,4 \text { and } 1 \leqslant i_{1}<i_{2}<i_{3}<i_{4} \leqslant k .
$$

Find the minimum value of the number of terms $k$ in the sequence.
