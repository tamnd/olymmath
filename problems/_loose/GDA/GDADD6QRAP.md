---
tag: GDADD6QRAP
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two friends, Esma and Ljerka, came up with a game: each letter of their names is replaced by a digit from 1 to 5 according to a given table. Thus, the name Esma has the code 4431, and Ljerka has 24351.

The digits of the obtained code $a_{1} a_{2} \ldots a_{k}$ are used for moving in steps of the same length. Starting from the initial point, one moves $a_{1}$ steps north, and for each subsequent digit $a_{i}$, one turns $90^{\circ}$ to the left and walks $a_{i}$ steps in that direction (thus $a_{2}$ steps west, $a_{3}$ steps south, $a_{4}$ steps east, and so on). The process is repeated (after the last digit, it starts again with the first digit of the code)

| 1 | 2 | 3 | 4 | 5 |
| :---: | :---: | :---: | :---: | :---: |
| $\mathrm{A}$ | $\mathrm{B}$ | $\mathrm{C}$ | $\mathrm{C}$ | $\mathrm{C}$ |
| $\mathrm{D}$ | $\mathrm{D} \check{Z}$ | $\mathrm{P}$ | $\mathrm{E}$ | $\mathrm{F}$ |
| $\mathrm{G}$ | $\mathrm{H}$ | $\mathrm{I}$ | $\mathrm{J}$ | $\mathrm{K}$ |
| $\mathrm{L}$ | $\mathrm{LJ}$ | $\mathrm{M}$ | $\mathrm{N}$ | $\mathrm{NJ}$ |
| $\mathrm{O}$ | $\mathrm{P}$ | $\mathrm{R}$ | $\mathrm{S}$ | S S |
| $\mathrm{T}$ | $\mathrm{U}$ | $\mathrm{V}$ | $\mathrm{Z}$ | $\check{Z}$ |

until returning to the initial point.

Esma concluded that she would never return to the starting point with her code. Why?

Ljerka returned to the starting point after exactly $5 n$ steps. Determine $n$ and prove that any person with 5 letters in their name will return to the starting point after at most 4 cycles, or repetitions of the code.
