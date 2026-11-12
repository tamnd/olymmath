---
tag: 9YSDENC9D4
kind: problem
type: answer
answer: "49"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5403
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
According to the condition, these numbers are written only with the digits $0,1,2,6,8$. Then, three-digit numbers that are multiples of 4 can end with exactly 10 variants: $00,08,12,16,20,28,60,68,80,88$. In each of these 10 variants, the first place can be occupied by any of the 4 digits $1,2,6,8$. Additionally, the last 8 variants give two-digit numbers, and the second one gives a single-digit number. Therefore, the total number of such numbers is: $10 \cdot 4+8+1=49$.
