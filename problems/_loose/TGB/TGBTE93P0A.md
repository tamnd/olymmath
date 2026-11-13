---
tag: TGBTE93P0A
kind: problem
type: answer
answer: "1729"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We use $\bar{A}$ to denote the reverse of a number (if a number is read from right to left, a new number is obtained, which is the reverse of the original number, for example, $\overline{12349}=94321$), and use $S(n)$ to denote the sum of the digits of the number $n$ (for example, $S(123) = 1+2+3=6$). There are the following two conditions:
(1) $\mathrm{n}=\mathrm{S}(\mathrm{n}) \times \overline{\mathrm{S}(\mathrm{n})}$;
(2) Find all prime factors, calculate the sum of the squares of these prime factors, then divide the result by 2, remove all 0s from the result, and the final result is still $\mathrm{n}$ (for example, if the sum of the squares of all prime factors divided by 2 is 3025, then removing all 0s results in 325).
The positive integer $\mathbf{n}=$ $ $
