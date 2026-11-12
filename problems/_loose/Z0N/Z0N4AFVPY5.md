---
tag: Z0N4AFVPY5
kind: problem
type: answer
answer: 7+1=8;9-6=3;4\times5=20
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Juggling with numbers. Compose three simple arithmetic expressions from ten digits, using three of the four arithmetic operations - addition, subtraction, multiplication, and division. (In writing the expressions, only the symbols of the three chosen arithmetic operations are allowed.) Let us clarify this with an example. Consider three arithmetic expressions:

$$
3+4=7 ; 9-8=1 ; 30: 6=5
$$

This example cannot serve as a solution to the problem, since the digit 2 is missing, and the digit 3 is repeated twice.
