---
tag: T1V3VG4VJ1
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian mathematical olympiad
---
On 11 sheets of paper 11 following statements are written (each sheet contains exactly one statement):
1) There are no sheets with false statements to the left of this sheet.
2) There is exactly 1 sheet with a false statement to the left of this sheet.
3) There are exactly 2 sheets with false statements to the left of this sheet.
...
11) There are exactly 10 sheets with false statements to the left of this sheet.

The sheets were put in a row (from the left to the right). After that some of the statements become true while the others become false. Find the greatest possible number of true statements.

(I. Rubanov)
