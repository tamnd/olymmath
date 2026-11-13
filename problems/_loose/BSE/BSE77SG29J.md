---
tag: BSE77SG29J
kind: problem
type: answer
answer: "14"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a blackboard, Kiara wrote 20 integers, all of them different from zero. Then, for each pair of numbers written by Kiara, Yndira wrote on the same blackboard the respective product between them (including, if the result of some product was already written, Yndira repeated it).

For example, if the numbers 2, 3, 4, and 6 were among those written by Kiara, then Yndira would have written the numbers $6, 8, 12, 12, 18$, and 24, because we have $6=2 \times 3$, $8=2 \times 4$, $12=2 \times 6=3 \times 4$, $18=3 \times 6$, and $24=4 \times 6$. Note that the number 6 would have been written again even though it was already written by Kiara, while the number 12 would have been written twice by Yndira.

a) In total, how many numbers were written by Kiara and Yndira on the blackboard?

b) Suppose that, of the total numbers written on the blackboard, exactly 120 are positive. If Kiara wrote more positive numbers than negative ones, how many of the numbers written by Kiara were positive?
