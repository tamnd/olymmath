---
tag: BF9YZ6RR2S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Teacher Jacira proposes a game on the board:

I) One of the students writes a sequence with $n$ non-zero digits;

II) A second student must write another sequence with ( $n-1)$ digits where the first is the positive difference between the first two digits of the first sequence, the second is the difference between the second and third digit of the first sequence, and so on;

III) A third student uses the same process, but using the second sequence.

IV) The process continues until the last student writes only one digit on the board.

V) If a zero appears in any of the sequences, we say it is a HOLED SEQUENCE and we do not continue the process.

For example:

| $1^{\text{st}}$ student | 5 | 8 | 9 | |
| :---: | :---: | :---: | :---: | :---: |
| $2^{\text{nd}}$ student | 3 | | | 6 |
| $3^{\text{rd}}$ student | | 2 | 5 | |
| $4^{\text{th}}$ student | | | | |

After playing the game several times, the teacher proposes some challenges:

a) Continue the sequences below, given the first sequence written by the first student.

| $1^{\text{st}}$ student | 1 | 2 | 4 | 8 |
| :---: | :---: | :---: | :---: | :---: |
| $2^{\text{nd}}$ student | | | | |
| $3^{\text{rd}}$ student | | | | |
| $4^{\text{th}}$ student | | | | |

b) If a game has 5 sequences, with the last one being the digit 5, construct an example for this situation.

c) Explain why it is not possible to construct a situation with 6 sequences, where the last one is the digit 5.
