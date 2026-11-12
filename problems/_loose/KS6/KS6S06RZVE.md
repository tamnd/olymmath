---
tag: KS6S06RZVE
kind: problem
type: answer
answer: "670"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$(5-7,8)$ The phone PIN code consists of 4 digits (and can start with zero, for example, 0951). Petya calls "lucky" those PIN codes where the sum of the outer digits equals the sum of the middle digits, for example $1357: 1+7=3+5$. In his phone, he uses only "lucky" PIN codes. Petya says that even if he forgets one digit (but remembers its position), he can easily restore it. And if he forgets two digits (but remembers their positions), he will have to try only a small number of PIN codes.

a) How many PIN codes will Petya have to try in the worst case?

b) How many "lucky" PIN codes exist in total?
