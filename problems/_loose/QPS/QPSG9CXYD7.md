---
tag: QPSG9CXYD7
kind: problem
type: answer
answer: "1993"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rita calculates the three numbers

$$
1+9-9+3=a, 1 \cdot 9+9-3=b, 1 \cdot 9 \cdot 9 \cdot 3=c
$$

She considers further possibilities for filling in the boxes in the row

$$
1 \square 9 \square 9 \square 3=
$$

with signs that are either + or - or $\cdot$. She is looking for all those insertions where the number to be calculated is greater than 30 but less than 100.

Find all such insertions; show that you have found all of them!

Add the numbers that result from these insertions!

To the sum thus found, add the product of the two smallest numbers found between 30 and 100! Finally, add the numbers calculated above as $a, b$, and $c$!
