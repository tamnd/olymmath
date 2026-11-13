---
tag: DZPXBBV92R
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=144878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We can determine the number of digits in the decimal representation of a positive integer by finding the highest power of 10 that is not greater than it. More precisely, an integer $N$ has $k$ digits in its decimal representation when $10^{k-1} \leq N < 10^{k}$. For example, 2016 has 4 digits. In some problems, it is important to find the number of digits involved in the result of arithmetic operations.

a) Determine the number of digits in the product $111111 \cdot 1111111111$, where the first factor has 6 digits and the second has 10 digits.

b) The numbers $2^{2016}$ and $5^{2016}$ are written side by side to form a single number $N$ that has a number of digits that is the sum of the number of digits of the two numbers. For example, if we did this with $2^{3}$ and $5^{3}$, we would obtain the number 8125, which has 4 digits. Determine the number of digits of $N$.
