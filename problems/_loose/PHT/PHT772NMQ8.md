---
tag: PHT772NMQ8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a positive integer with $n$ digits $(n \geqslant 3$ and $n \leqslant 9)$ above average if it meets the following two conditions:

- the number contains all digits from 1 to $n$ exactly once;
- for each digit except the first two, twice the digit is at least as large as the sum of the two digits immediately preceding it.

For example, 31254 is above average because it consists of the digits 1 to 5 and the following holds:

$$
2 \cdot 2 \geqslant 3+1, 2 \cdot 5 \geqslant 1+2 \text { and } 2 \cdot 4 \geqslant 2+5
$$

(a) Give an above average number of 4 digits where the first digit is 4.

(b) Show that there is no above average number of 4 digits where the second digit is 4.

(c) Determine for above average numbers of 7 digits all possible positions of the digit 7.
