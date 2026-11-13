---
tag: RKJNM1C2W5
kind: problem
type: answer
answer: a_{3}=3,a_{4}=4,a_{r}\leqslanta_{r-1}+2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose among $r$ people, the transmission of messages is carried out through telephone calls. When two people $A$ and $B$ are talking on the phone, $A$ tells $B$ everything he knows at that moment, and $B$ also tells $A$ everything he knows at that moment. Let $a_{r}$ denote the minimum number of phone calls required among these $r$ people so that everyone knows all the messages of the $r$ people.
(1) Find $a_{3}$;
(2) Find $a_{4}$;
(3) For $r \geqslant 3$, prove that $a_{r} \leqslant a_{r-1}+2$.
