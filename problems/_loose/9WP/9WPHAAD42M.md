---
tag: 9WPHAAD42M
kind: problem
type: answer
answer: -2,0,2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let q be a real number. Margaret wrote 10 distinct real numbers in a line. Then she adds three more lines as follows:

$\triangleright$ on the $2^{\text{nd}}$ line, she writes all numbers of the form $a-b$, where $a$ and $b$ are real numbers (not necessarily distinct) from the $1^{\text{st}}$ line;

$\triangleright$ on the $3^{\text{rd}}$ line, she writes all numbers of the form $qab$, where $a$ and $b$ are real numbers (not necessarily distinct) from the $2^{\text{nd}}$ line;

$\triangleright$ on the $4^{\text{th}}$ line, she writes all numbers of the form $a^{2}+b^{2}-c^{2}-d^{2}$, where $a, b, c$ and $d$ are real numbers (not necessarily distinct) from the $2^{\text{nd}}$ line.

Find all real numbers q such that, regardless of the 10 numbers written on the $1^{\text{st}}$ line, each number on the $3^{\text{rd}}$ line is also on the $4^{\text{th}}$ line.
