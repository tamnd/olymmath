---
tag: KHZM413V0B
kind: problem
type: answer
answer: "2048"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Pierino's calculator has a display, which initially shows the number 0, and two buttons: the +1 button, which adds 1 to the number on the display, and the $\times 3$ button, which multiplies the number on the display by 3. If the +1 button is pressed twice consecutively, the calculator explodes. If the calculator's display can hold at most 5 digits, how many numbers can Pierino obtain with an appropriate sequence of button presses (without making the calculator explode)?
(A) 2048
(B) 2187
(C) 4096
(D) 6561
(E) 66666
