---
tag: A5AKASTA0M
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A board $n \times n$ is divided into $n^2$ unit squares and a number is written in each unit square.
Such a board is called * interesting* if the following conditions hold:
$\circ$ In all unit squares below the main diagonal, the number $0$ is written;
$\circ$ Positive integers are written in all other unit squares.
$\circ$ When we look at the sums in all $n$ rows, and the sums in all $n$ columns, those $2n$ numbers
are actually the numbers $1,2,...,2n$ (not necessarily in that order).

$a)$ Determine the largest number that can appear in a $6 \times 6$ *interesting* board.
$b)$ Prove that there is no *interesting* board of dimensions $7\times 7$.
